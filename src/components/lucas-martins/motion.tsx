"use client";
import { useEffect } from "react";
export function LucasMotion() {
 useEffect(()=>{
  const root=document.querySelector("[data-lucas-page]");
  const preference=matchMedia("(prefers-reduced-motion: reduce)");
  if(!root)return;
  const elements=Array.from(root.querySelectorAll<HTMLElement>("[data-lucas-reveal]"));
  const showAll=()=>elements.forEach(element=>{element.dataset.reveal="visible";});
  if(preference.matches){showAll();return;}
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){(entry.target as HTMLElement).dataset.reveal="visible";observer.unobserve(entry.target);}}),{threshold:.03});
  elements.forEach(element=>{const rect=element.getBoundingClientRect();element.dataset.reveal=rect.top<innerHeight&&rect.bottom>0?"visible":"pending";observer.observe(element);});
  const onPreference=()=>{if(preference.matches){observer.disconnect();showAll();}};
  preference.addEventListener("change",onPreference);
  window.addEventListener("beforeprint",showAll);
  return()=>{observer.disconnect();showAll();preference.removeEventListener("change",onPreference);window.removeEventListener("beforeprint",showAll);};
 },[]);
 return null;
}


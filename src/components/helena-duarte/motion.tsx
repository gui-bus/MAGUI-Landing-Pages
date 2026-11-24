"use client";

import { useEffect } from "react";

export function HelenaMotion() {
  useEffect(() => {
    const root = document.querySelector("[data-helena-page]");
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!root || preference.matches) return;
    const elements = Array.from(root.querySelectorAll<HTMLElement>("[data-helena-reveal]"));
    const revealAll = () => elements.forEach(element => { element.dataset.helenaRevealState = "visible"; });
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).dataset.helenaRevealState = "visible";
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .08 });
    elements.forEach(element => {
      const bounds = element.getBoundingClientRect();
      element.dataset.helenaRevealState = bounds.top < window.innerHeight && bounds.bottom > 0 ? "visible" : "pending";
      observer.observe(element);
    });
    const onPreferenceChange = () => { if (preference.matches) { observer.disconnect(); revealAll(); } };
    preference.addEventListener("change", onPreferenceChange);
    window.addEventListener("beforeprint", revealAll);
    return () => { observer.disconnect(); revealAll(); preference.removeEventListener("change", onPreferenceChange); window.removeEventListener("beforeprint", revealAll); };
  }, []);
  return null;
}

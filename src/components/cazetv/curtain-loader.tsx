"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function CurtainLoader() {
  const [stage, setStage] = useState<"visible" | "animating" | "hidden">("visible");

  useEffect(() => {

    document.body.style.overflow = "hidden";


    const animTimeout = setTimeout(() => {
      setStage("animating");
    }, 2000);

    const hideTimeout = setTimeout(() => {
      setStage("hidden");
      document.body.style.overflow = "unset";
    }, 3000);

    return () => {
      clearTimeout(animTimeout);
      clearTimeout(hideTimeout);
      document.body.style.overflow = "unset";
    };
  }, []);

  if (stage === "hidden") return null;

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes cazeIconBounce {
              0% {
                transform: scale(0) rotate(-15deg);
                opacity: 0;
              }
              50% {
                transform: scale(1.1) rotate(5deg);
              }
              75% {
                transform: scale(0.97) rotate(-2deg);
              }
              100% {
                transform: scale(1) rotate(0deg);
                opacity: 1;
              }
            }

            @keyframes cazeTextReveal {
              0% {
                width: 0;
                opacity: 0;
                transform: scaleX(0.2);
                margin-left: -35px;
              }
              30% {
                opacity: 0.7;
              }
              70% {
                width: 140px;
                transform: scaleX(1.1);
                margin-left: 2px;
              }
              85% {
                transform: scaleX(0.97);
              }
              100% {
                width: 130px;
                opacity: 1;
                transform: scaleX(1);
                margin-left: 2px;
              }
            }

            .animate-caze-icon {
              animation: cazeIconBounce 0.7s cubic-bezier(0.25, 1, 0.5, 1) forwards;
            }

            .animate-caze-text {
              animation: cazeTextReveal 0.8s cubic-bezier(0.25, 1, 0.5, 1) 0.5s forwards;
              overflow: hidden;
              display: flex;
              align-items: center;
            }
          `
        }}
      />

      <div
        className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-zinc-950 transition-transform duration-[1000ms] cubic-bezier(0.85, 0, 0.15, 1) ${
          stage === "animating" ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="flex items-center justify-center">

          <div className="relative w-28 h-28 md:w-32 md:h-32 opacity-0 animate-caze-icon z-10">
            <Image
              src="/images/cazetv/icone-caze-tv.webp"
              alt="CazéTV Icon"
              fill
              sizes="(max-width: 768px) 112px, 128px"
              className="object-contain"
              priority
            />
          </div>


          <div className="animate-caze-text opacity-0 w-0 h-20 md:h-24 relative">
            <div className="relative w-[130px] h-full">
              <Image
                src="/images/cazetv/texto-caze-tv-branco.webp"
                alt="CazéTV Text"
                fill
                sizes="130px"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

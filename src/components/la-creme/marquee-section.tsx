"use client";

import { dailyDrops } from "./data";
import { AnimatedSection } from "./motion";

export function LaCremeMarqueeSection() {
  return (
    <>

        <AnimatedSection className="bg-[#ffd8df] py-7 text-[#2b1714]">
          <div
            className="flex w-max items-center gap-10 whitespace-nowrap text-4xl font-semibold tracking-tighter md:text-4xl"
            style={{ animation: "pastry-marquee 26s linear infinite" }}
          >
            {[...dailyDrops, ...dailyDrops, ...dailyDrops].map(
              (item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="inline-flex items-center gap-10"
                >
                  {item}
                  <span className="size-3 rounded-full bg-[#9d2d40]" />
                </span>
              ),
            )}
          </div>
        </AnimatedSection>
    </>
  );
}

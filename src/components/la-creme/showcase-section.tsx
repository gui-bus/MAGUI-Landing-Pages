"use client";

import { ArrowRightIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { signatures, whatsapp } from "./data";
import { AnimatedSection, ease, itemReveal, motion, staggerReveal } from "./motion";

export function LaCremeShowcaseSection() {
  return (
    <>

        <AnimatedSection
          id="vitrine"
          className="px-5 py-24 md:px-8 md:py-32 lg:px-10"
        >
          <motion.div className="mx-auto max-w-385" variants={staggerReveal}>
            <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <motion.div variants={itemReveal}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#9d2d40]">
                  vitrine
                </p>
                <h2 className="mt-7 max-w-4xl text-5xl font-semibold leading-none tracking-tighter md:text-7xl">
                  Doces frescos, bonitos e prontos para roubar a cena.
                </h2>
              </motion.div>
              <motion.p
                className="max-w-xl text-lg leading-8 text-black/50"
                variants={itemReveal}
              >
                Pequenas quantidades, sabores sazonais e uma seleção feita para
                café, presente ou celebração de última hora.
              </motion.p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {signatures.map((item, index) => (
                <motion.article
                  key={item.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.28 }}
                  transition={{ duration: 0.5, delay: index * 0.06, ease }}
                  whileHover={{ y: -6, transition: { duration: 0.35, ease } }}
                  className="group overflow-hidden rounded-none bg-white shadow-[0_24px_80px_rgba(43,23,20,0.07)]"
                >
                  <div className="relative h-82.5 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      quality={74}
                      sizes="(min-width: 768px) 31vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#2b1714]/58 via-transparent to-transparent" />
                  </div>

                  <div className="p-7">
                    <h3 className="text-3xl font-semibold tracking-[-0.04em]">
                      {item.name}
                    </h3>
                    <p className="mt-5 text-sm leading-7 text-black/50">
                      {item.detail}
                    </p>
                    <div className="mt-10 flex items-center justify-between gap-4 border-t border-[#2b1714]/10 pt-6">
                      <p className="text-4xl font-semibold text-[#9d2d40]">
                        {item.price}
                      </p>
                      <Link
                        href={whatsapp}
                        className="group/button inline-flex items-center gap-2 rounded-full bg-[#2b1714] px-4 py-3 text-xs font-semibold text-white transition duration-300 hover:bg-[#9d2d40]"
                      >
                        Encomendar
                        <ArrowRightIcon
                          size={15}
                          className="transition duration-300 group-hover/button:translate-x-1"
                        />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </AnimatedSection>
    </>
  );
}

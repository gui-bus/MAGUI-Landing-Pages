import type { SVGProps, ReactNode } from "react";

export type LucasIconName = "home" | "key" | "conversation" | "document" | "map" | "credit" | "check" | "care" | "bed" | "area" | "pin";

const drawing: Record<LucasIconName, ReactNode> = {
  bed: <><path d="M7 35V19h34v16M7 30h34M12 19V10h24v9M18 19v-5h12v5M7 35v5M41 35v5" /></>,
  area: <><path d="M7 17V7h10M31 7h10v10M41 31v10H31M17 41H7V31M17 31l14-14M17 22v9h9M22 17h9v9" /></>,
  pin: <><path d="M37 20c0 10-13 22-13 22S11 30 11 20a13 13 0 0 1 26 0Z" /><circle cx="24" cy="20" r="5" /></>,
  home: <><path d="M8 22 24 8l16 14M12 19v21h24V19" /><path d="M21 40V27h8v13M24 8v8" /></>,
  key: <><circle cx="17" cy="17" r="9" /><path d="m23.5 23.5 17 17M29 29l5-5M34 34l5-5" /><circle cx="15" cy="15" r="1.5" /></>,
  conversation: <><path d="M9 10h30v24H22l-10 7v-7H9z" /><path d="M16 18h16M16 25h11" /></>,
  document: <><path d="M12 6h17l8 8v28H12z" /><path d="M29 6v9h8M18 23h13M18 29h13M18 35h8" /></>,
  map: <><path d="m6 15 12-5 12 5 12-5v28l-12 5-12-5-12 5zM18 10v28M30 15v28" /><circle cx="24" cy="21" r="3" /></>,
  credit: <><rect x="7" y="12" width="34" height="25" rx="1" /><path d="M7 21h34M13 30h9M29 30h6" /></>,
  check: <><circle cx="24" cy="24" r="17" /><path d="m16 24 5 5 11-12" /></>,
  care: <><path d="M24 40S7 29 7 17a9 9 0 0 1 17-4 9 9 0 0 1 17 4c0 12-17 23-17 23Z" /><path d="M17 24h14M24 17v14" /></>,
};

export function LucasIcon({ name, size = 32, ...props }: SVGProps<SVGSVGElement> & { name: LucasIconName; size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{drawing[name]}</svg>;
}

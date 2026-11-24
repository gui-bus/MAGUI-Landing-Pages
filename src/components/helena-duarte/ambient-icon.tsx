import { Compass, Key, Plant } from "@phosphor-icons/react/dist/ssr";
import s from "./page.module.css";

export function AmbientIcon({ kind, className = "" }: { kind: "compass" | "key" | "plant"; className?: string }) {
  const Icon = kind === "compass" ? Compass : kind === "key" ? Key : Plant;
  return <span aria-hidden="true" className={`${s.ambientIcon} ${className}`}><Icon weight="thin" /></span>;
}

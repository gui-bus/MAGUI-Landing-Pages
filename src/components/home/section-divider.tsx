import Image from "next/image";

export function SectionDivider() {
  return (
    <div className="studio-section-divider" aria-hidden="true">
      <span className="studio-section-divider-line" />
      <span className="studio-section-divider-mark">
        <Image
        src="/utils/icon.svg"
        alt=""
        width={28}
        height={27}
        className="studio-section-divider-icon"
        />
      </span>
      <span className="studio-section-divider-line" />
    </div>
  );
}

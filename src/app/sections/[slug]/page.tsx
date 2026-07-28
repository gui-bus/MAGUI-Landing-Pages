import { permanentRedirect } from "next/navigation";
import { sections } from "@/components/sections/registry";

export function generateStaticParams() {
  return sections.map((section) => ({ slug: section.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function LegacySectionPage(
  props: PageProps,
) {
  const { slug } = await props.params;
  permanentRedirect(`/projetos/${slug}`);
}

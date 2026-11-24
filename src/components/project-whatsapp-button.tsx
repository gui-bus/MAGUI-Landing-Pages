import { WhatsappButton } from "@/components/whatsapp-button";
import { lucasWhatsappMessage, lucasWhatsappNumber } from "@/components/lucas-martins/data";
import { helenaWhatsappMessage, helenaWhatsappNumber } from "@/components/helena-duarte/data";
import { arcoWhatsappMessage, arcoWhatsappNumber } from "@/components/arco/data";
import { bitesWhatsapp } from "@/components/bites/data";
import {
  dragonTattooPhoneNumber,
  dragonTattooWhatsappMessage,
} from "@/components/dragon-tattoo/data";
import {
  floraWhatsappMessage,
  floraWhatsappNumber,
} from "@/components/flora/data";
import { havenWhatsappMessage, havenWhatsappNumber } from "@/components/haven/data";
import { whatsapp as laCremeWhatsapp } from "@/components/la-creme/data";
import { whatsappHref as kromaWhatsapp } from "@/components/kroma/data";
import { nachoLibreWhatsapp } from "@/components/nacho-libre/data";
import {
  powervetWhatsappMessage,
  powervetWhatsappNumber,
} from "@/components/powervet/data";
import { pulseWhatsapp } from "@/components/pulse/data";
import { sayegWhatsappMessage, sayegWhatsappNumber } from "@/components/sayeg/data";
import { shinobiWhatsappHref } from "@/components/shinobi/data";
import { stepWhatsappMessage, stepWhatsappNumber } from "@/components/step/data";
import { links as vittaLinks } from "@/components/vitta/data";

type ProjectWhatsappConfig = {
  message: string;
  phoneNumber: string;
};

type ProjectWhatsappButtonProps = {
  projectSlug: string;
  projectTitle: string;
};

const defaultPhoneNumber = "5500000000000";

function parseWhatsappHref(href: string): ProjectWhatsappConfig {
  const url = new URL(href);
  const phoneNumber = url.pathname.replace(/\D/g, "");
  const message = url.searchParams.get("text") ?? "";

  return { phoneNumber, message };
}

const projectWhatsappConfig: Record<string, ProjectWhatsappConfig> = {
  "lucas-martins": {
    phoneNumber: lucasWhatsappNumber,
    message: lucasWhatsappMessage,
  },
  "helena-duarte": {
    phoneNumber: helenaWhatsappNumber,
    message: helenaWhatsappMessage,
  },
  "atlas-living": {
    phoneNumber: defaultPhoneNumber,
    message:
      "Oi, Atlas Living. Quero receber informacoes sobre o empreendimento.",
  },
  "arco-odontologia": {
    phoneNumber: arcoWhatsappNumber,
    message: arcoWhatsappMessage,
  },
  bites: parseWhatsappHref(bitesWhatsapp),
  flow: {
    phoneNumber: defaultPhoneNumber,
    message:
      "Oi, FLOW. Quero orientacao para montar ou evoluir meu aquario marinho.",
  },
  flora: {
    phoneNumber: floraWhatsappNumber,
    message: floraWhatsappMessage,
  },
  "cifrasec": {
    phoneNumber: defaultPhoneNumber,
    message:
      "Oi, CifraSec. Quero falar sobre seguranca digital para minha empresa.",
  },
  "cume-vinhos": {
    phoneNumber: defaultPhoneNumber,
    message:
      "Oi, Cume Vinhos. Quero saber mais sobre visitas, rotulos e clube de vinhos.",
  },
  "doca-norte": {
    phoneNumber: defaultPhoneNumber,
    message:
      "Oi, Doca Norte. Quero entender melhor a solucao para operacao portuaria.",
  },
  "dragon-tattoo": {
    phoneNumber: dragonTattooPhoneNumber,
    message: dragonTattooWhatsappMessage,
  },
  haven: {
    phoneNumber: havenWhatsappNumber,
    message: havenWhatsappMessage,
  },
  kroma: parseWhatsappHref(kromaWhatsapp),
  "la-creme": parseWhatsappHref(laCremeWhatsapp),
  "nacho-libre": parseWhatsappHref(nachoLibreWhatsapp),
  "novera-labs": {
    phoneNumber: defaultPhoneNumber,
    message:
      "Oi, Novera Labs. Quero conversar sobre desenvolvimento, qualidade e transferencia.",
  },
  powervet: {
    phoneNumber: powervetWhatsappNumber,
    message: powervetWhatsappMessage,
  },
  step: {
    phoneNumber: stepWhatsappNumber,
    message: stepWhatsappMessage,
  },
  pulse: parseWhatsappHref(pulseWhatsapp),
  "reforma-atelier": {
    phoneNumber: defaultPhoneNumber,
    message:
      "Oi, Reforma Atelier. Quero falar sobre curadoria, reparo ou redesign de pecas.",
  },
  "sayeg-beauty-studio": {
    phoneNumber: sayegWhatsappNumber,
    message: sayegWhatsappMessage,
  },
  shinobi: parseWhatsappHref(shinobiWhatsappHref),
  "cazetv": {
    phoneNumber: defaultPhoneNumber,
    message:
      "Oi, CazéTV! Quero falar sobre transmissões e parcerias.",
  },
  vitta: parseWhatsappHref(vittaLinks.whatsapp),
};

export function ProjectWhatsappButton({
  projectSlug,
  projectTitle,
}: ProjectWhatsappButtonProps) {
  const config = projectWhatsappConfig[projectSlug] ?? {
    phoneNumber: defaultPhoneNumber,
    message: `Oi, ${projectTitle}. Quero saber mais sobre o projeto.`,
  };

  return (
    <WhatsappButton
      phoneNumber={config.phoneNumber}
      message={config.message}
    />
  );
}

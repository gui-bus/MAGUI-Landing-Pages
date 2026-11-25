import type { ComponentType } from "react";
import lucasMartinsCover from "../../../public/images/lucas-martins/project-cover.webp";
import helenaDuarteCover from "../../../public/images/helena-duarte/project-cover.webp";
import LucasMartinsLanding from "@/components/sections/lucas-martins";
import HelenaDuarteLanding from "@/components/sections/helena-duarte";
import Landing02NachoLibre from "@/components/sections/nacho-libre";
import Landing03CosmeticoEssencial from "@/components/sections/vitta";
import Landing05Pulse from "@/components/sections/pulse";
import FlowLanding from "@/components/sections/flow";
import BitesLanding from "@/components/sections/bites";
import Landing11EnergiaSolarIndustrial from "@/components/sections/kroma";
import Landing13LogisticaFria from "@/components/sections/landing-13-logistica-fria";
import CazeTVLanding from "@/components/sections/cazetv";
import Landing15Ciberseguranca from "@/components/sections/landing-15-ciberseguranca";
import Landing16ConfeitariaLaCreme from "@/components/sections/la-creme";
import Landing17ModaCircular from "@/components/sections/landing-17-moda-circular";
import Landing18VinhoAltitude from "@/components/sections/landing-18-vinho-altitude";
import Landing19LaboratorioFarmaceutico from "@/components/sections/landing-19-laboratorio-farmaceutico";
import Landing20InfraestruturaPortuaria from "@/components/sections/landing-20-infraestrutura-portuaria";
import Landing21Shinobi from "@/components/sections/shinobi";
import SayegLanding from "@/components/sections/sayeg";
import PowervetLanding from "@/components/sections/powervet";
import ArcoLanding from "@/components/sections/arco";
import DragonTattooLanding from "@/components/sections/dragon-tattoo";
import FloraLanding from "@/components/sections/flora";
import HavenLanding from "@/components/sections/haven";
import StepLanding from "@/components/sections/step";

export type SectionEntry = {
  aliases?: string[];
  category: string;
  cardImage?: string;
  component: ComponentType;
  description: string;
  goal: string;
  index: string;
  industry: string;
  projectType: string;
  seoDescription?: string;
  seoTitle?: string;
  slug: string;
  tags: string[];
  title: string;
  visible: boolean;
};

export const sections: SectionEntry[] = [
  {
    index: "23",
    slug: "lucas-martins",
    title: "Lucas Martins",
    description: "Corretor especializado no primeiro imóvel em São Paulo e região, com orientação próxima e um caminho explicado do começo às chaves.",
    category: "Landing Pages",
    cardImage: lucasMartinsCover.src,
    industry: "Imobiliário",
    projectType: "Especialista no primeiro imóvel",
    seoTitle: "MAGUI.studio | Lucas Martins",
    seoDescription: "Lucas Martins: seu parceiro na compra do primeiro imóvel em São Paulo e região, com opções de apartamentos, orientação sobre o Minha Casa, Minha Vida e atendimento pessoal.",
    goal: "Aproximar a conquista do primeiro imóvel com informação clara, planejamento e atendimento acolhedor.",
    tags: ["Primeiro imóvel", "Minha Casa, Minha Vida", "Planejamento"],
    visible: true,
    component: LucasMartinsLanding,
  },
  {
    index: "22",
    slug: "helena-duarte",
    title: "Helena Duarte",
    description: "Curadoria imobiliária em Curitiba, com seleção de imóveis, atendimento pessoal e um olhar atento para cada novo começo.",
    category: "Landing Pages",
    cardImage: helenaDuarteCover.src,
    industry: "Imobiliário",
    projectType: "Corretora de imóveis",
    seoTitle: "MAGUI.studio | Helena Duarte",
    seoDescription: "Helena Duarte: curadoria imobiliária em Curitiba com 14 anos de experiência, seleção de casas e apartamentos, imóveis na planta e atendimento personalizado.",
    goal: "Transformar a busca por um imóvel em uma experiência de curadoria, confiança e contato personalizado.",
    tags: ["Curadoria imobiliária", "Imóveis", "Atendimento pessoal"],
    visible: true,
    component: HelenaDuarteLanding,
  },
  {
    index: "01",
    slug: "nacho-libre",
    aliases: ["landing-02-nacho-libre"],
    title: "Nacho Libre",
    description:
      "Restaurante mexicano moderno com tacos, burritos, nachos, drinks, rodízio e autoatendimento.",
    category: "Landing Pages",
    cardImage: "/images/nacho-libre/project-cover.webp",
    industry: "Gastronomia",
    projectType: "Restaurante mexicano",
    seoTitle: "Nacho Libre | Restaurante mexicano moderno | MAGUI.studio",
    seoDescription:
      "Landing page do Nacho Libre com tacos, burritos, nachos, drinks, rodízio e uma experiência digital vibrante para restaurante mexicano.",
    goal: "Transformar cardápio, atendimento e atmosfera em uma experiência digital vibrante.",
    tags: ["Cardápio", "Pedidos", "Experiência de marca"],
    visible: true,
    component: Landing02NachoLibre,
  },
  {
    index: "02",
    slug: "vitta",
    aliases: ["landing-03-cosmetico-essencial"],
    title: "VITTA",
    description:
      "Clínica de estética focada em saúde da pele, protocolos personalizados e acompanhamento.",
    category: "Landing Pages",
    cardImage: "/images/vitta/project-cover.webp",
    industry: "Saúde",
    projectType: "Clínica de pele e estética",
    seoTitle: "VITTA | Clínica de estética e pele | MAGUI.studio",
    seoDescription:
      "Landing page da VITTA para clínica de estética, com foco em saúde da pele, protocolos personalizados e posicionamento de autoridade.",
    goal: "Comunicar confiança, cuidado e protocolos personalizados para consultas de alto valor.",
    tags: ["Clínica", "Tratamentos", "Autoridade"],
    visible: true,
    component: Landing03CosmeticoEssencial,
  },
  {
    index: "03",
    slug: "pulse",
    aliases: ["landing-05-pulse"],
    title: "Pulse",
    description:
      "Marca premium de roupas fitness para homens e mulheres com tecnologia, performance e estilo.",
    category: "Landing Pages",
    cardImage: "/images/pulse/project-cover.webp",
    industry: "Serviços",
    projectType: "Marca esportiva premium",
    seoTitle: "Pulse | Moda fitness premium | MAGUI.studio",
    seoDescription:
      "Landing page da Pulse para marca fitness premium, unindo tecnologia, performance, estilo e visual editorial voltado à conversão.",
    goal: "Apresentar coleções, tecnologia têxtil e compra assistida com visual editorial.",
    tags: ["Lookbook", "E-commerce", "Performance"],
    visible: false,
    component: Landing05Pulse,
  },
  {
    index: "04",
    slug: "kroma",
    aliases: ["landing-11-energia-solar-industrial"],
    title: "Kroma",
    description:
      "Painéis solares, inversores, baterias e projetos completos para uso residencial, comercial e industrial.",
    category: "Landing Pages",
    cardImage: "/images/kroma/project-cover.webp",
    industry: "Serviços",
    projectType: "Soluções solares",
    seoTitle: "Kroma | Energia solar sob medida | MAGUI.studio",
    seoDescription:
      "Landing page da Kroma para energia solar, com painéis, inversores, baterias e projetos completos para uso residencial, comercial e industrial.",
    goal: "Explicar projetos completos de energia solar para residências, empresas e indústrias.",
    tags: ["Energia solar", "B2B", "Sustentabilidade"],
    visible: true,
    component: Landing11EnergiaSolarIndustrial,
  },
  {
    index: "05",
    slug: "la-creme",
    aliases: ["landing-16-confeitaria-la-creme"],
    title: "La Crème",
    description:
      "Confeitaria artesanal com vitrine sazonal, encomendas e doces autorais.",
    category: "Landing Pages",
    cardImage: "/images/lacreme/project-cover.webp",
    industry: "Gastronomia",
    projectType: "Confeitaria artesanal",
    seoTitle: "La Crème | Confeitaria artesanal | MAGUI.studio",
    seoDescription:
      "Landing page da La Crème para confeitaria artesanal, valorizando vitrine sazonal, encomendas e doces autorais com apelo sensorial.",
    goal: "Valorizar vitrine, encomendas e doces autorais com apelo sensorial.",
    tags: ["Confeitaria", "Encomendas", "Produtos autorais"],
    visible: true,
    component: Landing16ConfeitariaLaCreme,
  },
  {
    index: "06",
    slug: "shinobi",
    aliases: ["landing-21-shinobi"],
    title: "SHINOBI",
    description:
      "Energético dark com hero interativa, sabores coloridos e narrativa completa de marca.",
    category: "Landing Pages",
    cardImage: "/images/shinobi/project-cover.webp",
    industry: "Gastronomia",
    projectType: "Energético",
    seoTitle: "SHINOBI | Energético dark e marca autoral | MAGUI.studio",
    seoDescription:
      "Landing page da SHINOBI para energético dark, com hero interativa, sabores marcantes e construção completa de universo de marca.",
    goal: "Construir universo de marca, sabores e compra direta para um público jovem.",
    tags: ["Lançamento", "Produto", "Marca conceitual"],
    visible: true,
    component: Landing21Shinobi,
  },
  {
    index: "07",
    slug: "bites",
    aliases: ["landing-10-viagem-privada", "vector-advisory"],
    title: "BITES",
    description:
      "Comfort food premium com salgados clássicos, visual apetitoso e conveniência delivery-first.",
    category: "Landing Pages",
    cardImage: "/images/bites/project-cover.webp",
    industry: "Gastronomia",
    projectType: "Salgados premium",
    seoTitle: "BITES | Comfort food premium delivery-first | MAGUI.studio",
    seoDescription:
      "Landing page da BITES para salgados premium, com comfort food, visual apetitoso e proposta moderna focada em delivery e marca.",
    goal: "Transformar clássicos fritos em uma experiência moderna, crocante e desejável.",
    tags: ["Comfort food", "Delivery", "Marca premium"],
    visible: true,
    component: BitesLanding,
  },
  {
    index: "08",
    slug: "sayeg-beauty-studio",
    aliases: ["landing-01-flagship-phone"],
    title: "Beatriz Sayeg",
    description:
      "Visagismo avançado e micropigmentação personalizada com posicionamento de luxo.",
    category: "Landing Pages",
    cardImage: "/images/sayeg/project-cover.webp",
    industry: "Saúde",
    projectType: "Especialista em visagismo",
    seoTitle: "Beatriz Sayeg | Visagismo e micropigmentação | MAGUI.studio",
    seoDescription:
      "Landing page de Beatriz Sayeg para visagismo avançado e micropigmentação personalizada, com posicionamento de luxo e foco em agendamentos.",
    goal: "Apresentar autoridade, especialidades e atendimento personalizado para gerar agendamentos.",
    tags: ["Visagismo", "Micropigmentação", "Marca pessoal"],
    visible: true,
    component: SayegLanding,
  },
  {
    index: "09",
    slug: "powervet",
    title: "POWERVET",
    description:
      "Uma experiência digital que traduz o cuidado especializado com animais silvestres e exóticos. A identidade visual da POWERVET aproxima os tutores da equipe, apresenta a estrutura clínica e facilita o contato para agendamentos.",
    category: "Landing Pages",
    cardImage: "/images/powervet/project-cover.webp",
    industry: "Saúde",
    projectType: "Clínica veterinária especializada",
    seoTitle: "POWERVET | Clínica veterinária de exóticos | MAGUI.studio",
    seoDescription:
      "Landing page da POWERVET para clínica veterinária premium, especializada em animais silvestres e exóticos, com foco em autoridade e acolhimento.",
    goal: "Transmitir autoridade médica, acolhimento e estrutura para gerar agendamentos.",
    tags: ["Veterinária", "Animais exóticos", "Agendamento"],
    visible: true,
    component: PowervetLanding,
  },
  {
    index: "10",
    slug: "flow",
    title: "FLOW",
    description:
      "Aquarismo marinho premium com equipamentos, corais, peixes ornamentais e orientação técnica.",
    category: "Landing Pages",
    cardImage: "/images/flow/project-cover.webp",
    industry: "Serviços",
    projectType: "Loja de aquarismo marinho",
    seoTitle: "FLOW | Aquarismo marinho premium | MAGUI.studio",
    seoDescription:
      "Landing page da FLOW para aquarismo marinho premium, com corais, peixes ornamentais, equipamentos e consultoria especializada.",
    goal: "Apresentar tecnologia, vida marinha e consultoria para montagem e evolução de reefs.",
    tags: ["Aquarismo marinho", "Reef", "Corais"],
    visible: true,
    component: FlowLanding,
  },
  {
    index: "11",
    slug: "arco-odontologia",
    aliases: ["aura-estetica", "landing-07-banco-privado"],
    title: "ARCO",
    description:
      "Tecnologia e acolhimento se encontram em uma experiência digital pensada para a ARCO. A página apresenta os tratamentos com clareza, valoriza a equipe e o espaço da clínica e aproxima o paciente do primeiro agendamento.",
    category: "Landing Pages",
    cardImage: "/images/arco/project-cover.webp",
    industry: "Saúde",
    projectType: "Clínica odontológica",
    seoTitle: "ARCO | Clínica odontológica moderna | MAGUI.studio",
    seoDescription:
      "Landing page da ARCO para clínica odontológica, com diagnóstico digital, cuidado humano e tratamentos personalizados para gerar agendamentos.",
    goal: "Comunicar cuidado humano, tecnologia e tratamentos odontológicos para gerar agendamentos.",
    tags: ["Odontologia", "Sorriso", "Agendamento"],
    visible: true,
    component: ArcoLanding,
  },
  {
    index: "12",
    slug: "dragon-tattoo",
    aliases: ["atlas-living", "landing-08-residencia-autoral"],
    title: "Dragon Tattoo",
    description:
      "Estudio premium especializado em tatuagens orientais e japonesas autorais.",
    category: "Landing Pages",
    cardImage: "/images/dragon-tattoo/project-cover.webp",
    industry: "Serviços",
    projectType: "Estudio de tatuagem oriental",
    seoTitle: "Dragon Tattoo | Tatuagem oriental autoral | MAGUI.studio",
    seoDescription:
      "Landing page da Dragon Tattoo para estúdio premium de tatuagem oriental e japonesa autoral, com foco em exclusividade e consultas qualificadas.",
    goal: "Comunicar exclusividade, tradicao oriental e excelencia tecnica para gerar consultas qualificadas.",
    tags: ["Tatuagem oriental", "Arte japonesa", "Projetos autorais"],
    visible: true,
    component: DragonTattooLanding,
  },
  {
    index: "13",
    slug: "haven",
    title: "HAVEN",
    description:
      "Espaço especializado em cortes de cabelo e cuidados pessoais para pessoas autistas e neurodivergentes.",
    category: "Landing Pages",
    cardImage: "/images/haven/project-cover.webp",
    industry: "Serviços",
    projectType: "Espaço inclusivo de beleza",
    seoTitle: "HAVEN | Espaço inclusivo de beleza | MAGUI.studio",
    seoDescription:
      "Landing page da HAVEN para cortes de cabelo e cuidados pessoais com acolhimento, previsibilidade e atendimento humanizado para neurodivergentes.",
    goal: "Comunicar acolhimento, previsibilidade e atendimento humanizado para gerar confianca e agendamentos.",
    tags: ["Inclusao", "Autismo", "Atendimento humanizado"],
    visible: true,
    component: HavenLanding,
  },
  {
    index: "14",
    slug: "step",
    aliases: ["prisma-fellows", "landing-12-educacao-executiva"],
    title: "STEP",
    description:
      "Estúdio técnico de sneaker care para manutenção, higienização, restauração e conservação de sneakers premium.",
    category: "Landing Pages",
    cardImage: "/images/step/project-cover.webp",
    industry: "Serviços",
    projectType: "Sneaker care premium",
    seoTitle: "MAGUI.studio | Sneaker care studio | STEP",
    seoDescription:
      "Landing page da STEP para um estúdio técnico de sneaker care, com foco em preservação, processo, restauração visual e posicionamento premium.",
    goal: "Comunicar precisão técnica, conservação e resultado premium para sneakers de valor.",
    tags: ["Sneaker care", "Restauração", "Premium"],
    visible: true,
    component: StepLanding,
  },
  {
    index: "15",
    slug: "nivela-cold",
    aliases: ["landing-13-logistica-fria"],
    title: "Nivela Cold",
    description:
      "Logística fria com rastreabilidade, SLA e operação controlada.",
    category: "Landing Pages",
    industry: "Logística",
    projectType: "Logística fria",
    goal: "Comunicar controle operacional, rastreabilidade e confiança para cargas sensíveis.",
    tags: ["SLA", "Rastreabilidade", "Operação"],
    visible: false,
    component: Landing13LogisticaFria,
  },
  {
    index: "15",
    slug: "flora",
    aliases: ["nivela-cold", "landing-13-logistica-fria"],
    title: "Flora",
    description:
      "Garden center premium com plantas ornamentais, espécies tropicais, vasos e decoração natural.",
    category: "Landing Pages",
    cardImage: "/images/flora/project-cover.webp",
    industry: "Serviços",
    projectType: "Garden center premium",
    seoTitle:
      "MAGUI.studio | Flora | Garden center premium com plantas ornamentais, vasos e decoração natural",
    seoDescription:
      "Landing page da Flora para um garden center premium, com foco em plantas ornamentais, espécies tropicais, vasos, arquitetura verde e bem-estar.",
    goal: "Inspirar ambientes vivos e sofisticados através de plantas, curadoria e experiências de cultivo.",
    tags: ["Plantas ornamentais", "Garden center", "Decoração natural"],
    visible: true,
    component: FloraLanding,
  },
  {
    index: "16",
    slug: "cazetv",
    title: "CazéTV",
    description: "Canal de transmissão esportiva e entretenimento digital.",
    category: "Landing Pages",
    cardImage: "/images/cazetv/project-cover.webp",
    industry: "Mídia & Entretenimento",
    projectType: "Canal de streaming",
    seoTitle: "CazéTV | Transmissões esportivas e entretenimento digital | MAGUI.studio",
    seoDescription: "Landing page da CazéTV com cronograma da Copa do Mundo 2026, transmissões esportivas ao vivo e entretenimento digital para engajar fãs.",
    goal: "Engajar fãs com transmissões esportivas ao vivo e entretenimento.",
    tags: ["Streaming", "Esportes", "Entretenimento"],
    visible: false,
    component: CazeTVLanding,
  },
  {
    index: "17",
    slug: "cifrasec",
    aliases: ["landing-15-ciberseguranca"],
    title: "CifraSec",
    description:
      "Cibersegurança corporativa com governança, resposta e monitoramento.",
    category: "Landing Pages",
    industry: "Tecnologia",
    projectType: "Cibersegurança",
    goal: "Traduzir proteção, governança e resposta para times executivos.",
    tags: ["Segurança", "Governança", "Monitoramento"],
    visible: false,
    component: Landing15Ciberseguranca,
  },
  {
    index: "18",
    slug: "reforma-atelier",
    aliases: ["landing-17-moda-circular"],
    title: "Reforma Atelier",
    description: "Moda circular premium para curadoria, reparo e redesign.",
    category: "Landing Pages",
    industry: "Moda",
    projectType: "Moda circular",
    goal: "Elevar reparo, redesign e curadoria como serviço de moda premium.",
    tags: ["Circularidade", "Atelier", "Sustentabilidade"],
    visible: false,
    component: Landing17ModaCircular,
  },
  {
    index: "19",
    slug: "cume-vinhos",
    aliases: ["landing-18-vinho-altitude"],
    title: "Cume Vinhos",
    description:
      "Vinícola boutique de altitude com portfólio, visitas e clube.",
    category: "Landing Pages",
    industry: "Bebidas",
    projectType: "Vinícola boutique",
    goal: "Apresentar origem, portfólio e clube de vinhos com narrativa sensorial.",
    tags: ["Vinhos", "Clube", "Experiência"],
    visible: false,
    component: Landing18VinhoAltitude,
  },
  {
    index: "20",
    slug: "novera-labs",
    aliases: ["landing-19-laboratorio-farmaceutico"],
    title: "Novera Labs",
    description: "Laboratório farmacêutico com P&D, qualidade e transferência.",
    category: "Landing Pages",
    industry: "Saúde",
    projectType: "Laboratório farmacêutico",
    goal: "Comunicar pesquisa, qualidade e transferência tecnológica com rigor institucional.",
    tags: ["P&D", "Qualidade", "Indústria"],
    visible: false,
    component: Landing19LaboratorioFarmaceutico,
  },
  {
    index: "21",
    slug: "doca-norte",
    aliases: ["landing-20-infraestrutura-portuaria"],
    title: "Doca Norte",
    description:
      "Infraestrutura portuária com torre de controle e previsibilidade.",
    category: "Landing Pages",
    industry: "Infraestrutura",
    projectType: "Operação portuária",
    goal: "Mostrar previsibilidade, controle e capacidade operacional para grandes cargas.",
    tags: ["Operação", "Portos", "Controle"],
    visible: false,
    component: Landing20InfraestruturaPortuaria,
  },
];

export const visibleSections = sections.filter((section) => section.visible);

export const sectionMap = Object.fromEntries(
  sections.flatMap((section) => [
    [section.slug, section],
    ...(section.aliases ?? []).map((alias) => [alias, section]),
  ]),
) as Record<string, SectionEntry>;

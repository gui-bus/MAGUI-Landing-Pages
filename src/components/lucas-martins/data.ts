export const lucasWhatsappNumber = "5500000000000";
export const lucasWhatsappMessage = "Oi, Lucas! Estou procurando meu primeiro imóvel e quero entender por onde começar.";
export const lucasWhatsappHref = (message = lucasWhatsappMessage) => `https://wa.me/${lucasWhatsappNumber}?text=${encodeURIComponent(message)}`;

export const lucasNav = [
  { href: "#seu-plano", label: "Por onde começar" },
  { href: "#imoveis", label: "Encontre seu apê" },
  { href: "#minha-casa-minha-vida", label: "Minha Casa, Minha Vida" },
  { href: "#sobre", label: "Oi, sou o Lucas" },
];

export const housingSource = "https://www.gov.br/cidades/pt-br/acesso-a-informacao/acoes-e-programas/habitacao/programa-minha-casa-minha-vida/mcmv-fgts";

export const lucasProperties = [
  { id: "LM-101", name: "Apê Raízes", place: "Pinheirinho · Curitiba", status: "Pronto para conhecer", image: "/images/lucas-martins/apartamento.webp", alt: "Sala e cozinha integradas de um apartamento compacto, iluminado e acolhedor", area: 52, bedrooms: 2, price: 265000, features: ["Sala e cozinha integradas", "Varanda para aproveitar a luz do dia", "Dois quartos para os seus planos", "Visita com acompanhamento do Lucas"], description: "Um espaço prático para começar a sua história. A sala integrada deixa o dia a dia mais leve, e o segundo quarto pode acompanhar o que vier pela frente: um escritório, uma família, novos planos." },
  { id: "LM-102", name: "Viva Afonso", place: "Afonso Pena · São José dos Pinhais", status: "Planeje sua mudança", image: "/images/lucas-martins/bairro-editorial.webp", alt: "Edifícios residenciais de baixa altura com fachada mineral, madeira e jardim", area: 47, bedrooms: 2, price: 239000, features: ["Dois quartos bem distribuídos", "Áreas comuns com jardim", "Condomínio de escala acolhedora", "Condições e disponibilidade em atendimento"], description: "Um condomínio de tamanho acolhedor, com espaços para viver a rotina e planejar o futuro. Vamos conhecer a localização, a planta e todos os custos envolvidos antes de dar o próximo passo." },
] as const;

export const formatPrice = (value: number) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(value);

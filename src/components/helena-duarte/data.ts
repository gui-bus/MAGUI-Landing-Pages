export const helenaWhatsappNumber = "5500000000000";
export const helenaWhatsappMessage = "Olá, Helena! Gostaria de conversar sobre um imóvel que combine com o meu momento de vida.";
export const helenaWhatsappHref = (message = helenaWhatsappMessage) => `https://wa.me/${helenaWhatsappNumber}?text=${encodeURIComponent(message)}`;
export const helenaNav = [
    { href: "#imoveis", label: "Imóveis" },
    { href: "#sobre", label: "Sobre Helena" },
    { href: "#regioes", label: "Onde viver" },
    { href: "#processo", label: "Como funciona" },
];
export const properties = [
    { id: "HD-101", name: "Horizonte Botânico", neighborhood: "Jardim Botânico", type: "Apartamento", status: "Pronto para morar", image: "/images/helena-duarte/apartamento.webp", alt: "Sala com mobiliário contemporâneo, madeira e varanda aberta para as árvores", area: 148, bedrooms: 3, parking: 2, price: 1890000, description: "Luz natural que atravessa a sala, varanda generosa e uma planta que aproxima os encontros sem abrir mão da privacidade. Um apartamento para desacelerar, bem perto da vida da cidade.", features: ["Suíte com espaço para closet", "Varanda integrada ao estar", "Lavabo e área de serviço independente", "Duas vagas de garagem"], note: "Agende uma visita para conhecer os ambientes e receber a ficha completa do imóvel." },
    { id: "HD-102", name: "Casa do Jardim", neighborhood: "Santa Felicidade", type: "Casa", status: "Pronto para morar", image: "/images/helena-duarte/casa.webp", alt: "Casa contemporânea com concreto, madeira, jardim tropical e espelho-d’água", area: 286, bedrooms: 4, parking: 3, price: 3250000, description: "Uma casa em que o jardim participa da rotina. Ambientes amplos, materiais naturais e integração entre estar e área externa desenham um refúgio para viver com mais espaço.", features: ["Quatro dormitórios, sendo duas suítes", "Jardim com área de convivência", "Ambiente para escritório", "Três vagas de garagem"], note: "Visitas com horário agendado. Consulte a disponibilidade e as condições de negociação." },
    { id: "HD-103", name: "Alameda Residence", neighborhood: "Cabral", type: "Apartamento", status: "Na planta", image: "/images/helena-duarte/edificio.webp", alt: "Edifício residencial com varandas verdes, fachada clara e jardim arborizado", area: 112, bedrooms: 3, parking: 2, price: 1420000, description: "Arquitetura de escala acolhedora, varandas com verde e espaços pensados para acompanhar novas fases. Uma possibilidade para quem prefere planejar a mudança com tempo.", features: ["Três dormitórios, sendo uma suíte", "Varanda com espaço para plantas", "Áreas de convivência", "Duas vagas de garagem"], note: "Consulte as unidades disponíveis, as condições de pagamento e o cronograma do empreendimento." },
] as const;
export const money = (value: number) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(value);

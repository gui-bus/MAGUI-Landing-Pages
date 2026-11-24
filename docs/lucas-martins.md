# Lucas Martins — seu primeiro imóvel
+## Redesign editorial — imagens atuais

Fotografia maior, galeria de bairro e detalhes, apresentação em atendimento e ícones SVG próprios. Novos assets substituem a direção visual anterior.

### public/images/lucas-martins/interior-editorial.webp

Use case: photorealistic-natural. Single high-end architectural editorial photograph for a sophisticated minimal first-home real estate advisor website in Brazil. A beautifully considered yet attainable compact 55 square meter apartment living room with a full-height window opening onto leafy urban trees, warm natural oak cabinetry, ivory linen compact sofa, a sculptural but simple walnut dining table for two, understated art, matte warm white walls, a small terra-cotta vase. Quiet contemporary Brazilian design, no opulence, no marble palace, no staged real estate cliches. Late afternoon directional sunlight with rich shadows, finely observed textures, straight architectural geometry, premium magazine photography with subtle analog grain. Camera at eye level looking diagonally through the living space to the window, vertical 2:3 composition with full room depth and breathable negative space. No people, words, logos, watermark.

### public/images/lucas-martins/lucas-em-atendimento.webp

Use case: identity-preserve. Use the attached portrait as identity reference for fictional Brazilian property advisor Lucas Martins, same face, medium brown skin, short curly hair, short beard, age about 34. Create a completely new editorial environmental photograph of the exact same man, now wearing a charcoal navy unstructured overshirt and stone-colored t-shirt, no bright blue. He is seated naturally at a pale oak table in a contemporary modest apartment, discussing a simple architectural floor plan with a couple who are only subtly visible as out-of-focus shoulders in the foreground. Lucas is listening attentively with a slight warm smile, one hand resting on the plan, authentic candid moment. Pale mineral walls, timber, soft window light, muted navy and warm copper palette, elegant professional magazine photography, realistic skin and natural proportions. Landscape 3:2 wide composition, Lucas slightly left of center, no text, no logos, no watermark, no certificates or miniature toy houses.

### public/images/lucas-martins/bairro-editorial.webp

Use case: photorealistic-natural. A single sophisticated architectural editorial landscape photograph of a quiet Brazilian residential neighborhood at golden hour. Modest contemporary low-rise apartment buildings, pale plaster facades, deep navy metal window frames, warm timber entrance, lush mature street trees, understated well-kept sidewalk and planted front garden. A couple seen small from behind walking toward their home, no identifiable close-up faces. Human scale 3-4 floors, attainable first-home housing thoughtfully designed, no luxury towers, no gigantic pools or flashy decor. Warm copper sunlight, mineral whites, deep desaturated shadow, architectural magazine photography with tactile natural materials and believable geometry. Wide 3:2 composition, no text, logos, cars blocking view, signs or watermark.

### public/images/lucas-martins/detalhes-do-lar.webp

Use case: photorealistic-natural. Refined intimate editorial lifestyle photograph about the first home. A small oak dining table beside a sunlit apartment window, two beautifully simple ceramic coffee cups, a folded linen cloth, a terracotta vase with a leafy branch, one minimalist brass key resting on the table near an architectural floor plan with no readable writing. A glimpse of comfortable pale linen sofa and urban treetops beyond the window, compact attainable contemporary Brazilian apartment. Strong warm afternoon sunlight, deep gentle shadows, tactile material detail, quiet understated emotion, natural mineral white, charcoal navy and muted copper palette. Premium interior magazine photography, landscape 3:2, full bleed, no people, no letters, no logos, no watermark.

Página em `/projetos/lucas-martins`, com identidade independente da Helena Duarte: paleta 60–30–10 (mineral #f4f3ef, azul-noite #182c35 e cobre #a77859), Manrope e DM Sans. Componentes em `src/components/lucas-martins/`, composição em `src/components/sections/lucas-martins.tsx` e cadastro no registry compartilhado.

## Funcionamento

- Plano inicial em três etapas: momento de vida, principal dúvida e região. As respostas ficam na página e montam uma mensagem; não há cálculo de crédito ou elegibilidade.
- Imóveis com filtro de região, detalhes expansíveis e mensagem específica.
- Respostas por assuntos com navegação por teclado, menu mobile em diálogo nativo e animações com respeito à preferência por movimento reduzido.
- Formulário com validação local e confirmação da mensagem antes de abrir o WhatsApp.
- Contato mantido em `data.ts`, integrado ao botão flutuante compartilhado. O número configurado é o padrão de desenvolvimento do repositório e deve ser substituído pelo contato de destino antes do atendimento.

## Minha Casa, Minha Vida

Texto orientativo verificado em 24/11/2026 na [página oficial do Ministério das Cidades](https://www.gov.br/cidades/pt-br/acesso-a-informacao/acoes-e-programas/habitacao/programa-minha-casa-minha-vida/mcmv-fgts). A página evita fixar faixas, taxas e valores de subsídio; benefícios, uso do FGTS e contratação são tratados como condicionados ao enquadramento e à análise. Não utiliza marcas governamentais ou afirma vínculo oficial.

## Assets e marca

As quatro fotografias foram geradas com a ferramenta nativa `image_gen` e convertidas para WebP em `public/images/lucas-martins/`: `primeiro-lar.webp`, `lucas.webp`, `apartamento.webp`, `condominio.webp`.

Marca vetorial própria com monograma arquitetônico LM, em versões `logo-night.svg` e `logo-mineral.svg`, também exportadas para WebP. `scripts/create-lucas-brand.cjs` gera as versões da marca e a capa `project-cover.webp`, com fotografia e marca centralizada.

Lucas Martins, os imóveis e suas identidades visuais são criações para este projeto de portfólio. Não foram criados depoimentos, premiações, registros profissionais ou estatísticas de terceiros.

## Prompts finais das fotografias

### Mudança e primeiro lar

Use case: photorealistic-natural. Wide editorial lifestyle photograph for a Brazilian first-home real estate advisor website. A young Brazilian couple around 28 years old joyfully unpacking a cardboard box in their bright, modest but well-designed first apartment. Woman medium brown skin with natural curly dark hair wearing warm ochre t-shirt, man light brown skin short dark hair wearing pale blue casual shirt. They smile naturally at each other, not toward camera. Cozy 50 square meter apartment, simple light wood dining table, small sand-color fabric sofa, terracotta cushions, a plant, large window, sunshine. Ordinary attainable middle class home, warm lived-in feeling, no luxury surfaces. Authentic natural photography, believable anatomy, warm late afternoon light, composition subjects center-right with breathing room. Landscape 3:2, single full bleed photo, no text, logos, watermark, keys held up, certificates or signs.

### Retrato do corretor

Use case: photorealistic-natural. Vertical editorial portrait of a fictional Brazilian first-home real estate agent named Rafael Nunes. Approachable Brazilian man age 34, medium brown skin, short dark curly hair, well-groomed short beard, friendly genuine smile, expressive kind eyes. Wearing an open cobalt blue cotton overshirt with an off-white t-shirt and dark jeans, no suit or tie. Standing casually beside a light wooden desk in an airy small real estate office, warm cream walls and soft out of focus blue and terracotta accents, one hand relaxed on the desk. Natural window light, realistic skin texture, authentic everyday professional, waist-up framing with space around head and hair, no text, logos, signs, watermark. Vertical 2:3.

### Apartamento compacto

Use case: photorealistic-natural. Single landscape professional real estate photograph of a charming compact 52 square meter Brazilian first apartment. Practical open plan living room and kitchen with small balcony, simple light wood lower cabinets, white tile backsplash, blue decorative details, pale gray small sofa, warm terracotta cushion, a round dining table for two, a plant by the window. Attainable tasteful middle class housing, bright natural morning light, realistic proportions and compact rooms, welcoming and fresh without luxury stone or expensive furniture. Clear architectural photography with straight verticals, wide view from living room toward balcony and kitchen. No people, text, logos, watermark. Landscape 3:2.

### Condomínio residencial

Use case: photorealistic-natural. Single landscape realistic architectural photograph of an attainable contemporary Brazilian residential condominium for first home buyers, four floors, white and muted blue facade with terracotta entrance details, modest balconies, well-maintained communal garden and pedestrian entry, young trees, clear sunny morning. Human scale compact apartment building, ordinary southern Brazilian neighborhood, clean sidewalks, credible affordable housing with good design, no luxury towers, no giant pool, no cars in foreground. Professional real estate photography, natural color, straight geometry. No people, letters, logos, advertising banners, watermarks, text. Landscape 3:2.


## Protagonismo do corretor e interações próprias

Lucas na abertura, apresentação pessoal antes dos imóveis, fotos em atendimento e no bairro. Dúvidas em navegação por assuntos com suporte a teclado; contato em correspondência pessoal com validação e prévia da mensagem. Fotos geradas pela ferramenta nativa image_gen, com a imagem de atendimento como referência de identidade.

### public/images/lucas-martins/lucas-retrato-editorial.webp

Use case: photorealistic-natural. Reference image is identity reference ONLY: keep the same Brazilian man, short curly dark hair, brown eyes, short beard, medium tan skin, age 34, same recognizable facial features. Create a new sophisticated editorial portrait for his personal real estate advisor website: Lucas standing beside a large apartment window, relaxed confident friendly expression looking at camera, charcoal navy overshirt over mineral white t-shirt, hands naturally relaxed one in trouser pocket. Framing mid thigh up, tall vertical 2:3 photo. Warm natural sidelighting, subtle oak joinery, quiet mineral white apartment background, copper accent only, premium personal branding photography, genuine skin texture, no luxury ostentation, no text, logos, watermark. Face prominent and well illuminated. Different pose from reference.

### public/images/lucas-martins/lucas-no-bairro.webp

Use case: photorealistic-natural. Use reference solely for consistent identity of Lucas Martins: same Brazilian man age34, medium tan skin, short curly dark hair and neat beard. New candid personal branding photograph: Lucas walking toward camera along a leafy Curitiba residential street, holding a thin charcoal notebook casually in his left hand, looking to one side with an easy smile. Dark navy cotton overshirt, off-white tee, dark trousers. Modern accessible residential buildings and trees softly blurred behind him, warm afternoon light, sophisticated editorial photography, natural unposed movement, eye-level medium full-length framing, landscape 3:2, mineral white navy muted copper palette, no text or logos or watermark. Lucas is the dominant subject, large in frame, no other prominent people.



## Revisão fotográfica natural — versão atual

Cinco fotos novas do Lucas, geradas com a ferramenta nativa image_gen. A primeira é a referência de identidade para as demais. Cada imagem da página é utilizada em uma única posição; contato com monograma, menu com marca tipográfica. A capa usa condominio.webp, sem repetir uma fotografia da landing page. Os prompts anteriores acima ficam como histórico das versões substituídas.

### public/images/lucas-martins/lucas-natural-retrato.webp

Photorealistic-natural. A single unretouched documentary portrait photograph, NOT a cinematic advertising image, for a Brazilian real estate advisor's personal website. Lucas Martins, ordinary Brazilian man 36 years old, medium brown skin, short slightly unruly dark brown hair, short uneven stubble beard, brown eyes, subtly asymmetrical face, slight under-eye shadows, visible natural pores and small sun spots, normal human proportions. Relaxed closed-mouth half smile, looking into lens. Wearing a plain matte dark navy cotton shirt with sleeves rolled up, realistic fabric creases. Standing casually in an everyday bright office in Curitiba, beside a plain window and white wall; uncluttered background, no staged lamps or matching luxury decor. Authentic soft overcast daylight, neutral white balance, restrained contrast, natural skin without orange grading. Portrait 2:3, waist-up, plenty of room above head, 50mm lens f4, believable camera photograph with subtle grain, NO skin smoothing, retouching, beauty lighting, plastic skin, excessive sharpness, exaggerated bokeh, illustration, text, logos or watermark. Make him look like a real approachable professional photographed during a normal workday.

### public/images/lucas-martins/lucas-natural-atendimento.webp

Photorealistic-natural. The supplied image is identity reference ONLY. Preserve exactly the same recognizable ordinary Brazilian man Lucas Martins, age36, slightly tousled short brown hair, uneven short stubble, brown eyes, medium brown skin, same facial proportions and asymmetry. New distinct documentary photograph from a normal workday. Unretouched natural pores, under-eye shadows and slight sun spots, normal imperfect human skin, realistic hands and human proportions, matte cotton clothing with creases. Neutral overcast daylight, restrained contrast, slight camera grain, 50mm f4 feel. No cinematic orange light, no beautification, no excessive blur, no glossy plastic skin, no advertising poses, no text, logo or watermark. Landscape 3:2. Lucas seated at an ordinary wooden meeting table, explaining a floor plan to a woman seen only from behind at the left edge. Lucas wears plain navy button-up shirt sleeves rolled. Candid three-quarter profile, concentrating on the paper with a subtle engaged expression, pen in his right hand pointing at the plan, simple modest white office with a shelf of folders and window. Lucas is prominent, upper body fills center-right. No staged interior design.

### public/images/lucas-martins/lucas-natural-bairro.webp

Photorealistic-natural. The supplied image is identity reference ONLY. Preserve exactly the same recognizable ordinary Brazilian man Lucas Martins, age36, slightly tousled short brown hair, uneven short stubble, brown eyes, medium brown skin, same facial proportions and asymmetry. New distinct documentary photograph from a normal workday. Unretouched natural pores, under-eye shadows and slight sun spots, normal imperfect human skin, realistic hands and human proportions, matte cotton clothing with creases. Neutral overcast daylight, restrained contrast, slight camera grain, 50mm f4 feel. No cinematic orange light, no beautification, no excessive blur, no glossy plastic skin, no advertising poses, no text, logo or watermark. Landscape 3:2. Lucas walking on an ordinary leafy Curitiba neighborhood sidewalk, matte light gray casual button-up shirt and navy trousers, carrying a thin folder casually, looking at a residential building to the side. Eye-level candid medium-full photograph, Lucas prominent center, everyday low-rise apartment facades softly visible, cloudy day after light rain, real imperfect pavement and street details. Natural body language, not smiling for camera.

### public/images/lucas-martins/lucas-natural-escuta.webp

Photorealistic-natural. The supplied image is identity reference ONLY. Preserve exactly the same recognizable ordinary Brazilian man Lucas Martins, age36, slightly tousled short brown hair, uneven short stubble, brown eyes, medium brown skin, same facial proportions and asymmetry. New distinct documentary photograph from a normal workday. Unretouched natural pores, under-eye shadows and slight sun spots, normal imperfect human skin, realistic hands and human proportions, matte cotton clothing with creases. Neutral overcast daylight, restrained contrast, slight camera grain, 50mm f4 feel. No cinematic orange light, no beautification, no excessive blur, no glossy plastic skin, no advertising poses, no text, logo or watermark. Vertical 4:5. Lucas seated by a simple office desk listening attentively to someone just outside frame, navy plain button-up shirt, leaning slightly forward, hands loosely clasped resting on desk, calm thoughtful expression, not looking at camera. Camera close enough for head and torso. Everyday office, white wall, one small plant. Soft neutral window daylight, candid moment during a consultation.

### public/images/lucas-martins/lucas-natural-visita.webp

Photorealistic-natural. The supplied image is identity reference ONLY. Preserve exactly the same recognizable ordinary Brazilian man Lucas Martins, age36, slightly tousled short brown hair, uneven short stubble, brown eyes, medium brown skin, same facial proportions and asymmetry. New distinct documentary photograph from a normal workday. Unretouched natural pores, under-eye shadows and slight sun spots, normal imperfect human skin, realistic hands and human proportions, matte cotton clothing with creases. Neutral overcast daylight, restrained contrast, slight camera grain, 50mm f4 feel. No cinematic orange light, no beautification, no excessive blur, no glossy plastic skin, no advertising poses, no text, logo or watermark. Landscape 3:2. Lucas standing in the doorway of a compact bright unfurnished apartment during a visit, light gray casual cotton shirt, navy trousers. He glances back toward the viewer with a small genuine half-smile while one relaxed hand rests on door frame. Natural ordinary lived-work moment, not staged key handover. Plain white walls, oak toned door, diffuse daylight, upper body prominently center, no other people.


## Nova direção visual — referências Sayeg e Haven

Composição refeita com abertura fotográfica em tela cheia, cabeçalho transparente, Cormorant Garamond para títulos (normal e itálico) e DM Sans para textos. Marquee tipográfico contínuo com botão de pausa, selo circular em rotação, parallax leve na abertura, revelação de imagens e conteúdo na rolagem, hover nas fotografias e seções com composições assimétricas. A preferência por movimento reduzido desativa movimentos contínuos e transições. Fotos existentes distribuídas sem repetições. O contato mantém a mensagem pessoal e o FAQ continua como leitor por assuntos. Paleta mineral, azul-noite e cobre preservada.

### Refinamento de sobriedade

Faixa reduzida para texto pequeno em DM Sans, fundo azul-noite e ícones lineares. Removidos texto contornado, alternância de estilos, estrelas decorativas, botão de play/pause e selo giratório. Títulos e assinatura do rodapé menores; revelações suaves sem recorte animado. Marquee automático lento, suspenso ao passar o mouse, desativado com preferência por movimento reduzido.

## Composição linear e movimento mínimo

Retirados parallax, deslocamentos das entradas, zoom da abertura, hover com deslocamento e a linha inferior do header. Revelação apenas por opacidade em 0,4 s; marquee lento em 85 s. Apresentação, programa habitacional, etapas, planejamento e contato passam a seguir um eixo central com fotografias amplas. Footer refeito com convite central, fotografia panorâmica exclusiva, assinatura e navegação horizontal; créditos MAGUI e retorno ao topo preservados.

### Largura e separadores

As seções compartilham largura útil de 88% da tela, limitada a 1440 px. Questionário e formulário passam a preencher esse espaço, com alternativas em três colunas no desktop e empilhadas no celular. Fotografia e conteúdo do programa seguem o mesmo alinhamento. Marquee usa apenas bolinhas como divisores, sem ícones repetidos.

### Apresentação e percurso recompostos

Apresentação com título alinhado à esquerda, fotografia preservada e faixa horizontal de nome, descrição e contato. Removida a citação central isolada. Retrato menor posicionado de forma absoluta sobre a fotografia do ambiente, incluindo adaptação mobile. Percurso da compra refeito como lista numerada com quatro linhas legíveis e nota documental integrada à largura do conteúdo.

### Princípios e catálogo alinhado

Ícones dos princípios passam a ocupar o fundo dos artigos com baixa opacidade, sem disputar atenção com o texto. Imóveis com cards alinhados no topo, fotografias de proporção uniforme, corpo organizado e preços e ações na mesma linha. Deslocamento vertical do segundo card removido em todos os breakpoints. Catálogo empilhado abaixo de 700 px.

## Paleta profissional e energética — versão atual

Sistema 60–30–10 em branco (#ffffff), grafite (#202423) e verde (#12844a), com verde luminoso (#41d98a) para contraste em fundos escuros. Removidas as cores azul-petróleo e areia/bege do CSS. Marca e project-cover.webp regenerados com a nova paleta. Footer gráfico sem fotografia, com CTA verde, assinatura, navegação e ícone linear de chave ao fundo. As versões anteriores documentadas acima ficam como histórico.

### Paleta atualizada após orientação

A direção verde foi descartada. A versão atual usa branco (#ffffff), preto (#181818) e vermelho (#c52d32), com vermelho claro (#ff685e) para contraste nos fundos escuros. Marca e capa regeneradas nessa paleta. O footer gráfico permanece sem fotografia.

### Questionário no fechamento

O formulário de contato saiu da composição da página. O questionário de três etapas foi movido para o final, entre as dúvidas e o footer, sem duplicação. Links para #contato e #seu-plano chegam a esse mesmo bloco. As versões atuais da marca são logo-red-dark.webp e logo-red-light.webp.

### MCMV em fundo claro

Seção habitacional refeita em branco: rótulo MCMV, título alinhado à esquerda, fotografia em faixa, três tópicos organizados e faixa de próximo passo com CTA. Fonte oficial e observação sobre análise preservadas no rodapé da seção.

### Dúvidas com resposta em destaque

Título atualizado para Dúvidas sobre o primeiro imóvel. Área refeita com navegação horizontal por assunto, resposta em painel amplo e identificação discreta do Lucas. Retirados o painel lateral de categorias, o retrato grande e as citações de cada resposta. Navegação por teclado e preferência por movimento reduzido preservadas.

A composição final das dúvidas mantém os assuntos no topo e coloca a fotografia em tamanho grande à esquerda, com resposta, identificação e contato à direita. No celular, a foto vem acima do conteúdo.

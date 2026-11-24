# Helena Duarte — curadoria imobiliária

Landing page conceitual de corretora, disponível em `/projetos/helena-duarte`.

## Conteúdo e manutenção

- Componentes: `src/components/helena-duarte/`.
- Composição: `src/components/sections/helena-duarte.tsx`.
- Cadastro, capa e SEO: `src/components/sections/registry.ts`.
- Imóveis, navegação e contato: `src/components/helena-duarte/data.ts`.
- WhatsApp flutuante integrado ao mapeamento compartilhado.
- Formulário local: monta uma mensagem; não envia dados para um servidor e não armazena informações do visitante.
- Identidade: verde profundo, branco mineral, Bodoni Moda e DM Sans.
- Corretora, imóveis e valores são fictícios. Antes do uso comercial, substituir o número de exemplo, cadastrar os dados profissionais e validar as informações dos imóveis.

## Imagens

Geradas com a ferramenta nativa `image_gen`, inspecionadas e convertidas para WebP. Arquivos finais em `public/images/helena-duarte/`: `apartamento.webp`, `casa.webp`, `edificio.webp`, `helena.webp`, `helena-atendimento.webp` e `project-cover.webp` (retrato com o logo branco centralizado, no padrão de composição da ARCO).

## Marca e presença profissional

Logo próprio com monograma HD, em versões verde e branca: `logo-green.svg`, `logo-white.svg`, `logo-green.webp` e `logo-white.webp`. Monogramas separados: `monogram-green.svg` e `monogram-white.svg`. O script `scripts/create-helena-brand.cjs` mantém os SVGs editáveis, gera as versões WebP transparentes e compõe a capa de 1400 × 1120 px. Não depende de geração de imagem para a tipografia ou para a marca vetorial.

A trajetória da personagem foi desenvolvida com autorização do usuário: início em 2012, 14 anos de experiência, mais de 320 imóveis e R$ 280 milhões em negócios. Os números fazem parte do briefing criativo; não foram atribuídas premiações de entidades externas. A apresentação pública utiliza linguagem de atendimento, sem avisos de demonstração.

### Prompts finais

**Retrato exclusivo do footer**

Arquivo final: `public/images/helena-duarte/helena-footer.webp`. Gerado com a ferramenta nativa `image_gen`, usando o retrato original como referência de identidade; roupa, pose, ambiente e luz diferentes.

Use case: identity-preserve. Use the provided image as the identity reference for the fictional real estate advisor Helena Duarte. Create a completely different vertical editorial portrait of this exact same woman, same face, age and shoulder-length dark brown hair. She is outdoors on the shaded terrace of a contemporary Brazilian home, wearing a light ivory tailored pantsuit over a taupe blouse, standing in a relaxed three-quarter pose, looking at the camera with a warm genuine smile, one hand resting lightly on the stone terrace wall. Green foliage softly out of focus, restrained architecture, golden afternoon rim light, refined natural magazine photography with authentic skin texture. Waist-up composition with head and hair fully inside frame and breathing room, vertical 2:3. No logos, text, lettering, keys, certificates or watermark. Preserve identity precisely but change clothing, pose, setting and lighting from the reference.

## Revisão mobile e interações

- Tipografia fluida, quebras naturais e grades ajustadas para telas de 320 px em diante.
- Menu de tela inteira em diálogo nativo, com foco contido, Escape, transições de entrada e saída e navegação após o encerramento da animação.
- Formulário com ícones, campos personalizados, erro de nome contextual e seletores acessíveis com teclado, listas próprias e campos ocultos para montagem da mensagem.
- FAQ em acordeão, com abertura e fechamento animados e uma resposta aberta por vez.
- Revelações pontuais ao rolar, ícones de bússola, chave e folhagem ao fundo; movimentos reduzidos quando solicitado nas preferências do sistema.

**Helena em atendimento — fotografia adicional com identidade preservada**

Use case: identity-preserve. Reference image: the attached portrait is the identity reference for the fictional Brazilian real estate advisor Helena Duarte. Create a NEW photorealistic landscape editorial photograph of this EXACT same woman with matching face, age, shoulder length brown hair, charcoal tailored blazer over ivory top, minimal gold jewelry. She is in a sophisticated contemporary Brazilian apartment during a property visit, standing beside a large walnut table with an open architectural floor plan, gently pointing to the plan and smiling naturally, looking slightly toward a client outside the frame. Only Helena visible, no other people. Waist up to mid-thigh environmental composition with her on the left half, huge window overlooking trees on the right, warm natural daylight, limestone and walnut, refined authentic magazine photography, subtle film grain. Wide 3:2 landscape. No text, lettering, logos, watermarks, awards or signs. Preserve her visual identity precisely.

**Apartamento / hero / capa**

Use case: photorealistic-natural. Create a premium architectural editorial photograph for a Brazilian real estate curator website. Wide landscape 3:2 image of a breathtaking contemporary Brazilian apartment living room with floor to ceiling sliding glass opening onto generous terrace, lush leafy treetops, warm late afternoon sunlight, sculptural caramel leather armchair, off-white linen sofa, travertine coffee table, rich walnut cabinetry, natural stone, understated art, sophisticated lived-in atmosphere. Shot from inside towards the terrace, generous architectural perspective, believable geometry, refined magazine photography, tactile grain, no people, no text, no logos, no watermark. Full bleed single photograph.

**Retrato**

Use case: photorealistic-natural. Single vertical editorial portrait photograph for a fictional Brazilian real estate advisor named Helena Duarte, woman approximately 38 years old, shoulder length dark brown hair, warm approachable confident smile, wearing relaxed tailored charcoal blazer over ivory top, minimal gold jewelry. Standing naturally leaning against a walnut table in a sunlit contemporary architecture studio with blurred green garden behind. Hands relaxed naturally, waist-up framing, authentic skin texture, sophisticated but approachable, natural window light, subtle film grain, premium magazine photography. No text, no logo, no watermark. Portrait 2:3.

**Casa**

Use case: photorealistic-natural. A single landscape architectural photograph of an original contemporary Brazilian two story house, board formed concrete, warm wood brise soleil, wide glass, lush tropical landscaping, small reflective pool with stepping stones and garden in front. Quiet upscale residential setting inspired by southern Brazil. Clear soft morning light, editorial architecture magazine photography, realistic materials, beautiful restrained composition, full bleed, no people, no cars, no writing, no logos, no watermark. Landscape 3:2.

**Edifício**

Use case: photorealistic-natural. Single landscape editorial architecture photograph of an elegant Brazilian contemporary midrise residential building, eight floors, deeply recessed balconies with plants, pale mineral facade, rounded corners, bronze window frames, generous street level garden with mature trees, viewed from sidewalk at slight upward angle with beautiful blue sky. Human scale architecture in a leafy southern Brazilian neighborhood, subtle warm late afternoon sun, photoreal premium real estate photography, full bleed, no text, no logos, no watermark. Landscape 3:2.

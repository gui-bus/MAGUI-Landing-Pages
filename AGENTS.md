<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Landing page retheme workflow

When the user asks to replace, retheme, or transform an existing landing page into a new project or brand theme, treat the request as a complete landing page adaptation unless the user explicitly narrows the scope.

- Create a dedicated component folder at `src/components/<project>/`.
- Split the page into project-specific components such as `header.tsx`, `hero-section.tsx`, explanatory sections, and `footer.tsx`. Add optional sections only when they fit the content and positioning of that project. A closing section is not mandatory.
- Add a project-specific `fonts.ts` and use its display and text fonts throughout the new components.
- Use the images supplied by the user from the indicated `public/images/<project>/` folder. Review the available assets and incorporate them intentionally into the page.
- Build an original visual identity for the project. Do not merely swap text, colors, and images inside the previous page structure. Adapt composition, section rhythm, hierarchy, transitions, responsive behavior, and subtle interactions to the new brand.
- Create a unique header for the project. Include a usable mobile hamburger menu when appropriate.
- Create a unique footer for the project. Include the `Oferecido por MAGUI.studio` attribution and a `Voltar ao topo` link following the established portfolio pattern.
- Keep calls to action coherent with the project goal and connect them to the appropriate destination, such as WhatsApp or an internal section anchor.
- Preserve existing repository conventions and keep as many components server-rendered as possible. Introduce `"use client"` only where interaction or animation requires it.
- Validate responsive layout, links, image loading, and visual transitions after implementation.
- Adjust slug on `src\components\sections\registry.ts` to match new project name

## Portfolio project standards

- Every project must have its own logo assets, with versions appropriate for light and dark backgrounds.
- Every project must have a `public/images/<project>/project-cover.webp` combining a project photograph with the project logo centered over it, following the ARCO cover pattern.

- Use `Link` from `next/link` for every navigation element and CTA link, including internal anchors, external URLs, and WhatsApp links. Do not render raw `<a>` tags in project pages or components.
- Use `Image` from `next/image` for image assets. Do not render raw `<img>` tags. Provide useful `alt`, `sizes`, and stable dimensions or `fill` with a constrained parent.
- Every project page must have SEO metadata through `generateMetadata` or the shared project metadata flow. Titles should follow `MAGUI.studio | <Project Name>`, and descriptions should use the project-specific registry data.
- Every project page must render the shared `WhatsappButton` through the established wrapper, using the project-specific phone number and message. Do not reuse a generic WhatsApp message across all projects.
- Keep project-specific WhatsApp data close to the project when available, and update the shared project WhatsApp mapping whenever a new project slug is added.
- Maintain Open Graph metadata and `metadataBase` whenever SEO metadata is changed.
- Preserve the footer pattern with `Oferecido por MAGUI.studio`, `Voltar ao topo`, and the shared scroll-to-top behavior.
- Sempre escrever todos os textos em português do Brasil com gramática totalmente correta, prestando atenção constante à acentuação, à pontuação, à concordância e à clareza em todos os projetos atuais e futuros.

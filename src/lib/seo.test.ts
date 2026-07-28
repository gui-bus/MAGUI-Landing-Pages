import { describe, it, expect, vi } from 'vitest';
import {
  sanitizeText,
  absoluteUrl,
  buildDefaultMetadata,
  buildProjectMetadata,
  createOrganizationJsonLd,
  createPortfolioJsonLd,
  createProjectJsonLd,
  createBreadcrumbJsonLd,
} from './seo';
import type { SectionEntry } from '@/components/sections/registry';

// Mock do headers do next/headers
vi.mock('next/headers', () => ({
  headers: vi.fn().mockImplementation(async () => {
    const headersMap = new Map();
    headersMap.set('host', 'localhost:3000');
    return headersMap;
  }),
}));

const mockEntry: SectionEntry = {
  index: "01",
  slug: "nacho-libre",
  aliases: ["landing-02-nacho-libre"],
  title: "Nacho Libre",
  description: "Restaurante mexicano moderno com tacos e burritos.",
  category: "Landing Pages",
  cardImage: "/images/nacho-libre/project-cover.webp",
  industry: "Gastronomia",
  projectType: "Restaurante mexicano",
  seoTitle: "Nacho Libre | Restaurante mexicano moderno",
  seoDescription: "Landing page do Nacho Libre com cardápio dinâmico.",
  goal: "Transformar cardápio em experiência vibrante.",
  tags: ["Cardápio", "Pedidos"],
  visible: true,
  component: () => null,
};

describe('SEO & Metadata Utils', () => {
  describe('sanitizeText', () => {
    it('deve corrigir caracteres corrompidos (mojibake) nos textos', () => {
      expect(sanitizeText("ÃƒÂ¡")).toBe("Ã¡");
      expect(sanitizeText("ÃƒÂ©")).toBe("Ã©");
      expect(sanitizeText("ÃƒÂ­")).toBe("Ã­");
      expect(sanitizeText("ÃƒÂ³")).toBe("Ã³");
      expect(sanitizeText("ÃƒÂº")).toBe("Ãº");
      expect(sanitizeText("ÃƒÂ§")).toBe("Ã§");
      expect(sanitizeText("Texto normal sem erros")).toBe("Texto normal sem erros");
    });
  });

  describe('absoluteUrl', () => {
    it('deve gerar URLs absolutas corretas', () => {
      expect(absoluteUrl('/projetos/nacho-libre', 'https://portfolio.magui.studio')).toBe(
        'https://portfolio.magui.studio/projetos/nacho-libre'
      );
    });
  });

  describe('buildDefaultMetadata', () => {
    it('deve gerar os metadados padrões com as propriedades essenciais', () => {
      const metadata = buildDefaultMetadata('https://portfolio.magui.studio');
      expect(metadata.title).toContain('MAGUI.studio');
      expect(metadata.openGraph?.type).toBe('website');
      expect(metadata.openGraph?.locale).toBe('pt_BR');
      expect(metadata.openGraph?.images).toBeDefined();
    });
  });

  describe('buildProjectMetadata', () => {
    it('deve gerar metadados dinâmicos específicos para cada projeto', () => {
      const metadata = buildProjectMetadata(mockEntry, 'https://portfolio.magui.studio');
      expect(metadata.title).toBe('Nacho Libre | Restaurante mexicano moderno');
      expect(metadata.description).toBe(mockEntry.seoDescription);
      expect(metadata.alternates?.canonical).toBe(
        'https://portfolio.magui.studio/projetos/nacho-libre'
      );
      expect(metadata.openGraph?.images?.[0]).toEqual({
        url: mockEntry.cardImage,
        alt: 'Nacho Libre | Projeto do Portfólio MAGUI.studio',
      });
    });
  });

  describe('Dados Estruturados JSON-LD', () => {
    it('deve gerar o JSON-LD correto de Organization', () => {
      const jsonLd = createOrganizationJsonLd('https://portfolio.magui.studio');
      expect(jsonLd['@type']).toBe('Organization');
      expect(jsonLd.name).toContain('MAGUI.studio');
      expect(jsonLd.url).toBe('https://portfolio.magui.studio');
    });

    it('deve gerar o JSON-LD correto de CollectionPage', () => {
      const jsonLd = createPortfolioJsonLd([mockEntry], 'https://portfolio.magui.studio');
      expect(jsonLd['@type']).toBe('CollectionPage');
      expect(jsonLd.mainEntity.itemListElement[0].name).toBe('Nacho Libre');
    });

    it('deve gerar o JSON-LD correto de CreativeWork', () => {
      const jsonLd = createProjectJsonLd(mockEntry, 'https://portfolio.magui.studio');
      expect(jsonLd['@type']).toBe('CreativeWork');
      expect(jsonLd.name).toBe('Nacho Libre');
      expect(jsonLd.inLanguage).toBe('pt-BR');
    });

    it('deve gerar o JSON-LD correto de BreadcrumbList', () => {
      const jsonLd = createBreadcrumbJsonLd(mockEntry, 'https://portfolio.magui.studio');
      expect(jsonLd['@type']).toBe('BreadcrumbList');
      expect(jsonLd.itemListElement).toHaveLength(2);
      expect(jsonLd.itemListElement[0].name).toContain('Portfólio');
      expect(jsonLd.itemListElement[1].name).toBe('Nacho Libre');
    });
  });
});

import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProjectWhatsappButton } from './project-whatsapp-button';
import { buildWhatsappHref, WhatsappButton } from './whatsapp-button';

// Mock do next/link para renderizar uma tag <a> comum
vi.mock('next/link', () => ({
  default: ({ children, href, ...props }: any) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

// Mock parcial do ícone para evitar quebrar importações de outros ícones na árvore de imports (ex: SolarPanel no kroma/data)
vi.mock('@phosphor-icons/react/ssr', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    WhatsappLogoIcon: () => <span data-testid="whatsapp-icon" />,
  };
});

describe('WhatsApp Button Components', () => {
  describe('buildWhatsappHref', () => {
    it('deve formatar o link do whatsapp corretamente', () => {
      const href = buildWhatsappHref('55 (11) 99999-9999', 'Olá Mundo');
      expect(href).toBe('https://wa.me/5511999999999?text=Ol%C3%A1%20Mundo');
    });
  });

  describe('WhatsappButton', () => {
    it('deve renderizar o link de whatsapp com os atributos corretos', () => {
      render(<WhatsappButton phoneNumber="5511999999999" message="Olá" />);
      const link = screen.getByRole('link', { name: /falar pelo whatsapp/i });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', 'https://wa.me/5511999999999?text=Ol%C3%A1');
      expect(link).toHaveAttribute('target', '_blank');
    });
  });

  describe('ProjectWhatsappButton', () => {
    it('deve renderizar com mensagem padrão quando o slug do projeto não está registrado', () => {
      render(<ProjectWhatsappButton projectSlug="projeto-inexistente" projectTitle="Projeto X" />);
      const link = screen.getByRole('link', { name: /falar pelo whatsapp/i });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute(
        'href',
        'https://wa.me/5500000000000?text=Oi%2C%20Projeto%20X.%20Quero%20saber%20mais%20sobre%20o%20projeto.'
      );
    });

    it('deve carregar a configuração correta para o projeto flow', () => {
      render(<ProjectWhatsappButton projectSlug="flow" projectTitle="FLOW" />);
      const link = screen.getByRole('link', { name: /falar pelo whatsapp/i });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute(
        'href',
        'https://wa.me/5500000000000?text=Oi%2C%20FLOW.%20Quero%20orientacao%20para%20montar%20ou%20evoluir%20meu%20aquario%20marinho.'
      );
    });
  });
});

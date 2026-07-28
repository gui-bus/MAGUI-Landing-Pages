import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ScrollTopLink } from './scroll-top-link';

describe('ScrollTopLink Component', () => {
  beforeEach(() => {
    vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
    vi.spyOn(window.history, 'replaceState').mockImplementation(() => {});
    document.body.innerHTML = '';
  });

  it('deve renderizar o link e os filhos corretamente', () => {
    render(<ScrollTopLink>Voltar ao Topo</ScrollTopLink>);
    const link = screen.getByRole('link', { name: 'Voltar ao Topo' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '#inicio');
  });

  it('deve chamar window.scrollTo(0) ao clicar se o elemento de destino não existir', () => {
    render(<ScrollTopLink>Voltar ao Topo</ScrollTopLink>);
    const link = screen.getByRole('link', { name: 'Voltar ao Topo' });
    
    fireEvent.click(link);

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
  });

  it('deve scrollar até a posição do elemento de destino se ele existir no documento', () => {
    const targetDiv = document.createElement('div');
    targetDiv.id = 'inicio';
    vi.spyOn(targetDiv, 'getBoundingClientRect').mockReturnValue({
      top: 500,
    } as DOMRect);
    document.body.appendChild(targetDiv);

    Object.defineProperty(window, 'scrollY', { value: 100, writable: true });

    render(<ScrollTopLink targetId="inicio">Voltar ao Topo</ScrollTopLink>);
    const link = screen.getByRole('link', { name: 'Voltar ao Topo' });

    fireEvent.click(link);

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 600,
      behavior: 'smooth',
    });
  });
});

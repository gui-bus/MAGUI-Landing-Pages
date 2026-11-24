import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { HelenaPropertiesSection } from "./properties-section";
import { HelenaContactSection } from "./contact-section";
import { HelenaFaqSection } from "./faq-section";

vi.mock("next/image", () => ({ default: ({ fill, sizes, ...props }: Record<string, unknown>) => { void fill; void sizes; return React.createElement("img", props); } }));
vi.mock("next/link", () => ({ default: ({ children, ...props }: Record<string, unknown>) => React.createElement("a", props, children as React.ReactNode) }));

afterEach(cleanup);

describe("Curadoria de Helena Duarte", () => {
  it("combina tipo e bairro, exibe estado vazio e permite limpar filtros", () => {
    render(<HelenaPropertiesSection />);
    fireEvent.click(screen.getByRole("button", { name: "Casas" }));
    expect(screen.getByText("1 imóvel nesta seleção")).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Horizonte Botânico" })).not.toBeInTheDocument();
    fireEvent.change(screen.getByRole("combobox"), { target: { value: "Cabral" } });
    expect(screen.getByText("0 imóveis nesta seleção")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Limpar filtros" }));
    expect(screen.getByText("3 imóveis nesta seleção")).toBeInTheDocument();
  });

  it("abre a ficha com contato específico e restaura a rolagem ao fechar", () => {
    HTMLDialogElement.prototype.showModal = function () { this.setAttribute("open", ""); };
    HTMLDialogElement.prototype.close = function () { this.removeAttribute("open"); fireEvent(this, new Event("close")); };
    render(<HelenaPropertiesSection />);
    fireEvent.click(screen.getByRole("button", { name: "Ver detalhes de Casa do Jardim" }));
    expect(screen.getByRole("dialog", { name: "Casa do Jardim" })).toBeInTheDocument();
    const href = screen.getByRole("link", { name: "Conversar sobre este imóvel" }).getAttribute("href")!;
    expect(new URL(href).searchParams.get("text")).toContain("Casa do Jardim (HD-102)");
    expect(document.body.style.overflow).toBe("hidden");
    fireEvent.click(screen.getByRole("button", { name: "Fechar detalhes do imóvel" }));
    expect(document.body.style.overflow).toBe("");
  });

  it("prepara uma mensagem com o perfil e invalida o resultado quando o formulário muda", async () => {
    render(<HelenaContactSection />);
    fireEvent.change(screen.getByRole("textbox", { name: "Como posso chamar você?" }), { target: { value: "Marina" } });
    fireEvent.change(screen.getByRole("textbox", { name: "O que não pode faltar?" }), { target: { value: "Uma varanda com sol" } });
    fireEvent.click(screen.getByRole("button", { name: "Preparar minha conversa" }));
    const href = screen.getByRole("link", { name: "Continuar no WhatsApp" }).getAttribute("href")!;
    expect(new URL(href).searchParams.get("text")).toContain("Meu nome é Marina");
    expect(new URL(href).searchParams.get("text")).toContain("Uma varanda com sol");
    fireEvent.change(screen.getByRole("textbox", { name: "Como posso chamar você?" }), { target: { value: "Outra pessoa" } });
    await waitFor(() => expect(screen.queryByRole("link", { name: "Continuar no WhatsApp" })).not.toBeInTheDocument());
  });

  it("inclui as opções personalizadas na mensagem e apresenta erro de nome no próprio formulário", () => {
    render(<HelenaContactSection />);
    fireEvent.click(screen.getByRole("button", { name: "Preparar minha conversa" }));
    expect(screen.getByRole("alert")).toHaveTextContent("Me conte seu nome");
    fireEvent.change(screen.getByRole("textbox", { name: "Como posso chamar você?" }), { target: { value: "Marina" } });
    fireEvent.click(screen.getByRole("combobox", { name: /Seu momento/ }));
    fireEvent.click(screen.getByRole("option", { name: "Quero vender meu imóvel" }));
    fireEvent.click(screen.getByRole("combobox", { name: /Investimento previsto/ }));
    fireEvent.click(screen.getByRole("option", { name: "Acima de R$ 3 milhões" }));
    fireEvent.click(screen.getByRole("button", { name: "Preparar minha conversa" }));
    const href = screen.getByRole("link", { name: "Continuar no WhatsApp" }).getAttribute("href")!;
    expect(new URL(href).searchParams.get("text")).toContain("Meu objetivo: Quero vender meu imóvel");
    expect(new URL(href).searchParams.get("text")).toContain("Investimento previsto: Acima de R$ 3 milhões");
  });

  it("mantém apenas uma resposta de FAQ aberta e fecha a resposta após a transição", async () => {
    render(<HelenaFaqSection />);
    const first = screen.getByRole("button", { name: "Ainda não sei exatamente o que procuro. Podemos conversar?" });
    const second = screen.getByRole("button", { name: "Como funciona uma visita?" });
    fireEvent.click(first);
    expect(first).toHaveAttribute("aria-expanded", "true");
    fireEvent.click(second);
    expect(first).toHaveAttribute("aria-expanded", "false");
    expect(second).toHaveAttribute("aria-expanded", "true");
    fireEvent.click(second);
    await waitFor(() => expect(screen.queryByRole("region")).not.toBeInTheDocument());
  });
});

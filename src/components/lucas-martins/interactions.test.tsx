import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { LucasPlanSection } from "./plan-section";
import { LucasPropertiesSection } from "./properties-section";
import { LucasContactSection } from "./contact-section";
import { LucasFaqSection } from "./faq-section";

vi.mock("next/image", () => ({ default: ({ fill, sizes, ...props }: Record<string, unknown>) => { void fill; void sizes; return React.createElement("img", props); } }));
vi.mock("next/link", () => ({ default: ({ children, ...props }: Record<string, unknown>) => React.createElement("a", props, children as React.ReactNode) }));

afterEach(cleanup);

describe("Lucas Martins — primeiro imóvel", () => {
  it("alterna as dúvidas por teclado e mantém a resposta vinculada ao assunto", async () => {
    render(<LucasFaqSection />);
    const first = screen.getByRole("tab", { name: /Primeiros passos/ });
    first.focus();
    fireEvent.keyDown(first, { key: "ArrowRight" });
    const entry = screen.getByRole("tab", { name: /Entrada/ });
    expect(entry).toHaveFocus();
    expect(entry).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("tabpanel")).toHaveAttribute("aria-labelledby", entry.id);
    expect(await screen.findByRole("heading", { name: "Preciso ter toda a entrada agora?" })).toBeInTheDocument();
    fireEvent.keyDown(entry, { key: "End" });
    expect(await screen.findByRole("heading", { name: "Todo imóvel entra no Minha Casa, Minha Vida?" })).toBeInTheDocument();
  });

  it("exige uma resposta por etapa e leva as escolhas para a conversa", async () => {
    render(<LucasPlanSection />);
    expect(screen.getByRole("button", { name: "Continuar" })).toBeDisabled();
    fireEvent.click(screen.getByRole("radio", { name: "Quero sair do aluguel" }));
    fireEvent.click(screen.getByRole("button", { name: "Continuar" }));
    fireEvent.click(await screen.findByRole("radio", { name: "Minha Casa, Minha Vida" }));
    fireEvent.click(screen.getByRole("button", { name: "Continuar" }));
    fireEvent.click(await screen.findByRole("radio", { name: "São José dos Pinhais" }));
    fireEvent.click(screen.getByRole("button", { name: "Ver meu ponto de partida" }));
    const link = await screen.findByRole("link", { name: "Levar meu plano para o Lucas" });
    const message = new URL(link.getAttribute("href")!).searchParams.get("text");
    expect(message).toContain("Quero sair do aluguel");
    expect(message).toContain("Minha Casa, Minha Vida");
    expect(message).toContain("São José dos Pinhais");
    fireEvent.click(screen.getByRole("button", { name: "Refazer minhas respostas" }));
    expect(await screen.findByRole("button", { name: "Continuar" })).toBeDisabled();
  });

  it("filtra por região e mantém o contato vinculado ao imóvel escolhido", async () => {
    render(<LucasPropertiesSection />);
    fireEvent.click(screen.getByRole("button", { name: "São Paulo" }));
    expect(screen.queryByRole("heading", { name: "Viva Afonso" })).not.toBeInTheDocument();
    expect(screen.getByText("1 opção para conhecer")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Conhecer melhor" }));
    const link = await screen.findByRole("link", { name: "Conversar sobre este apê" });
    expect(new URL(link.getAttribute("href")!).searchParams.get("text")).toContain("Apê Raízes (LM-101)");
  });

  it("valida o nome e atualiza a mensagem com a intenção selecionada", async () => {
    render(<LucasContactSection />);
    fireEvent.click(screen.getByRole("button", { name: "Preparar minha mensagem" }));
    expect(screen.getByRole("alert")).toHaveTextContent("Me conte seu nome");
    fireEvent.change(screen.getByRole("textbox", { name: "Como você gosta de ser chamado?" }), { target: { value: "Joana" } });
    fireEvent.click(screen.getByRole("radio", { name: "Quero entender o financiamento" }));
    fireEvent.click(screen.getByRole("button", { name: "Preparar minha mensagem" }));
    const link = await screen.findByRole("link", { name: "Continuar no WhatsApp" });
    const message = new URL(link.getAttribute("href")!).searchParams.get("text");
    expect(message).toContain("Joana");
    expect(message).toContain("Quero entender o financiamento");
    fireEvent.change(screen.getByRole("textbox", { name: "Como você gosta de ser chamado?" }), { target: { value: "Pedro" } });
    await waitFor(() => expect(screen.queryByRole("link", { name: "Continuar no WhatsApp" })).not.toBeInTheDocument());
  });
});

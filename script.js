// TROQUE PELO SEU NÚMERO DE WHATSAPP
// Formato: 55 + DDD + número (sem espaços, pontos ou traços)
const PHONE_NUMBER = "5511999999999";

const DEFAULT_MESSAGE =
  "Olá! Quero fazer um pedido com o cardápio da Lojista Food para minha loja no shopping.";

function openWhatsApp(itemText) {
  const text = itemText || DEFAULT_MESSAGE;
  const message = `Olá! Vim pelo site da Lojista Food e quero pedir: ${text}.`;
  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${11999572166}?text=${encoded}`;
  window.open(url, "_blank");
}

document.addEventListener("DOMContentLoaded", () => {
  // Botões que abrem o WhatsApp
  const whatsButtons = document.querySelectorAll(".js-open-whatsapp");

  whatsButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.getAttribute("data-item");
      openWhatsApp(item);
    });
  });

  // Ano no rodapé
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

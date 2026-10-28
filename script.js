// Personaliza este enlace si cambias el número o el mensaje.
const WHATSAPP_NUMBER = "34676469819";
const WHATSAPP_MESSAGE = "¡Hola! He visto tu portfolio de La Casuca 3D y me gustaría consultar un pedido personalizado de impresión 3D.";
const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.href = whatsappURL;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#nav-principal");
menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});
nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});
document.querySelector("#year").textContent = new Date().getFullYear();

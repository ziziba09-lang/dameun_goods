const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const form = document.querySelector(".quote-form");
const toast = document.querySelector(".toast");

navToggle?.addEventListener("click", () => {
  const isOpen = header.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("nav-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const name = data.get("name") || "고객님";
  const product = data.get("product") || "커스텀 굿즈";
  const quantity = data.get("quantity") || "수량 미정";

  toast.textContent = `${name} 문의 초안: ${product}, ${quantity}. 이 내용을 인스타그램 DM이나 이메일로 보내면 상담을 이어갈 수 있어요.`;
  toast.classList.add("show");

  window.clearTimeout(window.quoteToastTimer);
  window.quoteToastTimer = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 5200);
});

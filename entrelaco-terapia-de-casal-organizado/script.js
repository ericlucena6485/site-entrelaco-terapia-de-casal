document.getElementById("year").textContent = new Date().getFullYear();
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
toggle.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
document.querySelectorAll(".menu a").forEach(a => a.addEventListener("click", () => menu.classList.remove("open")));
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add("visible"); });
}, {threshold: .08});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

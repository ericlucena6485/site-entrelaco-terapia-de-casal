document.getElementById("year").textContent = new Date().getFullYear();
const themeToggle = document.querySelector(".theme-toggle");
const themeColor = document.querySelector('meta[name="theme-color"]');
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const setTheme = theme => {
  const dark = theme === "dark";
  document.body.classList.toggle("dark-theme", dark);
  themeToggle.setAttribute("aria-pressed", dark);
  themeToggle.setAttribute("aria-label", dark ? "Ativar tema claro" : "Ativar tema escuro");
  themeColor.setAttribute("content", dark ? "#252b28" : "#f7f3ee");
};
setTheme(savedTheme || (prefersDark ? "dark" : "light"));
themeToggle.addEventListener("click", () => {
  const nextTheme = document.body.classList.contains("dark-theme") ? "light" : "dark";
  localStorage.setItem("theme", nextTheme);
  setTheme(nextTheme);
});
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

const skills = [
  "PHP", "Laravel", "Yii2", "Yii1", "CodeIgniter", "JavaScript", "Vue.js",
  "HTML", "CSS", "Flutter", "Python", "MySQL", "Git",
];

const projects = [
  {
    name: "weather-now",
    desc: "Dashboard cuaca real-time dengan pencarian kota.",
    tags: "Vue 3 · Open-Meteo API",
    url: "https://github.com/wisnu-agustya2/weather-now",
  },
  {
    name: "expense-tracker",
    desc: "Pencatat keuangan dengan grafik dan export CSV.",
    tags: "JavaScript · Chart.js",
    url: "https://github.com/wisnu-agustya2/expense-tracker",
  },
  {
    name: "devfolio",
    desc: "Website portofolio ini, responsif dengan dark mode.",
    tags: "HTML · CSS · JavaScript",
    url: "https://github.com/wisnu-agustya2/devfolio",
  },
];

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function renderSkills() {
  const wrap = document.getElementById("skill-list");
  skills.forEach((s) => wrap.appendChild(el("span", "chip", s)));
}

function renderProjects() {
  const wrap = document.getElementById("project-list");
  projects.forEach((p) => {
    const card = el("a", "card");
    card.href = p.url;
    card.target = "_blank";
    card.rel = "noopener";
    card.append(el("h3", "", p.name), el("p", "", p.desc), el("span", "tags", p.tags));
    wrap.appendChild(card);
  });
}

function initTheme() {
  const saved = localStorage.getItem("theme");
  if (saved) document.documentElement.dataset.theme = saved;
  document.getElementById("theme-toggle").addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
  });
}

function typeRoles() {
  const roles = ["Laravel & Yii2", "Vue.js", "Flutter", "Python"];
  const target = document.getElementById("typed");
  let r = 0, i = 0, deleting = false;
  (function tick() {
    const word = roles[r];
    target.textContent = word.slice(0, i);
    if (!deleting && i === word.length) { deleting = true; return setTimeout(tick, 1400); }
    if (deleting && i === 0) { deleting = false; r = (r + 1) % roles.length; }
    i += deleting ? -1 : 1;
    setTimeout(tick, deleting ? 50 : 100);
  })();
}

document.getElementById("year").textContent = new Date().getFullYear();
initTheme();
renderSkills();
renderProjects();
typeRoles();

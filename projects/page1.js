const projects = [
  {
    id: 1,
    title: "Interactive Weather Forecasting App",
    desc: "Real-time dashboard with city search, live temperature, humidity, wind speed, and a 5-day forecast. Consumes the OpenWeatherMap API.",
    tags: ["JavaScript", "OpenWeather API"],
    badge: "Live",
    year: 2024,
    url: "#",
    thumb: "t-weather",
    image: "../assets/weather-app.png"
  },
  {
    id: 2,
    title: "Single Page Room Design App",
    desc: "Editorial React SPA showcasing interior design concepts — smooth page transitions, component-driven architecture, and a refined visual language.",
    tags: ["React", "Tailwind CSS"],
    badge: null,
    year: 2024,
    url: "https://room-master-app.pxxl.click/",
    thumb: "t-room",
    image: "../assets/room-app.png"
  },
  {
    id: 3,
    title: "Full-Stack Form Website with Firebase",
    desc: "Multi-step form with Firebase auth, real-time database writes, and client-side validation — full CRUD with an accessible, responsive UI.",
    tags: ["JavaScript", "Firebase"],
    badge: null,
    year: 2023,
    url: "https://multi-step-js-form.pxxl.click/",
    thumb: "t-form",
    image: "../assets/multi-step-form.png"
  },
  {
    id: 4,
    title: "E-Commerce Product Storefront",
    desc: "Full storefront with cart management, product filtering, real-time inventory, and checkout flow — powered by Supabase, styled with Tailwind.",
    tags: ["React", "Supabase", "Tailwind CSS"],
    badge: null,
    year: 2024,
    url: "#",
    thumb: "t-ecomm",
    image: "../assets/digital-bank.png"
  },
  {
    id: 5,
    title: "React Analytics Dashboard",
    desc: "Data-viz dashboard with chart components, filterable metric tables, and responsive layout — complex state management and component composition.",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    badge: null,
    year: 2024,
    url: "#",
    thumb: "t-dash",
    image: "../assets/extensions-app.png"
  },
  {
    id: 6,
    title: "Full-Stack Blog Platform",
    desc: "CMS with Supabase backend — rich-text posting, user auth, threaded comments, and a clean editorial reading experience built in React.",
    tags: ["React", "Supabase", "Tailwind CSS"],
    badge: null,
    year: 2024,
    url: "#",
    thumb: "t-blog",
    image: "../assets/digital-bank1.png"
  },
  {
    id: 7,
    title: "Personal Portfolio Website",
    desc: "This portfolio — designed and built from scratch with no frameworks. Pure HTML, CSS, and vanilla JS with a custom design system and zero glow.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    badge: "This site",
    year: 2025,
    url: "#",
    thumb: "t-portfolio",
    image: "../assets/my-first-portfolio.png"
  },
  {
    id: 8,
    title: "CSS Component Library",
    desc: "A self-built library of reusable UI components — buttons, cards, modals, and form elements styled with a consistent dark design token system.",
    tags: ["HTML5", "CSS3"],
    badge: null,
    year: 2023,
    url: "#",
    thumb: "t-css",
    image: "../assets/smartindex.png"
  }
];

function render() {
  const grid  = document.getElementById('projectGrid');
  const count = document.getElementById('topbarCount');

  count.textContent = `${projects.length} `;

  grid.innerHTML = projects.map((p, i) => `
    <a href="${p.url}" class="card" style="animation-delay:${i * 55}ms">

      <!-- Thumbnail -->
      <div class="card-thumb">
        <div class="card-thumb-inner ${p.thumb}">
          <img src="${p.image}" alt="${p.title} Preview" style="width:100%;height:100%;object-fit:cover;">
        </div>
      </div>

      <!-- Body — flex column -->
      <div class="card-body">
        <span class="card-index">${String(i + 1).padStart(2,'0')}</span>
        <span class="card-title">${p.title}</span>
        <p class="card-desc">${p.desc}</p>

        <!-- Footer pinned to bottom by flex:1 on desc -->
        <div class="card-footer">
          <div class="card-tags">
            ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
            ${p.badge ? `<span class="tag tag-cyan">${p.badge}</span>` : ''}
          </div>
          <span class="card-arrow">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path d="M1.5 5.5h8M5.5 1.5l4 4-4 4"
                stroke="currentColor" stroke-width="1.4"
                stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </div>
      </div>

    </a>
  `).join('');
}

document.getElementById('yr').textContent = new Date().getFullYear();
render();

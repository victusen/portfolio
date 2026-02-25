const projects = [
  // {
  //   id: 1,
  //   title: "Interactive Weather Forecasting App",
  //   desc: "Real-time dashboard with city search, live temperature, humidity, wind speed, and a 5-day forecast. Consumes the OpenWeatherMap API.",
  //   tags: ["JavaScript", "OpenWeather API"],
  //   badge: "Live",
  //   year: 2024,
  //   url: "#",
  //   thumb: "t-weather",
  //   image: "../assets/weather-app.png"
  // },
  // {
  //   id: 2,
  //   title: "Single Page Room Design App",
  //   desc: "Editorial React SPA showcasing interior design concepts — smooth page transitions, component-driven architecture, and a refined visual language.",
  //   tags: ["React", "Tailwind CSS"],
  //   badge: null,
  //   year: 2024,
  //   url: "https://room-master-app.pxxl.click/",
  //   thumb: "t-room",
  //   image: "../assets/room-app.png"
  // },
  // {
  //   id: 3,
  //   title: "Full-Stack Form Website with Firebase",
  //   desc: "Multi-step form with Firebase auth, real-time database writes, and client-side validation — full CRUD with an accessible, responsive UI.",
  //   tags: ["JavaScript", "Firebase"],
  //   badge: null,
  //   year: 2023,
  //   url: "https://multi-step-js-form.pxxl.click/",
  //   thumb: "t-form",
  //   image: "../assets/multi-step-form.png"
  // },
  {
    id: 4,
    title: "SmartIndex",
    desc: "The economies masterpiece in build. Making Africa & economy better/more stable, and accessible to all.",
    tags: ["JavaScript", "Tailwind CSS", "React"],
    badge: null,
    year: 2023,
    url: "https://smartindex.pxxl.click",
    thumb: "t-css",
    image: "../assets/smartindex.png"
  },
  {
    id: 5,
    title: "First portfolio",
    desc: "This portfolio designed by me was built from scratch. Many react features were used, lenis scroll, typewriter effect etc",
    tags: ["React", "Tailwind CSS", "Typescript"],
    badge: null,
    year: 2025,
    url: "https://victorusen.netlify.app/",
    thumb: "t-portfolio",
    image: "../assets/my-first-portfolio.png"
  },
  {
    id: 6,
    title: "async API fetching extensions app",
    desc: "This project required fetching API and updating Inactive/active extensions status.",
    tags: ["JavaScript"],
    badge: "json API",
    year: 2024,
    url: "https://victusen.github.io/Digital-bank/",
    thumb: "t-dash",
    image: "../assets/extensions-app1.png"
  },
  {
    id: 7,
    title: "E-Banking app landing page",
    desc: "E-banking app's full landing page, where users can find out and read more about features and services.",
    tags: ["HTML", "CSS", "JavaScript"],
    badge: null,
    year: 2024,
    url: "https://victusen.github.io/Digital-bank/",
    thumb: "t-ecomm",
    image: "../assets/digital-bank.png"
  },
  
  // {
  //   id: 8,
  //   title: "E-Banking app landing page",
  //   desc: "The full landing page of an e-banking app, where users can find out and learn more about the app.",
  //   tags: ["HTML", "CSS", "JavaScript"],
  //   badge: null,
  //   year: 2024,
  //   url: "#",
  //   thumb: "t-blog",
  //   image: "../assets/digital-bank1.png"
  // },
  
  
];

function render() {
  const grid  = document.getElementById('projectGrid');
  const count = document.getElementById('topbarCount');

  count.textContent = `${projects.length} `;

  grid.innerHTML = projects.map((p, i) => `
    <a href="${p.url}" target="_blank" class="card" style="animation-delay:${i * 55}ms">

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

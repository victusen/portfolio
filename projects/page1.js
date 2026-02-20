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
    mock: `
      <div class="mock">
        <div class="mock-bar w-third accent"></div>
        <div class="mock-bar w-half dim" style="margin-top:3px;height:3px;"></div>
        <div class="mock-row" style="margin-top:6px;">
          <div class="mock-box" style="height:28px;background:rgba(30,120,255,0.10);border-color:rgba(30,120,255,0.15);"></div>
          <div style="flex:2;display:flex;flex-direction:column;gap:4px;justify-content:center;padding-left:6px;">
            <div class="mock-bar w-full"></div>
            <div class="mock-bar w-3q dim"></div>
          </div>
        </div>
        <div class="mock-row" style="margin-top:5px;gap:4px;">
          <div class="mock-box"></div><div class="mock-box"></div>
          <div class="mock-box"></div><div class="mock-box"></div>
        </div>
      </div>`
  },
  {
    id: 2,
    title: "Full-Stack Form Website with Firebase",
    desc: "Multi-step form with Firebase auth, real-time database writes, and client-side validation — full CRUD with an accessible, responsive UI.",
    tags: ["JavaScript", "Firebase"],
    badge: null,
    year: 2023,
    url: "#",
    thumb: "t-form",
    mock: `
      <div class="mock">
        <div class="mock-bar w-half" style="background:rgba(140,60,255,0.25);"></div>
        <div style="display:flex;flex-direction:column;gap:5px;margin-top:7px;">
          <div style="height:13px;border-radius:3px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);"></div>
          <div style="height:13px;border-radius:3px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);"></div>
          <div style="height:13px;border-radius:3px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);"></div>
        </div>
        <div style="margin-top:8px;height:16px;border-radius:8px;background:rgba(140,60,255,0.28);width:55%;"></div>
      </div>`
  },
  {
    id: 3,
    title: "Single Page Room Design App",
    desc: "Editorial React SPA showcasing interior design concepts — smooth page transitions, component-driven architecture, and a refined visual language.",
    tags: ["React", "Tailwind CSS"],
    badge: null,
    year: 2024,
    url: "#",
    thumb: "t-room",
    mock: `
      <div class="mock">
        <div class="mock-bar w-full" style="background:rgba(200,155,50,0.18);"></div>
        <div class="mock-row" style="margin-top:6px;gap:5px;align-items:flex-start;">
          <div style="width:32px;height:42px;border-radius:4px;background:rgba(200,155,50,0.12);border:1px solid rgba(200,155,50,0.18);flex-shrink:0;"></div>
          <div style="flex:1;display:flex;flex-direction:column;gap:4px;padding-top:4px;">
            <div class="mock-bar w-full"></div>
            <div class="mock-bar w-3q dim"></div>
            <div class="mock-bar w-half dim"></div>
          </div>
        </div>
      </div>`
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
    mock: `
      <div class="mock">
        <div class="mock-bar w-third" style="background:rgba(0,229,200,0.22);"></div>
        <div class="mock-row" style="margin-top:6px;">
          <div class="mock-box accent-box"></div>
          <div class="mock-box"></div>
          <div class="mock-box"></div>
        </div>
        <div class="mock-bar w-full dim" style="height:18px;border-radius:4px;margin-top:5px;"></div>
      </div>`
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
    mock: `
      <div class="mock">
        <div class="mock-row" style="gap:4px;margin-bottom:6px;">
          <div class="mock-box" style="height:20px;background:rgba(50,100,240,0.12);border-color:rgba(50,100,240,0.18);"></div>
          <div class="mock-box" style="height:20px;background:rgba(0,229,200,0.08);border-color:rgba(0,229,200,0.14);"></div>
          <div class="mock-box" style="height:20px;"></div>
        </div>
        <div class="mock-chart">
          <div class="mock-bar-v lo"></div><div class="mock-bar-v med"></div>
          <div class="mock-bar-v hi"></div><div class="mock-bar-v med"></div>
          <div class="mock-bar-v cy"></div><div class="mock-bar-v lo"></div>
          <div class="mock-bar-v med"></div>
        </div>
      </div>`
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
    mock: `
      <div class="mock">
        <div class="mock-bar w-3q" style="background:rgba(210,70,55,0.22);"></div>
        <div style="display:flex;flex-direction:column;gap:4px;margin-top:7px;">
          <div class="mock-bar w-full"></div>
          <div class="mock-bar w-full dim"></div>
          <div class="mock-bar w-3q dim"></div>
          <div class="mock-bar w-half dim"></div>
        </div>
        <div style="margin-top:7px;height:14px;border-radius:7px;background:rgba(210,70,55,0.2);width:38%;"></div>
      </div>`
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
    mock: `
      <div class="mock">
        <div class="mock-bar w-half accent"></div>
        <div style="margin-top:8px;">
          <div style="font-family:'Syne',sans-serif;font-size:11px;font-weight:800;
            color:rgba(240,244,244,0.18);letter-spacing:-0.02em;line-height:1.1;">
            Victor<br><span style="color:rgba(0,229,200,0.22);">Raymond</span>
          </div>
        </div>
        <div class="mock-row" style="margin-top:8px;gap:4px;">
          <div class="mock-box"></div>
          <div class="mock-box accent-box"></div>
        </div>
      </div>`
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
    mock: `
      <div class="mock">
        <div class="mock-row" style="gap:4px;margin-bottom:5px;">
          <div style="height:16px;border-radius:8px;background:rgba(60,80,200,0.20);
            border:1px solid rgba(60,80,200,0.22);flex:1;"></div>
          <div style="height:16px;border-radius:4px;background:rgba(255,255,255,0.04);
            border:1px solid rgba(255,255,255,0.07);flex:1;"></div>
        </div>
        <div style="height:26px;border-radius:6px;background:rgba(60,80,200,0.08);
          border:1px solid rgba(60,80,200,0.12);margin-bottom:5px;"></div>
        <div class="mock-bar w-full" style="height:4px;"></div>
        <div class="mock-bar w-3q dim" style="height:4px;margin-top:3px;"></div>
      </div>`
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
          ${p.mock}
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

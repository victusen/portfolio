// Initialize Lenis
const lenis = new Lenis({
	duration: 1.8,
	easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
	smooth: true,
	smoothTouch: false,
	touchMultiplier: 1.5,
	lerp: 0.08, 
});

function raf(time) {
	lenis.raf(time);
	requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Dynamic year
document.getElementById('year').textContent = new Date().getFullYear();

// Nav scroll state
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
	nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// Mobile menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');

function openMobile() {
	if (typeof lenis !== 'undefined') lenis.stop();
	mobileMenu.classList.add('open');
	document.body.style.overflow = 'hidden';
}

function closeMobile() {
	if (typeof lenis !== 'undefined') lenis.start();
	mobileMenu.classList.remove('open');
	document.body.style.overflow = '';
}

const toggleMobile = () => {
    if (mobileMenu.classList.contains('open')) {
        closeMobile();
    } else {
        openMobile();
    }
};

hamburger.addEventListener('click', toggleMobile);
mobileClose.addEventListener('click', closeMobile);

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('visible');
			revealObserver.unobserve(entry.target);
		}
	});
}, {
	threshold: 0.1,
	rootMargin: '0px 0px -60px 0px'
});

revealEls.forEach(el => revealObserver.observe(el));

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			navLinks.forEach(link => {
				link.style.color = '';
				if (link.getAttribute('href') === '#' + entry.target.id) {
					link.style.color = 'var(--text-primary)';
				}
			});
		}
	});
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

// Smooth anchor scroll (Lenis Implementation)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function(e) {
		const href = this.getAttribute('href');

		// 1. Handle scroll to top (#)
		if (href === '#') {
			e.preventDefault();
			lenis.scrollTo(0, {
				duration: 2.0,
				easing: (t) => 1 - Math.pow(1 - t, 4) // outQuart
			});
			return;
		}

		// 2. Handle specific targets (#id)
		try {
			const target = document.querySelector(href);
			if (target) {
				e.preventDefault();

				// Close mobile menu if open
				if (typeof closeMobile === 'function') {
					closeMobile();
				}

				const headerHeight = 80;
				const start = window.scrollY;
				const elementPosition = target.getBoundingClientRect().top;
				const offsetPosition = elementPosition + start - headerHeight;

				lenis.scrollTo(offsetPosition, {
					duration: 1.8,
					easing: (t) => 1 - Math.pow(1 - t, 4) // outQuart
				});
			}
		} catch (err) {
			console.warn('Invalid anchor link:', href);
		}
	});
});

// PROJECTS DATA & RENDERING // 
const featuredProjects = [
  {
    id: 1,
    index: "01",
    title: "Interactive Weather Forecasting App",
    desc: "A real-time weather dashboard fetching live data by city name. Features temperature, humidity, wind speed, and multi-day forecasts with a clean, readable UI.",
    tags: ["JavaScript", "OpenWeather API"],
    badge: "Live",
    image: "assets/weather-app.png",
    url: "#",
    isFeatured: true
  },
  {
    id: 2,
    index: "02",
    title: "Full-Stack Form Website with Firebase",
    desc: "Multi-step form application with real-time database storage, form validation, and user authentication built on Firebase.",
    tags: ["JavaScript", "Firebase"],
    badge: null,
    image: "assets/multi-step-form.png",
    url: "https://multi-step-js-form.pxxl.click/",
    isFeatured: false
  },
  {
    id: 3,
    index: "03",
    title: "Single Page Room Design App",
    desc: "A React & Tailwind single-page application showcasing innovative interior design concepts with smooth transitions and a polished UI.",
    tags: ["React", "Tailwind CSS"],
    badge: null,
    image: "assets/room-app.png",
    url: "https://room-master-app.pxxl.click/",
    isFeatured: false
  }
];

function renderProjects() {
  const container = document.getElementById('projectsGrid');
  if (!container) return;

  container.innerHTML = featuredProjects.map((project, idx) => `
    <a href="${project.url}" ${project.url.startsWith('http') ? 'target="_blank"' : ''} 
       class="project-card ${project.isFeatured ? 'featured' : ''} reveal">
      <div class="project-thumb">
        <img src="${project.image}" alt="${project.title} Preview" loading="lazy" />
      </div>
      <div class="project-body">
        <span class="project-index">${project.index}</span>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.desc}</p>
        <div class="project-footer">
          <div class="project-tags">
            ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            ${project.badge ? `<span class="tag tag-cyan">${project.badge}</span>` : ''}
          </div>
          <div class="project-arrow">
            <svg viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
        </div>
      </div>
    </a>
  `).join('');

  // Re-observe new elements for reveal animation
  const newReveals = container.querySelectorAll('.reveal');
  newReveals.forEach(el => revealObserver.observe(el));
}

// Initialize rendering
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    // Dynamic year
    const yearEl = document.getElementById('year');
    if(yearEl) yearEl.textContent = new Date().getFullYear();

    // CONTACT MODAL LOGIC //
    
    // EmailJS Initialization
    emailjs.init({
      publicKey: CONFIG.EMAILJS_PUBLIC_KEY,
    });

    const openModalBtns = document.querySelectorAll('.js-open-modal');
    const modalBackdrop = document.getElementById('modalBackdrop');
    const modalContainer = document.getElementById('modalContainer');
    const modalCloseBtn = document.getElementById('modalClose');
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const modalContent = document.getElementById('modalContent');
    const modalSuccess = document.getElementById('modalSuccess');
    const formError = document.getElementById('formError');

    const openModal = (e) => {
      if(e) e.preventDefault();
      modalBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
      if(typeof lenis !== 'undefined') lenis.stop();
      
      // Auto-focus first input
      setTimeout(() => {
        document.getElementById('userName').focus();
      }, 400);
    };

    const closeModal = () => {
      modalBackdrop.classList.remove('open');
      document.body.style.overflow = '';
      if(typeof lenis !== 'undefined') lenis.start();
      
      // Reset form and states after transition
      setTimeout(() => {
        contactForm.reset();
        modalContent.style.display = 'block';
        modalSuccess.style.display = 'none';
        formError.style.display = 'none';
        submitBtn.disabled = false;
        submitBtn.querySelector('span').textContent = 'Send Message';
      }, 400);
    };

    // Event Listeners
    if(openModalBtns) {
      openModalBtns.forEach(btn => btn.addEventListener('click', openModal));
    }
    if(modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    
    // Close on backdrop click (but not modal container)
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });

    // Close on escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
        closeModal();
      }
    });

    // Focus Trap Logic
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    modalContainer.addEventListener('keydown', function(e) {
      const isTabPressed = e.key === 'Tab' || e.keyCode === 9;
      if (!isTabPressed) return;

      const focusElements = modalContainer.querySelectorAll(focusableElements);
      const firstFocusableElement = focusElements[0];
      const lastFocusableElement = focusElements[focusElements.length - 1];

      if (e.shiftKey) { // shift + tab
        if (document.activeElement === firstFocusableElement) {
          lastFocusableElement.focus();
          e.preventDefault();
        }
      } else { // tab
        if (document.activeElement === lastFocusableElement) {
          firstFocusableElement.focus();
          e.preventDefault();
        }
      }
    });

    // Form Submission with EmailJS
    if(contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Disable button and show sending state
        submitBtn.disabled = true;
        const btnText = submitBtn.querySelector('span');
        const originalText = btnText.textContent;
        btnText.textContent = 'Sending...';
        formError.style.display = 'none';

        // EmailJS sendForm
        emailjs.sendForm(CONFIG.EMAILJS_SERVICE_ID, CONFIG.EMAILJS_TEMPLATE_ID, this)
          .then(() => {
            // Success
            modalContent.style.display = 'none';
            modalSuccess.style.display = 'flex';
            
            // Auto close after 3.5 seconds
            setTimeout(closeModal, 3500);
          }, (error) => {
            // Error
            console.error('EmailJS Error:', error);
            submitBtn.disabled = false;
            btnText.textContent = originalText;
            formError.style.display = 'block';
          });
      });
    }
});


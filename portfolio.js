// Initialize Lenis
const lenis = new Lenis({
	duration: 1.4,
	easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
	smooth: true,
	smoothTouch: false,
	touchMultiplier: 2,
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
	lenis.stop(); // Pause Lenis
	mobileMenu.classList.add('open');
	document.body.style.overflow = 'hidden';
}
function closeMobile() {
	lenis.start(); // Resume Lenis
	mobileMenu.classList.remove('open');
	document.body.style.overflow = '';
}

hamburger.addEventListener('click', openMobile);
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
				duration: 1.4,
				easing: (t) => 1 - Math.pow(1 - t, 4)
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
					duration: 1.2,
					easing: (t) => 1 - Math.pow(1 - t, 4)
				});
			}
		} catch (err) {
			console.warn('Invalid anchor link:', href);
		}
	});
});
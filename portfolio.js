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
	mobileMenu.classList.add('open');
	document.body.style.overflow = 'hidden';
}
function closeMobile() {
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

// Smooth anchor scroll (for older browsers)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function(e) {
		const target = document.querySelector(this.getAttribute('href'));
		if (target) {
			e.preventDefault();
			target.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	});
});
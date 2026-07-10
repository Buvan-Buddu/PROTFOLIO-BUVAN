const FORMSPREE_FORM_ID = 'YOUR_FORMSPREE_FORM_ID';
const CALENDLY_URL = 'https://calendly.com/vbuvanraj/30min';

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            const target = document.querySelector(targetId);
            if (!target) return;
            e.preventDefault();
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            closeMobileNav();
        });
    });
}

function applyTiltEffect(element, strength = 8) {
    element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / strength;
        const rotateY = (centerX - x) / strength;
        element.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
        element.style.transition = 'none';
    });

    element.addEventListener('mouseleave', () => {
        element.style.transform = 'perspective(1200px) rotateX(0) rotateY(0) translateZ(0)';
        element.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
    });
}

function initTiltEffects() {
    document.querySelectorAll('.project-card, .attribute-card, .education-card, .certification-card').forEach((card) => {
        applyTiltEffect(card, 8);
    });
    document.querySelectorAll('.experience-card').forEach((card) => {
        applyTiltEffect(card, 10);
    });
}

function applyTheme(theme) {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;
    const sunIcon = themeToggle.querySelector('.sun-icon');
    const moonIcon = themeToggle.querySelector('.moon-icon');
    const isDark = theme === 'dark';
    document.body.classList.toggle('dark-mode', isDark);
    if (sunIcon) sunIcon.style.display = isDark ? 'none' : 'block';
    if (moonIcon) moonIcon.style.display = isDark ? 'block' : 'none';
}

function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(savedTheme || (systemPrefersDark ? 'dark' : 'light'));

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const newTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
            applyTheme(newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
}

function initHeaderShadowOnScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;
    window.addEventListener('scroll', () => {
        header.style.boxShadow = window.pageYOffset > 100
            ? '0 4px 16px rgba(0, 0, 0, 0.1)'
            : '0 2px 8px rgba(0, 0, 0, 0.08)';
    });
}

function initActiveNavHighlight() {
    const sections = document.querySelectorAll('.section, .hero');
    const navLinks = document.querySelectorAll('.main-nav a');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 160;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = sectionId;
            }
        });

        if ((window.innerHeight + scrollPosition) >= document.documentElement.scrollHeight - 50) {
            current = 'contact';
        }

        if (!current && sections.length > 0) {
            current = sections[0].getAttribute('id');
        }

        navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
        });
    });
}

let navOverlay = null;

function ensureNavOverlay() {
    if (navOverlay) return navOverlay;
    navOverlay = document.createElement('div');
    navOverlay.className = 'nav-overlay';
    document.body.appendChild(navOverlay);
    navOverlay.addEventListener('click', closeMobileNav);
    return navOverlay;
}

function openMobileNav() {
    const nav = document.getElementById('mainNav');
    const toggle = document.getElementById('navToggle');
    if (!nav || !toggle) return;
    nav.classList.add('open');
    toggle.classList.add('active');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('nav-open');
    ensureNavOverlay().classList.add('active');
}

function closeMobileNav() {
    const nav = document.getElementById('mainNav');
    const toggle = document.getElementById('navToggle');
    if (!nav || !toggle) return;
    nav.classList.remove('open');
    toggle.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
    if (navOverlay) navOverlay.classList.remove('active');
}

function initMobileNav() {
    const toggle = document.getElementById('navToggle');
    if (!toggle) return;
    toggle.addEventListener('click', () => {
        const isOpen = document.getElementById('mainNav').classList.contains('open');
        if (isOpen) {
            closeMobileNav();
        } else {
            openMobileNav();
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 900) closeMobileNav();
    });
}

function initDownloadResumeButton() {
    const downloadResumeBtn = document.querySelector('.btn-download-resume');
    if (!downloadResumeBtn) return;
    downloadResumeBtn.addEventListener('click', () => {
        alert('Resume successfully downloaded.');
    });
}

function showFormSuccess(form, message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'form-success active';
    successDiv.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <span>${message}</span>
    `;
    form.insertBefore(successDiv, form.firstChild);
}

function showFormError(form, message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'form-error active';
    errorDiv.textContent = message;
    form.insertBefore(errorDiv, form.firstChild);
    errorDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function clearFormMessages(form) {
    const successMsg = form.querySelector('.form-success');
    const errorMsg = form.querySelector('.form-error');
    if (successMsg) successMsg.remove();
    if (errorMsg) errorMsg.remove();
}

function initContactModal() {
    const contactModal = document.getElementById('contactModal');
    const openModalBtn = document.getElementById('openContactModal');
    const closeModalBtn = document.getElementById('closeContactModal');
    const cancelBtn = document.getElementById('cancelContactForm');
    const contactForm = document.getElementById('contactForm');
    if (!contactModal || !contactForm) return;

    const openModal = () => {
        contactModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        contactModal.classList.remove('active');
        document.body.style.overflow = '';
        contactForm.reset();
        clearFormMessages(contactForm);
    };

    if (openModalBtn) openModalBtn.addEventListener('click', openModal);
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

    const overlay = contactModal.querySelector('.modal-overlay');
    if (overlay) overlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && contactModal.classList.contains('active')) {
            closeModal();
        }
    });

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        clearFormMessages(contactForm);

        const name = document.getElementById('contactName').value.trim();
        const email = document.getElementById('contactEmail').value.trim();
        const message = document.getElementById('contactMessage').value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name || !email || !message) {
            showFormError(contactForm, 'Please fill in all required fields.');
            return;
        }

        if (!emailRegex.test(email)) {
            showFormError(contactForm, 'Please enter a valid email address.');
            return;
        }

        const submitBtn = contactForm.querySelector('.btn-submit');
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> Sending...';
        }

        fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
            method: 'POST',
            body: JSON.stringify({ name, email, message, _subject: `Contact from Portfolio: ${name}` }),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                if (response.ok) {
                    showFormSuccess(contactForm, 'Thank you! Your message has been sent successfully.');
                    contactForm.reset();
                    setTimeout(closeModal, 2500);
                    return null;
                }
                return response.json().then((data) => {
                    if (FORMSPREE_FORM_ID === 'YOUR_FORMSPREE_FORM_ID') {
                        throw new Error('Formspree Form ID is not configured. Please edit script.js and configure your FORMSPREE_FORM_ID.');
                    }
                    throw new Error(data.error || 'Server returned an error.');
                });
            })
            .catch((error) => {
                showFormError(contactForm, error.message || 'Submission failed. Please check your network connection and try again.');
            })
            .finally(() => {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Send Message';
                }
            });
    });
}

function initBookCallButton() {
    const bookCallBtn = document.getElementById('openBookCall');
    if (!bookCallBtn) return;
    bookCallBtn.addEventListener('click', () => {
        if (!CALENDLY_URL || CALENDLY_URL.includes('your-username')) {
            alert('Book a Call is not configured yet. Open script.js and set CALENDLY_URL to your real Calendly link.');
            return;
        }
        if (window.Calendly && typeof window.Calendly.initPopupWidget === 'function') {
            window.Calendly.initPopupWidget({ url: CALENDLY_URL });
        } else {
            window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');
        }
    });
}

function initSocialIconHover() {
    document.querySelectorAll('.social-icon, .icon-circle').forEach((icon) => {
        icon.addEventListener('mouseenter', function handleEnter() {
            this.style.transform = 'translateY(-4px) scale(1.1)';
        });
        icon.addEventListener('mouseleave', function handleLeave() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

function showMailtoToast(text, ttl = 6000) {
    const existing = document.querySelector('.simple-mailto-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'simple-mailto-toast';

    const span = document.createElement('span');
    span.textContent = text;
    toast.appendChild(span);

    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = 'Copy';
    toast.appendChild(button);

    button.addEventListener('click', () => {
        const match = text.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
        if (!match) return;
        const emailAddress = match[0];
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(emailAddress);
        } else {
            const textarea = document.createElement('textarea');
            textarea.value = emailAddress;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            textarea.remove();
        }
        span.textContent = 'Copied to clipboard';
        setTimeout(() => toast.remove(), 1200);
    });

    document.body.appendChild(toast);
    setTimeout(() => {
        if (toast.parentNode) toast.remove();
    }, ttl);
}

function openMailClient(href) {
    try {
        window.location.href = href;
    } catch (errorPrimary) {
        try {
            window.open(href, '_self');
        } catch (errorSecondary) {
            try {
                window.open(href, '_blank');
            } catch (errorTertiary) {
                const iframe = document.createElement('iframe');
                iframe.style.display = 'none';
                iframe.src = href;
                document.body.appendChild(iframe);
                setTimeout(() => iframe.remove(), 1500);
            }
        }
    }
}

function initMailtoLinks() {
    document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
        const handler = (e) => {
            if (e && typeof e.preventDefault === 'function') e.preventDefault();
            if (e && typeof e.stopImmediatePropagation === 'function') e.stopImmediatePropagation();
            const href = link.getAttribute('href');
            if (!href) return;
            openMailClient(href);
            setTimeout(() => showMailtoToast(href.replace('mailto:', '')), 900);
        };

        link.addEventListener('click', handler, true);
        link.addEventListener('auxclick', handler, true);
        link.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') handler(e);
        });
    });
}

function initParallaxHero() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        if (scrolled < window.innerHeight) {
            hero.style.transform = `translateY(${scrolled * 0.3}px)`;
            hero.style.opacity = String(1 - (scrolled / window.innerHeight) * 0.5);
        }
    });
}

function initPageLoadAnimation() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 50);
        if (typeof AOS !== 'undefined') {
            AOS.init({ duration: 800, once: true, mirror: false, offset: 100 });
        }
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.animation = 'fadeInUp 0.8s ease';
        }
    });
}

class BackgroundParticle {
    constructor(canvas) {
        this.canvas = canvas;
        this.reset();
        this.y = Math.random() * canvas.height;
    }

    reset() {
        const canvas = this.canvas;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 4 + 2;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.color = Math.random() > 0.5 ? 'rgba(59, 130, 246, 0.3)' : 'rgba(224, 242, 254, 0.4)';
        this.type = Math.random() > 0.7 ? 'circle' : Math.random() > 0.5 ? 'square' : 'ring';
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        const canvas = this.canvas;
        if (this.x > canvas.width + 50) this.x = -50;
        if (this.x < -50) this.x = canvas.width + 50;
        if (this.y > canvas.height + 50) this.y = -50;
        if (this.y < -50) this.y = canvas.height + 50;
    }

    draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        const isDarkMode = document.body.classList.contains('dark-mode');
        const color = isDarkMode
            ? (this.color.includes('59, 130') ? 'rgba(96, 165, 250, 0.3)' : 'rgba(51, 65, 85, 0.4)')
            : this.color;
        ctx.fillStyle = color;
        ctx.strokeStyle = color;

        if (this.type === 'circle') {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        } else if (this.type === 'square') {
            ctx.fillRect(this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);
        } else {
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size * 1.5, 0, Math.PI * 2);
            ctx.stroke();
        }
        ctx.restore();
    }
}

class BackgroundWave {
    constructor(canvas) {
        this.canvas = canvas;
        this.amplitude = Math.random() * 100 + 50;
        this.frequency = Math.random() * 0.02 + 0.01;
        this.speed = Math.random() * 0.5 + 0.3;
        this.offset = Math.random() * Math.PI * 2;
        this.y = Math.random() * canvas.height;
        this.color = Math.random() > 0.5 ? 'rgba(59, 130, 246, 0.15)' : 'rgba(224, 242, 254, 0.2)';
    }

    update() {
        this.offset += this.speed * 0.01;
    }

    draw(ctx) {
        const canvas = this.canvas;
        ctx.save();
        ctx.globalAlpha = 0.3;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += 2) {
            const y = this.y + Math.sin(x * this.frequency + this.offset) * this.amplitude;
            if (x === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.stroke();
        ctx.restore();
    }
}

function initFlowingBackground() {
    const canvas = document.getElementById('flowingBackground');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let mouseX;
    let mouseY;

    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    resizeCanvas();
    mouseX = canvas.width / 2;
    mouseY = canvas.height / 2;
    window.addEventListener('resize', resizeCanvas);

    const particleCount = 80;
    const particles = Array.from({ length: particleCount }, () => new BackgroundParticle(canvas));
    const waves = Array.from({ length: 3 }, () => new BackgroundWave(canvas));

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        const isDarkMode = document.body.classList.contains('dark-mode');
        if (isDarkMode) {
            gradient.addColorStop(0, 'rgba(15, 23, 42, 0.95)');
            gradient.addColorStop(0.5, 'rgba(30, 41, 59, 0.9)');
            gradient.addColorStop(1, 'rgba(15, 23, 42, 0.95)');
        } else {
            gradient.addColorStop(0, 'rgba(248, 250, 252, 0.8)');
            gradient.addColorStop(0.5, 'rgba(224, 242, 254, 0.6)');
            gradient.addColorStop(1, 'rgba(248, 250, 252, 0.8)');
        }
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        waves.forEach((wave) => {
            wave.update();
            wave.draw(ctx);
        });

        particles.forEach((particle) => {
            const dx = mouseX - particle.x;
            const dy = mouseY - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const maxDistance = 200;

            if (distance < maxDistance && distance > 0) {
                const force = (maxDistance - distance) / maxDistance;
                particle.speedX += (dx / distance) * force * 0.01;
                particle.speedY += (dy / distance) * force * 0.01;
            }

            particle.speedX *= 0.98;
            particle.speedY *= 0.98;
            particle.update();
            particle.draw(ctx);
        });

        ctx.strokeStyle = document.body.classList.contains('dark-mode') ? 'rgba(96, 165, 250, 0.08)' : 'rgba(59, 130, 246, 0.1)';
        ctx.lineWidth = 1;

        for (let i = 0; i < particles.length; i += 1) {
            for (let j = i + 1; j < particles.length; j += 1) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 120) {
                    ctx.globalAlpha = ((120 - distance) / 120) * 0.3;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }

        ctx.globalAlpha = 1;
        animationId = requestAnimationFrame(animate);
    }

    animate();

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            cancelAnimationFrame(animationId);
        } else {
            animate();
        }
    });
}

function injectKeyframeStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);
}

function init() {
    injectKeyframeStyles();
    initSmoothScroll();
    initTiltEffects();
    initThemeToggle();
    initHeaderShadowOnScroll();
    initActiveNavHighlight();
    initMobileNav();
    initDownloadResumeButton();
    initContactModal();
    initBookCallButton();
    initSocialIconHover();
    initMailtoLinks();
    initParallaxHero();
    initPageLoadAnimation();
    initFlowingBackground();
}

document.addEventListener('DOMContentLoaded', init);

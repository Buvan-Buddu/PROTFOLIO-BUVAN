// ============================================
// PORTFOLIO WEBSITE - INTERACTIVITY & ANIMATIONS
// ============================================


// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});



// Progress Bar Animation on Scroll
const progressBars = document.querySelectorAll('.progress-fill');

const animateProgressBars = () => {
    progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        if (width) {
            bar.style.width = width + '%';
        }
    });
};

// Intersection Observer for progress bars
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const width = bar.getAttribute('data-width');
            if (width) {
                setTimeout(() => {
                    bar.style.width = width + '%';
                }, 200);
            }
            progressObserver.unobserve(bar);
        }
    });
}, observerOptions);

progressBars.forEach(bar => {
    progressObserver.observe(bar);
});

// Enhanced 3D Tilt Effect on Cards
const applyTiltEffect = (element) => {
    element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 8;
        const rotateY = (centerX - x) / 8;
        
        const scale = 1.05;
        
        element.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(50px) scale3d(${scale}, ${scale}, ${scale})`;
        element.style.transition = 'none';
        element.style.filter = 'brightness(1.05)';
    });
    
    element.addEventListener('mouseleave', () => {
        element.style.transform = 'perspective(1200px) rotateX(0) rotateY(0) translateZ(0) scale3d(1, 1, 1)';
        element.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1), filter 0.6s ease';
        element.style.filter = 'brightness(1)';
    });
};

// Apply tilt effect to project cards and attribute cards
document.querySelectorAll('.project-card, .attribute-card, .education-card, .certification-card').forEach(card => {
    applyTiltEffect(card);
});

// Apply tilt effect specifically for experience cards
document.querySelectorAll('.experience-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
        card.style.transition = 'none';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1200px) rotateX(0) rotateY(0) translateZ(0)';
        card.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
    });
});

// ============================================
// DARK / LIGHT MODE TOGGLE
// ============================================

const themeToggle = document.getElementById('themeToggle');
const sunIcon = themeToggle ? themeToggle.querySelector('.sun-icon') : null;
const moonIcon = themeToggle ? themeToggle.querySelector('.moon-icon') : null;

const applyTheme = (theme) => {
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        if (sunIcon) sunIcon.style.display = 'none';
        if (moonIcon) moonIcon.style.display = 'block';
    } else {
        document.body.classList.remove('dark-mode');
        if (sunIcon) sunIcon.style.display = 'block';
        if (moonIcon) moonIcon.style.display = 'none';
    }
};

// Check user theme preference
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
applyTheme(initialTheme);

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const isDark = document.body.classList.contains('dark-mode');
        const newTheme = isDark ? 'light' : 'dark';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// Header background on scroll
const header = document.querySelector('.site-header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
    }
    
    lastScroll = currentScroll;
});

// Active navigation link highlighting
const sections = document.querySelectorAll('.section, .hero');
const navLinks = document.querySelectorAll('.main-nav a');

window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 160; // offset for navbar height
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = sectionId;
        }
    });
    
    // Fallback: highlight Contact if scrolled to the absolute bottom of the page
    if ((window.innerHeight + scrollPosition) >= document.documentElement.scrollHeight - 50) {
        current = 'contact';
    }
    
    if (!current && sections.length > 0) {
        current = sections[0].getAttribute('id');
    }
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Download Resume Button
const downloadResumeBtn = document.querySelector('.btn-download-resume');
if (downloadResumeBtn) {
    downloadResumeBtn.addEventListener('click', () => {
        // You can add actual download functionality here
        alert('Resume Successfully downloaded .');
    });
}

// ============================================
// CONTACT MODAL FUNCTIONALITY
// ============================================

const contactModal = document.getElementById('contactModal');
const openModalBtn = document.getElementById('openContactModal');
const closeModalBtn = document.getElementById('closeContactModal');
const cancelBtn = document.getElementById('cancelContactForm');
const contactForm = document.getElementById('contactForm');

// Formspree Configuration (Replace with your own Formspree Form ID)
const FORMSPREE_FORM_ID = 'YOUR_FORMSPREE_FORM_ID'; // Replace this with your form ID (e.g. 'mvgonpgo')

// Open Modal
if (openModalBtn) {
    openModalBtn.addEventListener('click', () => {
        contactModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

// Close Modal Functions
function closeModal() {
    contactModal.classList.remove('active');
    document.body.style.overflow = '';
    // Reset form
    if (contactForm) {
        contactForm.reset();
        // Remove success/error messages
        const successMsg = contactForm.querySelector('.form-success');
        const errorMsg = contactForm.querySelector('.form-error');
        if (successMsg) successMsg.remove();
        if (errorMsg) errorMsg.remove();
    }
}

if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
}

if (cancelBtn) {
    cancelBtn.addEventListener('click', closeModal);
}

// Close modal when clicking overlay
if (contactModal) {
    const overlay = contactModal.querySelector('.modal-overlay');
    if (overlay) {
        overlay.addEventListener('click', closeModal);
    }
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && contactModal.classList.contains('active')) {
        closeModal();
    }
});

// Form Submission using Formspree Fetch API
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('contactName').value.trim();
        const email = document.getElementById('contactEmail').value.trim();
        const message = document.getElementById('contactMessage').value.trim();
        
        // Remove existing messages
        const existingSuccess = contactForm.querySelector('.form-success');
        const existingError = contactForm.querySelector('.form-error');
        if (existingSuccess) existingSuccess.remove();
        if (existingError) existingError.remove();
        
        // Validate form
        if (!name || !email || !message) {
            showFormError('Please fill in all required fields.');
            return;
        }
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showFormError('Please enter a valid email address.');
            return;
        }
        
        // Disable submit button
        const submitBtn = contactForm.querySelector('.btn-submit');
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> Sending...';
        }
        
        // Send request to Formspree
        fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
            method: 'POST',
            body: JSON.stringify({ name, email, message, _subject: `Contact from Portfolio: ${name}` }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                showFormSuccess('Thank you! Your message has been sent successfully.');
                contactForm.reset();
                setTimeout(closeModal, 2500);
            } else {
                return response.json().then(data => {
                    if (FORMSPREE_FORM_ID === 'YOUR_FORMSPREE_FORM_ID') {
                        throw new Error('Formspree Form ID is not configured. Please edit script.js and configure your FORMSPREE_FORM_ID.');
                    } else {
                        throw new Error(data.error || 'Server returned an error.');
                    }
                });
            }
        })
        .catch(error => {
            showFormError(error.message || 'Submission failed. Please check your network connection and try again.');
        })
        .finally(() => {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Send Message';
            }
        });
    });
}

// Show success message
function showFormSuccess(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'form-success active';
    successDiv.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <span>${message}</span>
    `;
    contactForm.insertBefore(successDiv, contactForm.firstChild);
}

// Show error message
function showFormError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'form-error active';
    errorDiv.textContent = message;
    contactForm.insertBefore(errorDiv, contactForm.firstChild);
    errorDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Social Icons Hover Effect Enhancement
const socialIcons = document.querySelectorAll('.social-icon, .icon-circle');
socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px) scale(1.1)';
    });
    
    icon.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Ensure mailto links reliably open the user's mail client (fallback)
document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    const handler = (e) => {
        if (e && typeof e.preventDefault === 'function') e.preventDefault();
        if (e && typeof e.stopImmediatePropagation === 'function') e.stopImmediatePropagation();
        const href = link.getAttribute('href');
        if (!href) return;
        // Try several ways to open the mail client to maximize compatibility
        try {
            // 1) Try standard navigation
            window.location.href = href;
        } catch (err1) {
            try {
                // 2) Try window.open (may be blocked by popup blockers if not user-initiated)
                window.open(href, '_self');
            } catch (err2) {
                try {
                    // 3) Try opening in a new tab/window
                    window.open(href, '_blank');
                } catch (err3) {
                    try {
                        // 4) Fallback: create a temporary iframe
                        const iframe = document.createElement('iframe');
                        iframe.style.display = 'none';
                        iframe.src = href;
                        document.body.appendChild(iframe);
                        setTimeout(() => { iframe.remove(); }, 1500);
                    } catch (err4) {
                        console.warn('All mailto open attempts failed', err1, err2, err3, err4);
                    }
                }
            }
        }
    };

    link.addEventListener('click', handler, true); // use capture to run before other listeners
    link.addEventListener('auxclick', handler, true);
    link.addEventListener('keydown', (e) => { if (e.key === 'Enter') handler(e); });
});

// Simple toast + copy fallback for mail links
function _showSimpleToast(text, ttl = 5000) {
    const existing = document.querySelector('.simple-mailto-toast');
    if (existing) existing.remove();
    const t = document.createElement('div');
    t.className = 'simple-mailto-toast';
    t.style.position = 'fixed';
    t.style.right = '20px';
    t.style.bottom = '20px';
    t.style.zIndex = '20000';
    t.style.background = 'rgba(15,23,42,0.95)';
    t.style.color = '#fff';
    t.style.padding = '10px 14px';
    t.style.borderRadius = '10px';
    t.style.boxShadow = '0 8px 24px rgba(2,6,23,0.4)';
    t.style.display = 'flex';
    t.style.gap = '10px';
    t.style.alignItems = 'center';
    const span = document.createElement('span');
    span.innerText = text;
    t.appendChild(span);
    const btn = document.createElement('button');
    btn.innerText = 'Copy';
    btn.style.background = 'transparent';
    btn.style.color = '#60A5FA';
    btn.style.border = '1px solid rgba(96,165,250,0.18)';
    btn.style.padding = '6px 8px';
    btn.style.borderRadius = '8px';
    btn.style.cursor = 'pointer';
    t.appendChild(btn);
    btn.addEventListener('click', () => {
        const email = text.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
        if (email) {
            const e = email[0];
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(e);
            } else {
                const ta = document.createElement('textarea'); ta.value = e; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove();
            }
            span.innerText = 'Copied to clipboard';
            setTimeout(() => t.remove(), 1200);
        }
    });
    document.body.appendChild(t);
    setTimeout(() => { if (t.parentNode) t.remove(); }, ttl);
}

// Attach bubble-phase click handler to show fallback when mailto doesn't open
document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', (e) => {
        // Wait briefly; if nothing else happens, show copy fallback
        setTimeout(() => {
            _showSimpleToast(link.getAttribute('href') || 'vbuvanraj@gmail.com', 7000);
        }, 900);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
    }
});

// Initialize animations on page load
window.addEventListener('load', () => {
    // Initialize AOS.js
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            mirror: false,
            offset: 100
        });
    }

    // Trigger initial animations
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // Animate hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'fadeInUp 0.8s ease';
    }
});

// Add CSS animation keyframes via JavaScript
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .main-nav a.active {
        color: var(--blue-medium);
    }
    
    .main-nav a.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// Smooth page transitions
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.3s ease';

window.addEventListener('load', () => {
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 50);
});

// ============================================
// FLOWING BACKGROUND ANIMATION
// ============================================

const canvas = document.getElementById('flowingBackground');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let animationId;
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Particle system
    class Particle {
        constructor() {
            this.reset();
            this.y = Math.random() * canvas.height;
        }
        
        reset() {
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
            
            // Wrap around edges
            if (this.x > canvas.width + 50) this.x = -50;
            if (this.x < -50) this.x = canvas.width + 50;
            if (this.y > canvas.height + 50) this.y = -50;
            if (this.y < -50) this.y = canvas.height + 50;
        }
        
        draw() {
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
    
    // Create particles
    const particles = [];
    const particleCount = 80;
    
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    // Gradient waves
    class Wave {
        constructor() {
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
        
        draw() {
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
    
    // Create waves
    const waves = [];
    for (let i = 0; i < 3; i++) {
        waves.push(new Wave());
    }
    
    // Mouse interaction
    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;
    
    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw gradient background
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        const isDarkMode = document.body.classList.contains('dark-mode');
        if (isDarkMode) {
            gradient.addColorStop(0, 'rgba(15, 23, 42, 0.95)'); // slate-900
            gradient.addColorStop(0.5, 'rgba(30, 41, 59, 0.9)'); // slate-800
            gradient.addColorStop(1, 'rgba(15, 23, 42, 0.95)');
        } else {
            gradient.addColorStop(0, 'rgba(248, 250, 252, 0.8)');
            gradient.addColorStop(0.5, 'rgba(224, 242, 254, 0.6)');
            gradient.addColorStop(1, 'rgba(248, 250, 252, 0.8)');
        }
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw waves
        waves.forEach(wave => {
            wave.update();
            wave.draw();
        });
        
        // Update and draw particles with mouse influence
        particles.forEach((particle, index) => {
            // Mouse attraction
            const dx = mouseX - particle.x;
            const dy = mouseY - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const maxDistance = 200;
            
            if (distance < maxDistance) {
                const force = (maxDistance - distance) / maxDistance;
                particle.speedX += (dx / distance) * force * 0.01;
                particle.speedY += (dy / distance) * force * 0.01;
            }
            
            // Damping
            particle.speedX *= 0.98;
            particle.speedY *= 0.98;
            
            particle.update();
            particle.draw();
        });
        
        // Draw connecting lines between nearby particles
        ctx.strokeStyle = isDarkMode ? 'rgba(96, 165, 250, 0.08)' : 'rgba(59, 130, 246, 0.1)';
        ctx.lineWidth = 1;
        
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 120) {
                    ctx.globalAlpha = (120 - distance) / 120 * 0.3;
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
    
    // Start animation
    animate();
    
    // Pause animation when tab is not visible
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            cancelAnimationFrame(animationId);
        } else {
            animate();
        }
    });
}

// Console message
console.log('%c👋 Welcome to Buvanraj V\'s Portfolio!', 'color: #3B82F6; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with Buvan using HTML, CSS & JavaScript', 'color: #6B7280; font-size: 14px;');

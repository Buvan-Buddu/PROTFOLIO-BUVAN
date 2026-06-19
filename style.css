
   .skills-toggle {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-bottom: 3rem;
    flex-wrap: wrap;
}

.toggle-btn {
    padding: 10px 24px;
    border-radius: 25px;
    border: 2px solid #4F46E5;
    background: transparent;
    color: var(--blue-dark);
    cursor: pointer;
    font-weight: 600;
    font-size: 0.95rem;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.toggle-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #4F46E5;
    z-index: -1;
    transition: width 0.3s ease;
}

.toggle-btn:hover {
    color: #fff;
}

.toggle-btn:hover::before {
    width: 100%;
}

.toggle-btn.active {
    background: #4F46E5;
    color: #fff;
    box-shadow: 0 8px 20px rgba(79, 70, 229, 0.3);
}

.skills-container {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 3rem;
}

.skills-category {
    opacity: 1;
    animation: slideInUp 0.5s ease-out;
    background: rgba(79, 70, 229, 0.04);
    padding: 2rem;
    border-radius: 16px;
    border: 1px solid rgba(79, 70, 229, 0.15);
    transition: all 0.3s ease;
}

.skills-category:hover {
    background: rgba(79, 70, 229, 0.08);
    border-color: rgba(79, 70, 229, 0.25);
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(79, 70, 229, 0.15);
}

.category-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--blue-dark);
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.skills-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
}

.skill-tag {
    display: inline-block;
    background: linear-gradient(135deg, rgba(79, 70, 229, 0.12), rgba(99, 102, 241, 0.08));
    color: var(--blue-dark);
    padding: 0.6rem 1rem;
    border-radius: 22px;
    font-size: 0.9rem;
    font-weight: 500;
    border: 1px solid rgba(79, 70, 229, 0.25);
    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
    cursor: default;
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(79, 70, 229, 0.1);
}

.skill-tag:hover {
    background: linear-gradient(135deg, rgba(79, 70, 229, 0.2), rgba(99, 102, 241, 0.15));
    border-color: rgba(79, 70, 229, 0.4);
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(79, 70, 229, 0.2);
}

@keyframes slideInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.tech-icons {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    font-size: 1.1rem;
    opacity: 0.9;
}

.hidden {
    display: none;
}

   .tech-icons {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    gap: 20px;
    font-size: 14px;
    flex-wrap: wrap;
}

.backend-icons {
    display: none;
}

:root {
    --blue-dark: #1E40AF;
    --blue-medium: #3B82F6;
    --blue-light: #60A5FA;
    --blue-soft: #E0F2FE;
    --white: #FFFFFF;
    --gray-light: #F8FAFC;
    --gray-medium: #E5E7EB;
    --text-dark: #1F2937;
    --text-gray: #6B7280;
    --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);
    --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.12);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: var(--gray-light);
    color: var(--text-dark);
    line-height: 1.6;
    overflow-x: hidden;
    position: relative;
}

/* Flowing Background */
#flowingBackground {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    pointer-events: none;
    opacity: 0.6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

/* ============================================
   HEADER
   ============================================ */

.site-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(15px);
    padding: 1.2rem 2rem;
    z-index: 1000;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transform: perspective(1000px) translateZ(0);
    transition: box-shadow 0.3s ease;
}

.header-inner {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.brand {
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--blue-medium);
    text-decoration: none;
    letter-spacing: -0.5px;
    transform: perspective(1000px) translateZ(0);
    transition: transform 0.3s ease;
}

.brand-avatar {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 10px;
    vertical-align: middle;
    box-shadow: 0 6px 18px rgba(2,6,23,0.12);
}

.brand:hover {
    transform: perspective(1000px) translateZ(20px) scale(1.05);
}

.main-nav {
    display: flex;
    gap: 2rem;
    align-items: center;
}

.main-nav a {
    color: var(--text-dark);
    text-decoration: none;
    font-weight: 500;
    font-size: 1.05rem;
    transition: all 0.3s ease;
    position: relative;
    transform: perspective(1000px) translateZ(0);
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
}

.main-nav a .nav-icon {
    flex-shrink: 0;
    color: var(--blue-medium);
    opacity: 0.85;
    transition: all 0.3s ease;
}

.main-nav a:hover .nav-icon {
    opacity: 1;
    transform: scale(1.15);
}

.main-nav a:hover {
    color: var(--blue-medium);
    transform: perspective(1000px) translateZ(10px) scale(1.1);
}

.main-nav a::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--blue-medium);
    transition: width 0.3s ease;
}

.main-nav a:hover::after {
    width: 100%;
}

.hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 8rem 2rem 4rem;
    position: relative;
    background: linear-gradient(135deg, #F8FAFC 0%, #E0F2FE 100%);
    z-index: 1;
}

.hero-content {
    max-width: 800px;
    margin-bottom: 4rem;
}

.greeting {
    font-size: 1.4rem;
    color: var(--text-gray);
    margin-bottom: 0.5rem;
    font-weight: 400;
    transform: perspective(1000px) translateZ(0);
}

.name {
    font-size: 5rem;
    font-weight: 800;
    color: var(--blue-medium);
    margin-bottom: 0.5rem;
    letter-spacing: -1px;
    line-height: 1.1;
    transform: perspective(1000px) translateZ(0);
    text-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
    transition: transform 0.3s ease;
}

.name:hover {
    transform: perspective(1000px) translateZ(30px) scale(1.02);
}

.role {
    font-size: 2.2rem;
    color: var(--text-dark);
    font-weight: 600;
    margin-bottom: 1.5rem;
    transform: perspective(1000px) translateZ(0);
}

.bio {
    font-size: 1.15rem;
    color: var(--text-gray);
    max-width: 700px;
    margin: 0 auto 2.5rem;
    line-height: 1.8;
}

.hero-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}

.btn-primary {
    background: var(--blue-medium);
    color: var(--white);
    padding: 1rem 2.5rem;
    border-radius: 12px;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
    display: inline-block;
    transform: perspective(1000px) translateZ(0);
    position: relative;
    overflow: hidden;
}

.btn-primary::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: left 0.5s ease;
}

.btn-primary:hover::before {
    left: 100%;
}

.btn-primary:hover {
    background: var(--blue-dark);
    transform: perspective(1000px) translateZ(20px) translateY(-4px);
    box-shadow: 0 12px 30px rgba(59, 130, 246, 0.5);
}

/* About illustration and profile image */
.about-illustration {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
}
.illustration-card {
    width: 280px;
    max-width: 100%;
}
.illustration-placeholder {
    width: 100%;
    height: 360px;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(2,6,23,0.08);
    background: #ffffff;
    display: block;
}
.profile-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 35%;
    display: block;
}

@media (max-width: 768px) {
    .illustration-placeholder { height: 280px; }
    .name { font-size: 3rem; }
}

.btn-outline {
    background: var(--white);
    color: var(--blue-medium);
    padding: 1rem 2.5rem;
    border: 2px solid var(--blue-medium);
    border-radius: 12px;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    display: inline-block;
    transform: perspective(1000px) translateZ(0);
    box-shadow: 0 4px 15px rgba(38, 90, 143, 0.2);
}

.btn-outline:hover {
    background: var(--blue-medium);
    color: var(--white);
    transform: perspective(1000px) translateZ(20px) translateY(-4px);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
}

.footer-icons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 3rem;
}

.icon-circle {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--blue-medium);
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
    transition: all 0.3s ease;
    cursor: pointer;
    text-decoration: none;
    transform: perspective(1000px) translateZ(0);
}

.icon-circle:hover {
    transform: perspective(1000px) translateZ(30px) translateY(-8px) scale(1.1);
    box-shadow: 0 12px 30px rgba(59, 130, 246, 0.5);
    background: var(--blue-soft);
}

.scroll-down {
    margin-top: 2rem;
    color: var(--text-gray);
    font-size: 0.9rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    animation: bounce 2s infinite;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-10px);
    }
    60% {
        transform: translateY(-5px);
    }
}


.section {
    padding: 6rem 0;
    position: relative;
    z-index: 1;
}

.section-title {
    text-align: center;
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    letter-spacing: -0.5px;
    transform: perspective(1000px) translateZ(0);
    transition: transform 0.3s ease;
    text-shadow: 0 4px 20px rgba(59, 130, 246, 0.2);
}

.section-title:hover {
    transform: perspective(1000px) translateZ(20px) scale(1.02);
}

.title-part-1 {
    color: var(--blue-dark);
}

.title-part-2 {
    color: var(--blue-medium);
}

.section-subtitle {
    text-align: center;
    color: var(--text-gray);
    font-size: 1.15rem;
    margin-bottom: 3rem;
}



.about-section {
    background: var(--white);
}

.about-content {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 4rem;
    align-items: center;
    margin-top: 3rem;
}

.about-illustration {
    display: flex;
    justify-content: center;
    align-items: center;
}

.illustration-card {
    width: 100%;
    max-width: 400px;
    aspect-ratio: 1;
    background: linear-gradient(135deg, #E0F2FE 0%, #BAE6FD 100%);
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 20px 60px rgba(59, 130, 246, 0.3);
    position: relative;
    overflow: hidden;
    transform: perspective(1000px) rotateY(-5deg) rotateX(5deg);
    transition: transform 0.5s ease;
}

.illustration-card:hover {
    transform: perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(30px) scale(1.05);
    box-shadow: 0 30px 80px rgba(59, 130, 246, 0.4);
}

.illustration-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(14,165,233,0.1) 100%);
    pointer-events: none;
}

.illustration-placeholder {
    position: relative;
    z-index: 1;
}

.about-text {
    padding: 1rem;
}

.about-heading {
    font-size: 2.2rem;
    font-weight: 700;
    color: var(--blue-dark);
    margin-bottom: 1.5rem;
    transform: perspective(1000px) translateZ(0);
}

.about-paragraph {
    color: var(--text-gray);
    font-size: 1.1rem;
    line-height: 1.9;
    margin-bottom: 1.2rem;
}
.skills-section {
    background: var(--gray-light);
}

.skills-attributes {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    margin-bottom: 4rem;
}

.attribute-card {
    background: var(--white);
    padding: 2rem 1.5rem;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    transition: all 0.4s ease;
    transform: perspective(1000px) translateZ(0);
    position: relative;
    overflow: hidden;
}

.attribute-card::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.4s ease;
}

.attribute-card:hover::before {
    opacity: 1;
}

.attribute-card:hover {
    transform: perspective(1000px) translateZ(40px) translateY(-12px) rotateX(5deg);
    box-shadow: 0 20px 50px rgba(59, 130, 246, 0.3);
}

.attribute-icon {
    width: 70px;
    height: 70px;
    background: var(--blue-soft);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
    color: var(--blue-medium);
    transform: perspective(1000px) translateZ(0);
    transition: transform 0.4s ease;
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.2);
}

.attribute-card:hover .attribute-icon {
    transform: perspective(1000px) translateZ(20px) rotateY(360deg) scale(1.1);
}

.attribute-card h4 {
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--blue-dark);
    margin-bottom: 0.5rem;
    position: relative;
    z-index: 1;
}

.attribute-card p {
    font-size: 1rem;
    color: var(--blue-medium);
    position: relative;
    z-index: 1;
}

.skills-toggle {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 3rem;
}

.toggle-btn {
    padding: 0.75rem 2rem;
    border: 2px solid var(--gray-medium);
    background: var(--white);
    color: var(--text-dark);
    border-radius: 8px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

.toggle-btn.active {
    background: linear-gradient(135deg, var(--blue-medium) 0%, var(--blue-light) 100%);
    color: var(--white);
    border-color: var(--blue-medium);
}

.toggle-btn:hover:not(.active) {
    border-color: var(--blue-medium);
    color: var(--blue-medium);
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin-bottom: 3rem;
}

.skill-card {
    background: var(--white);
    padding: 2rem;
    border-radius: 16px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    transition: all 0.4s ease;
    transform: perspective(1000px) translateZ(0);
    position: relative;
    overflow: hidden;
}

.skill-card::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
}

.skill-card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 16px;
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
}

.skill-card:hover::after {
    opacity: 1;
}

.skill-card:hover {
    transform: perspective(1000px) translateZ(30px) translateY(-8px) rotateY(5deg);
}

.skill-title-wrapper {
    display: flex;
    align-items: center;
    gap: 0.8rem;
}

.skill-icon {
    font-size: 1.8rem;
    display: inline-block;
    transition: all 0.4s ease;
}

.skill-card:hover .skill-icon {
    transform: scale(1.2) rotate(10deg);
}

.skill-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
}

.skill-header h3 {
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--text-dark);
}

.skill-percent {
    font-size: 1.15rem;
    font-weight: 600;
    min-width: 50px;
    text-align: right;
}


.html-skill {
    border-top: 4px solid #E34C26;
    background: linear-gradient(135deg, #fff 0%, rgba(227, 76, 38, 0.03) 100%);
}

.html-skill::before {
    background: radial-gradient(circle, rgba(227, 76, 38, 0.15) 0%, transparent 70%);
}

.html-skill:hover::before {
    opacity: 1;
}

.html-skill .skill-header h3 {
    color: #E34C26;
    font-family: 'Courier New', monospace;
    font-weight: 800;
    letter-spacing: 0.5px;
}

.html-skill .skill-percent {
    color: #E34C26;
    font-family: 'Courier New', monospace;
}

.html-skill .progress div {
    background: linear-gradient(90deg, #E34C26 0%, #FF6B4A 100%);
    box-shadow: 0 4px 12px rgba(227, 76, 38, 0.4);
}

.html-skill:hover {
    box-shadow: 0 15px 40px rgba(227, 76, 38, 0.25);
}

.css-skill {
    border-top: 4px solid #563D7C;
    background: linear-gradient(135deg, #fff 0%, rgba(86, 61, 124, 0.03) 100%);
}

.css-skill::before {
    background: radial-gradient(circle, rgba(86, 61, 124, 0.15) 0%, transparent 70%);
}

.css-skill:hover::before {
    opacity: 1;
}

.css-skill .skill-header h3 {
    color: #563D7C;
    font-family: 'Georgia', serif;
    font-weight: 700;
    font-style: italic;
    letter-spacing: 1px;
}

.css-skill .skill-percent {
    color: #563D7C;
    font-family: 'Georgia', serif;
}

.css-skill .progress div {
    background: linear-gradient(90deg, #563D7C 0%, #A371D7 100%);
    box-shadow: 0 4px 12px rgba(86, 61, 124, 0.4);
}

.css-skill:hover {
    box-shadow: 0 15px 40px rgba(86, 61, 124, 0.25);
}

.js-skill {
    border-top: 4px solid #F7DF1E;
    background: linear-gradient(135deg, #fff 0%, rgba(247, 223, 30, 0.05) 100%);
}

.js-skill::before {
    background: radial-gradient(circle, rgba(247, 223, 30, 0.2) 0%, transparent 70%);
}

.js-skill:hover::before {
    opacity: 1;
}

.js-skill .skill-header h3 {
    color: #F7DF1E;
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.2);
    font-family: 'Trebuchet MS', sans-serif;
    font-weight: 900;
    letter-spacing: 0.5px;
}

.js-skill .skill-percent {
    color: #F7DF1E;
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.1);
}

.js-skill .progress div {
    background: linear-gradient(90deg, #F7DF1E 0%, #FFC107 100%);
    box-shadow: 0 4px 12px rgba(247, 223, 30, 0.5);
}

.js-skill:hover {
    box-shadow: 0 15px 40px rgba(247, 223, 30, 0.3);
}


.react-skill {
    border-top: 4px solid #61DAFB;
    background: linear-gradient(135deg, #fff 0%, rgba(97, 218, 251, 0.05) 100%);
}

.react-skill::before {
    background: radial-gradient(circle, rgba(97, 218, 251, 0.15) 0%, transparent 70%);
}

.react-skill:hover::before {
    opacity: 1;
}

.react-skill .skill-header h3 {
    color: #61DAFB;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 700;
    letter-spacing: 0.3px;
}

.react-skill .skill-percent {
    color: #61DAFB;
}

.react-skill .progress div {
    background: linear-gradient(90deg, #61DAFB 0%, #00BCD4 100%);
    box-shadow: 0 4px 12px rgba(97, 218, 251, 0.5);
}

.react-skill .skill-icon {
    animation: spin 3s linear infinite;
}

.react-skill:hover .skill-icon {
    animation: spin 0.8s linear infinite;
}

.react-skill:hover {
    box-shadow: 0 15px 40px rgba(97, 218, 251, 0.3);
}

@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

@keyframes slideInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.tailwind-skill {
    border-top: 4px solid #06B6D4;
    background: linear-gradient(135deg, #fff 0%, rgba(6, 182, 212, 0.03) 100%);
}

.tailwind-skill::before {
    background: radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%);
}

.tailwind-skill:hover::before {
    opacity: 1;
}

.tailwind-skill .skill-header h3 {
    color: #06B6D4;
    font-family: 'Consolas', 'Monaco', monospace;
    font-weight: 700;
    letter-spacing: 0.2px;
}

.tailwind-skill .skill-percent {
    color: #06B6D4;
    font-family: 'Consolas', 'Monaco', monospace;
}

.tailwind-skill .progress div {
    background: linear-gradient(90deg, #06B6D4 0%, #14B8A6 100%);
    box-shadow: 0 4px 12px rgba(6, 182, 212, 0.5);
}

.tailwind-skill:hover {
    box-shadow: 0 15px 40px rgba(6, 182, 212, 0.3);
}


.nodejs-skill {
    border-top: 4px solid #68A063;
    background: linear-gradient(135deg, #fff 0%, rgba(104, 160, 99, 0.03) 100%);
}

.nodejs-skill::before {
    background: radial-gradient(circle, rgba(104, 160, 99, 0.15) 0%, transparent 70%);
}

.nodejs-skill:hover::before {
    opacity: 1;
}

.nodejs-skill .skill-header h3 {
    color: #68A063;
    font-family: 'Courier New', monospace;
    font-weight: 800;
    letter-spacing: 0.4px;
}

.nodejs-skill .skill-percent {
    color: #68A063;
    font-family: 'Courier New', monospace;
}

.nodejs-skill .progress div {
    background: linear-gradient(90deg, #68A063 0%, #7BC000 100%);
    box-shadow: 0 4px 12px rgba(104, 160, 99, 0.4);
}

.nodejs-skill:hover {
    box-shadow: 0 15px 40px rgba(104, 160, 99, 0.25);
}


.express-skill {
    border-top: 4px solid #000000;
    background: linear-gradient(135deg, #fff 0%, rgba(0, 0, 0, 0.02) 100%);
}

.express-skill::before {
    background: radial-gradient(circle, rgba(0, 0, 0, 0.1) 0%, transparent 70%);
}

.express-skill:hover::before {
    opacity: 1;
}

.express-skill .skill-header h3 {
    color: #000000;
    font-family: 'Courier New', monospace;
    font-weight: 900;
    letter-spacing: 0.3px;
}

.express-skill .skill-percent {
    color: #000000;
    font-family: 'Courier New', monospace;
}

.express-skill .progress div {
    background: linear-gradient(90deg, #000000 0%, #333333 100%);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.express-skill:hover {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}


.mongodb-skill {
    border-top: 4px solid #13AA52;
    background: linear-gradient(135deg, #fff 0%, rgba(19, 170, 82, 0.03) 100%);
}

.mongodb-skill::before {
    background: radial-gradient(circle, rgba(19, 170, 82, 0.15) 0%, transparent 70%);
}

.mongodb-skill:hover::before {
    opacity: 1;
}

.mongodb-skill .skill-header h3 {
    color: #13AA52;
    font-family: 'Trebuchet MS', sans-serif;
    font-weight: 700;
    letter-spacing: 0.5px;
}

.mongodb-skill .skill-percent {
    color: #13AA52;
    font-family: 'Trebuchet MS', sans-serif;
}

.mongodb-skill .progress div {
    background: linear-gradient(90deg, #13AA52 0%, #47C66D 100%);
    box-shadow: 0 4px 12px rgba(19, 170, 82, 0.4);
}

.mongodb-skill:hover {
    box-shadow: 0 15px 40px rgba(19, 170, 82, 0.25);
}


.restapi-skill {
    border-top: 4px solid #FF6C37;
    background: linear-gradient(135deg, #fff 0%, rgba(255, 108, 55, 0.03) 100%);
}

.restapi-skill::before {
    background: radial-gradient(circle, rgba(255, 108, 55, 0.15) 0%, transparent 70%);
}

.restapi-skill:hover::before {
    opacity: 1;
}

.restapi-skill .skill-header h3 {
    color: #FF6C37;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 700;
    letter-spacing: 0.4px;
}

.restapi-skill .skill-percent {
    color: #FF6C37;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.restapi-skill .progress div {
    background: linear-gradient(90deg, #FF6C37 0%, #FF9966 100%);
    box-shadow: 0 4px 12px rgba(255, 108, 55, 0.4);
}

.restapi-skill:hover {
    box-shadow: 0 15px 40px rgba(255, 108, 55, 0.25);
}


.jwt-skill {
    border-top: 4px solid #EB001B;
    background: linear-gradient(135deg, #fff 0%, rgba(235, 0, 27, 0.03) 100%);
}

.jwt-skill::before {
    background: radial-gradient(circle, rgba(235, 0, 27, 0.15) 0%, transparent 70%);
}

.jwt-skill:hover::before {
    opacity: 1;
}

.jwt-skill .skill-header h3 {
    color: #EB001B;
    font-family: 'Courier New', monospace;
    font-weight: 800;
    letter-spacing: 0.5px;
}

.jwt-skill .skill-percent {
    color: #EB001B;
    font-family: 'Courier New', monospace;
}

.jwt-skill .progress div {
    background: linear-gradient(90deg, #EB001B 0%, #FF6B6B 100%);
    box-shadow: 0 4px 12px rgba(235, 0, 27, 0.4);
}

.jwt-skill:hover {
    box-shadow: 0 15px 40px rgba(235, 0, 27, 0.25);
}

.progress-bar {
    height: 12px;
    background: var(--gray-medium);
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--blue-medium) 0%, var(--blue-light) 100%);
    border-radius: 12px;
    width: 0;
    transition: width 1.2s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    box-shadow: 0 2px 8px rgba(59, 130, 246, 0.4);
}

.progress-fill::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    animation: shimmer 2s infinite;
}

@keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

.tech-icons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
}

.tech-icon {
    width: 60px;
    height: 60px;
    border-radius: 16px;
    background: var(--blue-soft);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--blue-medium);
    transition: all 0.4s ease;
    transform: perspective(1000px) translateZ(0);
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.2);
}

.tech-icon:hover {
    transform: perspective(1000px) translateZ(30px) scale(1.15) rotateY(10deg);
    background: var(--blue-medium);
    color: var(--white);
    box-shadow: 0 12px 30px rgba(59, 130, 246, 0.4);
}



.experience-section {
    background: var(--white);
}

.experience-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    gap: 2.5rem;
    margin-top: 3rem;
}

.experience-card {
    background: var(--white);
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    transition: all 0.4s ease;
    transform: perspective(1000px) translateZ(0);
    position: relative;
    border: 1px solid rgba(59, 130, 246, 0.1);
}

.experience-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(79, 70, 229, 0.05) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
}

.experience-card:hover::before {
    opacity: 1;
}

.experience-card:hover {
    transform: perspective(1000px) translateZ(25px) translateY(-8px) rotateX(3deg);
    box-shadow: 0 20px 50px rgba(79, 70, 229, 0.25);
}

.experience-icon-area {
    background: linear-gradient(135deg, #4F46E5 0%, #6366F1 100%);
    padding: 2.5rem 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 180px;
}

.experience-icon {
    background: var(--white);
    border-radius: 16px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: perspective(1000px) translateZ(0);
    transition: transform 0.4s ease;
}

.experience-card:hover .experience-icon {
    transform: perspective(1000px) translateZ(15px) scale(1.08);
}

.experience-body {
    padding: 2rem;
    position: relative;
    z-index: 1;
}

.experience-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 0.5rem;
}

.experience-header h3 {
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--blue-dark);
    margin: 0;
}

.experience-date {
    background: rgba(79, 70, 229, 0.1);
    color: var(--blue-dark);
    padding: 0.4rem 0.8rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
    white-space: nowrap;
    flex-shrink: 0;
}

.company-name {
    color: var(--blue-medium);
    font-size: 1.05rem;
    font-weight: 600;
    margin: 0.5rem 0 1rem 0;
}

.experience-description {
    color: var(--text-gray);
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
}

.experience-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
}

.exp-tag {
    display: inline-block;
    background: rgba(79, 70, 229, 0.12);
    color: var(--blue-dark);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
    border: 1px solid rgba(79, 70, 229, 0.2);
    transition: all 0.3s ease;
}

.exp-tag:hover {
    background: rgba(79, 70, 229, 0.2);
    border-color: rgba(79, 70, 229, 0.4);
    transform: translateY(-2px);
}

.no-experience {
    color: var(--text-gray);
    font-size: 1.1rem;
}



.education-section {
    background: var(--gray-light);
}

.education-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    margin-top: 3rem;
}

.column-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
    color: var(--blue-medium);
}

.column-header svg {
    width: 28px;
    height: 28px;
}

.column-header h3 {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--blue-dark);
}

.education-card,
.certification-card,
.experience-card {
    background: var(--white);
    padding: 2rem;
    border-radius: 20px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    transition: all 0.4s ease;
    margin-bottom: 1.5rem;
    transform: perspective(1000px) translateZ(0);
    position: relative;
}

.education-card::before,
.certification-card::before,
.experience-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
}

.education-card:hover::before,
.certification-card:hover::before,
.experience-card:hover::before {
    opacity: 1;
}

.education-card:hover,
.certification-card:hover,
.experience-card:hover {
    transform: perspective(1000px) translateZ(35px) translateY(-8px) rotateX(3deg);
    box-shadow: 0 20px 50px rgba(59, 130, 246, 0.3);
}

.certification-card,
.experience-card {
    position: relative;
}

.card-icon {
    width: 60px;
    height: 60px;
    background: var(--blue-soft);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--blue-medium);
    flex-shrink: 0;
    transform: perspective(1000px) translateZ(0);
    transition: transform 0.4s ease;
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.2);
}

.education-card:hover .card-icon,
.certification-card:hover .card-icon,
.experience-card:hover .card-icon {
    transform: perspective(1000px) translateZ(25px) rotateZ(10deg) scale(1.1);
}

.card-content h4 {
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--blue-dark);
    margin-bottom: 0.5rem;
}

.institution,
.issuer {
    color: var(--blue-medium);
    font-size: 0.95rem;
    margin-bottom: 0.5rem;
}

.status {
    color: var(--text-gray);
    font-size: 0.9rem;
    margin-bottom: 0.75rem;
}

.description {
    color: var(--text-gray);
    font-size: 0.9rem;
    line-height: 1.6;
}

.certificate-details {
    margin-top: 0.75rem;
}

.certificate-details h5 {
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--blue-dark);
    margin-bottom: 0.35rem;
}

.certificate-details ul {
    margin: 0;
    padding-left: 1.2rem;
}

.certificate-details li {
    color: var(--text-gray);
    font-size: 0.9rem;
    line-height: 1.4;
}

.year {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    color: var(--blue-medium);
    font-weight: 600;
    font-size: 0.95rem;
}


.projects-section {
    background: var(--white);
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.project-card {
    background: var(--white);
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    transition: all 0.5s ease;
    transform: perspective(1000px) translateZ(0);
    position: relative;
}

.project-card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.5s ease;
    pointer-events: none;
    z-index: 1;
}

.project-card:hover::after {
    opacity: 1;
}

.project-card:hover {
    transform: perspective(1000px) translateZ(50px) translateY(-12px) rotateY(5deg);
    box-shadow: 0 25px 60px rgba(59, 130, 246, 0.35);
}

.project-icon-area {
    background: linear-gradient(135deg, #E0F2FE 0%, #BAE6FD 100%);
    padding: 3rem 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
}

.project-icon-area::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(14,165,233,0.1) 100%);
    pointer-events: none;
}

.project-icon {
    position: relative;
    z-index: 1;
}

.project-body {
    padding: 2rem;
}

.project-body h3 {
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--blue-dark);
    margin-bottom: 1rem;
    position: relative;
    z-index: 2;
}

.project-body p {
    color: var(--text-gray);
    font-size: 1.05rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    position: relative;
    z-index: 2;
}

.project-tags {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-bottom: 1.5rem;
}

.tag {
    position: relative;
    background: var(--blue-soft);

/* Date badge for project cards */
.project-badge {
    position: absolute;
    top: 12px;
    right: 12px;
    background: linear-gradient(90deg, rgba(59,130,246,0.12), rgba(99,102,241,0.12));
    color: var(--blue-dark);
    padding: 6px 10px;
    border-radius: 999px;
    font-weight: 600;
    font-size: 0.85rem;
    box-shadow: 0 6px 18px rgba(59,130,246,0.08);
    z-index: 5;
    display: inline-flex;
    align-items: center;
    gap: 8px;
}
    color: var(--blue-medium);
    padding: 0.4rem 1rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
}

.project-links {
    display: flex;
    gap: 1.5rem;
}

.project-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--blue-medium);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.95rem;
    transition: color 0.3s ease;
}

.project-link:hover {
    color: var(--blue-dark);
}

.project-link svg {
    width: 18px;
    height: 18px;
}



.others-section {
    background: linear-gradient(180deg, #f8fbff 0%, #eef5ff 100%);
}

.others-subtitle {
    text-align: center;
    color: var(--text-gray);
    margin-top: -1rem;
    margin-bottom: 2.25rem;
    font-size: 1.05rem;
}

.others-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.25rem;
}

.other-link-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: var(--text-dark);
    background: rgba(255, 255, 255, 0.92);
    border: 1px solid rgba(59, 130, 246, 0.18);
    border-radius: 18px;
    padding: 1.25rem 1.2rem;
    box-shadow: 0 8px 24px rgba(59, 130, 246, 0.12);
    transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease;
    text-align: center;
    gap: 0.65rem;
}

.other-link-card h3 {
    margin: 0 0 0.35rem;
    color: var(--blue-dark);
    font-size: 1.05rem;
    font-weight: 700;
}

.other-link-card p {
    margin: 0;
    color: var(--text-gray);
    font-size: 0.94rem;
}

.other-link-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 14px 32px rgba(59, 130, 246, 0.2);
    border-color: rgba(59, 130, 246, 0.45);
}

.other-link-icon {
    width: 56px;
    height: 56px;
    border-radius: 12px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, rgba(59,130,246,0.12), rgba(99,102,241,0.08));
    color: var(--blue-dark);
    box-shadow: 0 8px 18px rgba(59,130,246,0.08);
}

.other-link-icon svg {
    width: 28px;
    height: 28px;
}



.contact-section {
    background: var(--gray-light);
}

.contact-card {
    max-width: 700px;
    margin: 0 auto;
    background: var(--white);
    padding: 4rem;
    border-radius: 32px;
    box-shadow: 0 20px 60px rgba(59, 130, 246, 0.25);
    text-align: center;
    transform: perspective(1000px) translateZ(0);
    transition: transform 0.4s ease;
    position: relative;
    overflow: hidden;
}

.contact-card::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
    animation: rotate 20s linear infinite;
    pointer-events: none;
}

@keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.contact-card:hover {
    transform: perspective(1000px) translateZ(30px) scale(1.02);
}

.contact-location {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: var(--text-gray);
    font-size: 0.95rem;
    margin-bottom: 2rem;
}

.contact-location svg {
    color: var(--blue-medium);
}

.contact-heading {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--blue-dark);
    margin-bottom: 1rem;
    position: relative;
    z-index: 1;
}

.contact-text {
    color: var(--text-gray);
    font-size: 1.15rem;
    line-height: 1.8;
    margin-bottom: 2rem;
    position: relative;
    z-index: 1;
}

.contact-cta-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 2rem;
    position: relative;
    z-index: 1;
}

.btn-say-hello {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    background: var(--blue-medium);
    color: var(--white);
    padding: 1rem 2.5rem;
    border-radius: 12px;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    box-shadow: var(--shadow-md);
    border: none;
    cursor: pointer;
    font-family: inherit;
}

.btn-say-hello:hover {
    background: var(--blue-dark);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

.btn-book-call {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    background: var(--white);
    color: var(--blue-medium);
    padding: 1rem 2.5rem;
    border-radius: 12px;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    box-shadow: var(--shadow-md);
    border: 2px solid var(--blue-medium);
    cursor: pointer;
    font-family: inherit;
}

.btn-book-call:hover {
    background: var(--blue-medium);
    color: var(--white);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

.btn-book-call svg {
    flex-shrink: 0;
}

.contact-social {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
}

.social-icon {
    width: 60px;
    height: 60px;
    background: var(--gray-light);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-dark);
    text-decoration: none;
    transition: all 0.4s ease;
    transform: perspective(1000px) translateZ(0);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    pointer-events: auto;
}

.social-icon:hover {
    background: var(--blue-medium);
    color: var(--white);
    transform: perspective(1000px) translateZ(30px) translateY(-8px) rotateY(15deg);
    box-shadow: 0 12px 30px rgba(59, 130, 246, 0.4);
}

.btn-download-resume {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    background: var(--blue-soft);
    color: var(--blue-medium);
    padding: 1rem 2.5rem;
    border: 2px solid var(--gray-medium);
    border-radius: 16px;
    font-weight: 600;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.4s ease;
    transform: perspective(1000px) translateZ(0);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 1;
}

.btn-download-resume:hover {
    border-color: var(--blue-medium);
    background: var(--blue-soft);
    transform: perspective(1000px) translateZ(25px) translateY(-4px);
    box-shadow: 0 12px 30px rgba(59, 130, 246, 0.3);
}


.contact-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10000;
    display: none;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.contact-modal.active {
    display: flex;
    opacity: 1;
}

.modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(8px);
    z-index: 1;
}

.modal-content {
    position: relative;
    z-index: 2;
    background: var(--white);
    border-radius: 24px;
    max-width: 600px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    box-shadow: 0 25px 80px rgba(0, 0, 0, 0.3);
    transform: perspective(1000px) translateZ(0) scale(0.9);
    transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    padding: 0;
}

.contact-modal.active .modal-content {
    transform: perspective(1000px) translateZ(50px) scale(1);
}

.modal-close {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--gray-light);
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: var(--text-dark);
    transition: all 0.3s ease;
    z-index: 10;
    transform: perspective(1000px) translateZ(0);
}

.modal-close:hover {
    background: var(--blue-medium);
    color: var(--white);
    transform: perspective(1000px) translateZ(20px) rotate(90deg);
}

.modal-header {
    padding: 3rem 3rem 2rem;
    text-align: center;
    border-bottom: 1px solid var(--gray-medium);
    background: linear-gradient(135deg, var(--blue-soft) 0%, var(--white) 100%);
}

.modal-header h2 {
    font-size: 2rem;
    font-weight: 700;
    color: var(--blue-dark);
    margin-bottom: 0.5rem;
}

.modal-header p {
    color: var(--text-gray);
    font-size: 1rem;
}

.contact-form-modal {
    padding: 2.5rem 3rem 3rem;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    font-weight: 600;
    color: var(--text-dark);
    margin-bottom: 0.5rem;
    font-size: 1rem;
}

.required {
    color: #EF4444;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 0.875rem 1.25rem;
    border: 2px solid var(--gray-medium);
    border-radius: 12px;
    font-size: 1rem;
    font-family: inherit;
    transition: all 0.3s ease;
    background: var(--white);
    color: var(--text-dark);
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--blue-medium);
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
    transform: translateY(-2px);
}

.form-group textarea {
    resize: vertical;
    min-height: 120px;
}

.form-actions {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
    margin-top: 2rem;
}

.btn-cancel {
    padding: 0.875rem 2rem;
    border: 2px solid var(--gray-medium);
    background: var(--white);
    color: var(--text-dark);
    border-radius: 12px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    transform: perspective(1000px) translateZ(0);
    font-family: inherit;
}

.btn-cancel:hover {
    border-color: var(--text-gray);
    background: var(--gray-light);
    transform: perspective(1000px) translateZ(10px);
}

.btn-submit {
    padding: 0.875rem 2rem;
    background: var(--blue-medium);
    color: var(--white);
    border: none;
    border-radius: 12px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transform: perspective(1000px) translateZ(0);
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
    font-family: inherit;
}

.btn-submit:hover {
    background: var(--blue-dark);
    transform: perspective(1000px) translateZ(20px) translateY(-2px);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
}

.btn-submit:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
}


.form-success {
    padding: 1.5rem;
    background: #10B981;
    color: white;
    border-radius: 12px;
    margin-bottom: 1.5rem;
    display: none;
    align-items: center;
    gap: 0.75rem;
    font-weight: 500;
    animation: slideIn 0.3s ease;
}

.form-success.active {
    display: flex;
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.form-error {
    padding: 1rem;
    background: #FEE2E2;
    color: #DC2626;
    border-radius: 8px;
    margin-bottom: 1rem;
    display: none;
    font-size: 0.9rem;
    border-left: 4px solid #DC2626;
}

.form-error.active {
    display: block;
}

/* Scrollbar styling for modal */
.modal-content::-webkit-scrollbar {
    width: 8px;
}

.modal-content::-webkit-scrollbar-track {
    background: var(--gray-light);
    border-radius: 10px;
}

.modal-content::-webkit-scrollbar-thumb {
    background: var(--blue-medium);
    border-radius: 10px;
}

.modal-content::-webkit-scrollbar-thumb:hover {
    background: var(--blue-dark);
}


@media (max-width: 1024px) {
    .skills-attributes {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .skills-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .about-content {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
    
    .education-content {
        grid-template-columns: 1fr;
    }

    .others-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 768px) {
    .name {
        font-size: 3rem;
    }
    
    .role {
        font-size: 1.6rem;
    }
    
    .section-title {
        font-size: 2.2rem;
    }
    
    .skills-attributes {
        grid-template-columns: 1fr;
    }
    
    .skills-grid {
        grid-template-columns: 1fr;
    }
    
    .projects-grid {
        grid-template-columns: 1fr;
    }

    .others-grid {
        grid-template-columns: 1fr;
    }
    
    .main-nav {
        gap: 1rem;
        font-size: 0.85rem;
    }
    
    .contact-card {
        padding: 2rem 1.5rem;
    }
}

@media (max-width: 480px) {
    .header-inner {
        padding: 0;
    }
    
    .main-nav {
        display: none;
    }
    
    .hero {
        padding: 6rem 1rem 3rem;
    }
    
    .name {
        font-size: 2rem;
    }
    
    .bio {
        font-size: 0.9rem;
    }
    
    .hero-buttons {
        flex-direction: column;
        width: 100%;
    }
    
    .btn-primary,
    .btn-outline {
        width: 100%;
        text-align: center;
    }
    
    .container {
        padding: 0 1rem;
    }
    
   
    .contact-modal {
        padding: 1rem;
    }
    
    .modal-content {
        max-height: 95vh;
        border-radius: 20px;
    }
    
    .modal-header {
        padding: 2rem 1.5rem 1.5rem;
    }
    
    .modal-header h2 {
        font-size: 1.5rem;
    }
    
    .contact-form-modal {
        padding: 1.5rem;
    }
    
    .form-actions {
        flex-direction: column;
    }
    
    .btn-cancel,
    .btn-submit {
        width: 100%;
    }
    
    .modal-close {
        top: 1rem;
        right: 1rem;
        width: 35px;
        height: 35px;
    }

    .contact-cta-buttons {
        flex-direction: column;
        width: 100%;
    }

    .btn-say-hello,
    .btn-book-call {
        width: 100%;
        justify-content: center;
    }
}



.other-activities-section {
    background: var(--gray-light);
    padding: 6rem 0 4rem;
}

.activities-category {
    margin-bottom: 5rem;
}

.category-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 3rem;
    padding-bottom: 1rem;
    border-bottom: 3px solid var(--blue-medium);
}

.category-header svg {
    color: var(--blue-medium);
}

.category-header h3 {
    font-size: 2rem;
    font-weight: 700;
    color: var(--text-dark);
    margin: 0;
}

/* BADGES GRID */
.badges-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.badge-card {
    background: var(--white);
    border-radius: 20px;
    padding: 2rem;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    transition: all 0.4s ease;
    transform: perspective(1000px) translateZ(0);
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.badge-card::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.4s ease;
}

.badge-card:hover::before {
    opacity: 1;
}

.badge-card:hover {
    transform: perspective(1000px) translateZ(20px) translateY(-10px);
    box-shadow: 0 15px 40px rgba(59, 130, 246, 0.25);
}

.badge-icon {
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
}

.badge-ribbon {
    animation: float 3s ease-in-out infinite;
}

@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

.badge-content {
    text-align: center;
}

.badge-content h4 {
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--text-dark);
    margin-bottom: 0.5rem;
}

.badge-issuer {
    color: var(--blue-medium);
    font-weight: 600;
    margin-bottom: 0.3rem;
}

.badge-date {
    color: var(--text-gray);
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
}

.view-certificate-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: linear-gradient(135deg, var(--blue-medium) 0%, var(--blue-light) 100%);
    color: var(--white);
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.view-certificate-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
}


.certificates-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
}

.certificate-card {
    background: var(--white);
    border-radius: 20px;
    padding: 2rem;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    transition: all 0.4s ease;
    transform: perspective(1000px) translateZ(0);
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.certificate-card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
}

.certificate-card:hover::after {
    opacity: 1;
}

.certificate-card:hover {
    transform: perspective(1000px) translateZ(20px) translateY(-10px) rotateY(3deg);
    box-shadow: 0 15px 40px rgba(59, 130, 246, 0.3);
}

.certificate-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1.5rem;
}

.certificate-seal {
    margin-bottom: 1rem;
    animation: rotate-pulse 4s ease-in-out infinite;
}

@keyframes rotate-pulse {
    0%, 100% { transform: rotate(0deg) scale(1); }
    50% { transform: rotate(5deg) scale(1.05); }
}

.certificate-header h4 {
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--text-dark);
    text-align: center;
    margin: 0;
}

.certificate-body {
    margin-bottom: 1.5rem;
}

.certificate-issuer,
.certificate-date {
    color: var(--text-gray);
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
}

.certificate-skills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
}

.skill-tag {
    background: var(--blue-soft);
    color: var(--blue-dark);
    padding: 0.4rem 0.8rem;
    border-radius: 6px;
    font-size: 0.85rem;
    font-weight: 600;
}

.certificate-footer {
    text-align: center;
    padding-top: 1rem;
    border-top: 1px solid var(--gray-medium);
}

.view-indicator {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--blue-medium);
    font-weight: 600;
    font-size: 0.9rem;
}



.fun-activities-section {
    background: var(--gray-light);
    padding: 6rem 0 4rem;
}

.fun-category {
    margin-bottom: 5rem;
}

/* INSTAGRAM SECTION */
.instagram-connect {
    background: var(--white);
    border-radius: 20px;
    padding: 3rem;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.instagram-profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3rem;
    text-align: center;
}

.profile-avatar {
    margin-bottom: 1.5rem;
}

.avatar-ring {
    padding: 5px;
    background: linear-gradient(45deg, #f9ce34, #ee2a7b, #6228d7);
    border-radius: 50%;
    animation: rotate 3s linear infinite;
}

@keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.avatar-image {
    background: var(--white);
    border-radius: 50%;
    padding: 5px;
}

.profile-info h4 {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--text-dark);
    margin-bottom: 0.5rem;
}

.profile-info p {
    color: var(--text-gray);
    margin-bottom: 1.5rem;
}

.instagram-follow-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    background: linear-gradient(45deg, #f9ce34, #ee2a7b, #6228d7);
    color: var(--white);
    padding: 1rem 2rem;
    border-radius: 12px;
    font-weight: 700;
    font-size: 1.1rem;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 8px 20px rgba(238, 42, 123, 0.3);
}

.instagram-follow-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(238, 42, 123, 0.5);
    color: var(--white);
    text-decoration: none;
}


.instagram-feed {
    margin-top: 3rem;
}

.feed-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-dark);
    margin-bottom: 1.5rem;
    text-align: center;
}

.instagram-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
}

.instagram-post {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    aspect-ratio: 1/1;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.instagram-post:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.post-image {
    width: 100%;
    height: 100%;
}

.post-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.instagram-post:hover .post-overlay {
    opacity: 1;
}

.post-stats {
    color: var(--white);
    font-weight: 700;
    font-size: 1.1rem;
}


.hobbies-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.hobby-card {
    background: var(--white);
    border-radius: 20px;
    padding: 2rem;
    text-align: center;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    transition: all 0.4s ease;
    transform: perspective(1000px) translateZ(0);
}

.hobby-card:hover {
    transform: perspective(1000px) translateZ(20px) translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.hobby-icon {
    margin-bottom: 1.5rem;
}

.icon-circle {
    width: 80px;
    height: 80px;
    margin: 0 auto;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
}

.hobby-card:hover .icon-circle {
    transform: scale(1.1) rotate(10deg);
}

.hobby-card h4 {
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--text-dark);
    margin-bottom: 0.75rem;
}

.hobby-card p {
    color: var(--text-gray);
    line-height: 1.6;
}

.fun-facts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.fun-fact-card {
    background: var(--white);
    border-radius: 20px;
    padding: 2rem;
    text-align: center;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
    transition: all 0.4s ease;
}

.fun-fact-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--blue-soft) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.fun-fact-card:hover::before {
    opacity: 1;
}

.fun-fact-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(59, 130, 246, 0.2);
}

.fact-number {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2rem;
    font-weight: 900;
    color: var(--blue-light);
    opacity: 0.3;
}

.fact-emoji {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.fun-fact-card p {
    color: var(--text-dark);
    font-weight: 600;
    line-height: 1.6;
    position: relative;
    z-index: 1;
}


.site-footer {
    background: var(--text-dark);
    color: var(--white);
    padding: 2rem 0;
    text-align: center;
}

.site-footer .container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.footer-links {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
}

.footer-links a {
    color: var(--white);
    text-decoration: none;
    transition: color 0.3s ease;
}

.footer-links a:hover {
    color: var(--blue-light);
}


.main-nav a.active {
    color: var(--blue-medium);
    font-weight: 700;
}



.others-section {
    background: linear-gradient(135deg, rgba(30, 64, 175, 0.05) 0%, rgba(96, 165, 250, 0.05) 100%);
}

.badges-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    margin-bottom: 60px;
}

.badge-item {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(59, 130, 246, 0.2);
    border-radius: 16px;
    padding: 24px;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    gap: 12px;
    position: relative;
    overflow: hidden;
}

.badge-item::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200px;
    height: 200px;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, transparent 100%);
    border-radius: 50%;
    transition: all 0.3s ease;
}

.badge-item:hover {
    transform: translateY(-8px);
    border-color: rgba(59, 130, 246, 0.5);
    box-shadow: 0 12px 32px rgba(59, 130, 246, 0.15);
}

.badge-item:hover::before {
    top: -25%;
    right: -25%;
}

.badge-icon {
    font-size: 48px;
    display: inline-block;
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(96, 165, 250, 0.1) 100%);
    border-radius: 12px;
    position: relative;
    z-index: 1;
}

.badge-content {
    position: relative;
    z-index: 1;
}

.badge-content h4 {
    color: var(--text-dark);
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 4px;
}

.badge-issuer {
    color: var(--blue-medium);
    font-size: 0.85rem;
    font-weight: 600;
    margin-bottom: 8px;
}

.badge-description {
    color: var(--text-gray);
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 10px;
}

.badge-date {
    color: var(--text-gray);
    font-size: 0.8rem;
    font-weight: 500;
}


.other-certificates {
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(59, 130, 246, 0.2);
    border-radius: 16px;
    padding: 40px;
    margin-top: 40px;
}

.certificates-header {
    color: var(--text-dark);
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.certificates-header::before {
    content: '📜';
    font-size: 1.8rem;
}

.certificates-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

.certificate-list-item {
    display: flex;
    gap: 15px;
    padding: 16px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 12px;
    transition: all 0.3s ease;
    border-left: 4px solid transparent;
}

.certificate-list-item:hover {
    background: rgba(59, 130, 246, 0.08);
    border-left-color: var(--blue-medium);
    transform: translateX(4px);
}

.certificate-check {
    color: #10b981;
    font-size: 1.3rem;
    font-weight: bold;
    flex-shrink: 0;
    display: flex;
    align-items: flex-start;
    padding-top: 2px;
}

.certificate-info {
    flex: 1;
}

.certificate-info h5 {
    color: var(--text-dark);
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 4px;
}

.certificate-info p {
    color: var(--text-gray);
    font-size: 0.85rem;
    margin: 0;
}


@media (max-width: 768px) {
    .badges-grid,
    .certificates-grid,
    .hobbies-grid,
    .instagram-grid,
    .fun-facts-grid {
        grid-template-columns: 1fr;
    }

    .category-header h3 {
        font-size: 1.5rem;
    }

    .instagram-connect {
        padding: 2rem 1.5rem;
    }

    .other-certificates {
        padding: 24px;
    }

    .certificates-list {
        grid-template-columns: 1fr;
    }
}



body.dark-mode {
    --gray-light: #0f172a; /* slate-900 */
    --white: #1e293b; /* slate-800 */
    --gray-medium: #334155; /* slate-700 */
    --text-dark: #f8fafc; /* slate-50 */
    --text-gray: #94a3b8; /* slate-400 */
    --blue-soft: #1e3a8a; /* deep blue */
    --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.4);
    --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.5);
    --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.6);
}


body.dark-mode .site-header {
    background: rgba(30, 41, 59, 0.95);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

body.dark-mode .main-nav a {
    color: #f8fafc;
}

body.dark-mode .main-nav a:hover,
body.dark-mode .main-nav a.active {
    color: var(--blue-light);
}

body.dark-mode .main-nav a .nav-icon {
    color: var(--blue-light);
}

body.dark-mode .brand {
    color: var(--blue-light);
}

body.dark-mode .hero {
    background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%);
}

body.dark-mode .attribute-card,
body.dark-mode .skill-card,
body.dark-mode .experience-card,
body.dark-mode .education-card,
body.dark-mode .certification-card,
body.dark-mode .project-card,
body.dark-mode .other-link-card,
body.dark-mode .contact-card,
body.dark-mode .modal-content,
body.dark-mode .fun-fact-card,
body.dark-mode .badge-item,
body.dark-mode .certificate-list-item {
    background: #1e293b;
    border-color: rgba(255, 255, 255, 0.08);
}

body.dark-mode .toggle-btn {
    border-color: var(--blue-light);
    color: #f8fafc;
}

body.dark-mode .toggle-btn.active {
    background: var(--blue-medium);
}

body.dark-mode .skills-category {
    background: rgba(99, 102, 241, 0.06);
    border-color: rgba(99, 102, 241, 0.2);
}

body.dark-mode .skill-tag {
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(59, 130, 246, 0.1));
    border-color: rgba(99, 102, 241, 0.3);
    color: #f8fafc;
}

body.dark-mode .skill-tag:hover {
    border-color: var(--blue-light);
}

body.dark-mode .progress-bar {
    background: #334155;
}

body.dark-mode .social-icon {
    background: #334155;
    color: #f8fafc;
}

body.dark-mode .social-icon:hover {
    background: var(--blue-medium);
}

body.dark-mode .btn-outline {
    background: #1e293b;
    color: var(--blue-light);
    border-color: var(--blue-light);
}

body.dark-mode .btn-outline:hover {
    background: var(--blue-medium);
    color: #ffffff;
}

body.dark-mode .form-group label {
    color: #f8fafc;
}

body.dark-mode .form-group input,
body.dark-mode .form-group textarea {
    background: #334155;
    border-color: rgba(255, 255, 255, 0.15);
    color: #ffffff;
}

body.dark-mode .form-group input::placeholder,
body.dark-mode .form-group textarea::placeholder {
    color: #94a3b8;
}

body.dark-mode .modal-close {
    color: #ffffff;
}

body.dark-mode .btn-cancel {
    background: #334155;
    color: #ffffff;
}

body.dark-mode .btn-download-resume {
    background: #1e3a8a;
    border-color: rgba(255, 255, 255, 0.1);
    color: var(--blue-light);
}

body.dark-mode .btn-download-resume:hover {
    background: var(--blue-medium);
    color: #ffffff;
}

body.dark-mode .btn-book-call {
    background: #1e293b;
    color: var(--blue-light);
    border-color: var(--blue-light);
}

body.dark-mode .btn-book-call:hover {
    background: var(--blue-medium);
    color: #ffffff;
}

body.dark-mode .illustration-card {
    background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%);
    box-shadow: 0 20px 60px rgba(15, 23, 42, 0.8);
}

.theme-toggle-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    border-radius: 50%;
    color: var(--text-dark);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    margin-left: 15px;
    outline: none;
    vertical-align: middle;
}

.theme-toggle-btn:hover {
    background: var(--blue-soft);
    color: var(--blue-medium);
    transform: rotate(15deg) scale(1.1);
}

body.dark-mode .theme-toggle-btn {
    color: #fbbf24; /* moon icon glowing color */
}

body.dark-mode .theme-toggle-btn:hover {
    background: rgba(251, 191, 36, 0.15);
}

.project-preview-container {
    width: 100%;
    height: 190px;
    border-radius: 12px;
    overflow: hidden;
    margin: 15px 0 20px 0;
    box-shadow: var(--shadow-sm);
    border: 1px solid rgba(59, 130, 246, 0.15);
    background: #f1f5f9;
    position: relative;
}

.project-preview-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
}

.project-card:hover .project-preview-image {
    transform: scale(1.06);
}


.experience-logo-img {
    max-width: 100%;
    max-height: 120px;
    object-fit: contain;
    border-radius: 8px;
}

@media (max-width: 480px) {
    .container {
        padding: 0 1.25rem;
    }

    .section {
        padding: 4rem 0;
    }

    .section-title {
        font-size: 2.2rem;
    }

    .skills-container {
        grid-template-columns: 1fr;
        gap: 1.5rem;
        margin-top: 1.5rem;
    }

    .skills-category {
        padding: 1.5rem 1.2rem;
    }

    .skills-attributes {
        grid-template-columns: 1fr;
        gap: 1rem;
    }

    .projects-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    .project-card {
        border-radius: 16px;
    }

    .project-body {
        padding: 1.5rem 1.2rem;
    }

    .project-preview-container {
        height: 160px;
        margin: 10px 0 15px 0;
    }

    .education-content {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .education-card, 
    .certification-card {
        padding: 1.5rem 1.2rem;
        flex-direction: column;
        gap: 1rem;
    }

    .education-card .year, 
    .certification-card .year {
        position: static;
        margin-top: 0.5rem;
        display: inline-block;
    }

    .others-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
    }

    .contact-card {
        padding: 2.5rem 1.2rem;
    }

    .contact-heading {
        font-size: 1.8rem;
    }

    .modal-content {
        width: 95%;
        padding: 1.5rem;
    }

    .site-header {
        padding: 0.8rem 1rem;
        position: static; /* Let it flow on tiny screens to avoid layout overlap */
    }

    .header-inner {
        flex-direction: column;
        gap: 0.8rem;
        text-align: center;
    }

    .main-nav {
        gap: 0.6rem 0.8rem;
        flex-wrap: wrap;
        justify-content: center;
    }

    .main-nav a {
        font-size: 0.9rem;
    }
    
    .theme-toggle-btn {
        margin-left: 5px;
    }

    .hero {
        padding-top: 2rem;
    }
}

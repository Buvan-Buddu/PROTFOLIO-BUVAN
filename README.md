Buvanraj V — Personal Portfolio Website

A modern, responsive personal portfolio website showcasing my background, skills, work experience, and projects as a Full Stack Developer and AI/ML enthusiast. Built with HTML, CSS, and JavaScript, featuring smooth animations, a light/dark theme toggle, and an interactive contact form.

Live Demo: https://buvan-buddu.github.io/PROTOFILO-BUVAN/

Overview

This repository contains the source code for my personal portfolio site. It presents a single-page, section-based layout covering my profile, technical skills, professional experience, education, certifications, and featured projects, along with a way for visitors to get in touch directly from the page.

Features


Hero section with an introduction, role summary, and quick links to projects and contact.
About Me section with a profile photo and personal/academic background.
Skills showcase organized into categorized tag groups: Frontend Development, Backend Development, AI & Machine Learning, and Tools & Platforms.
Experience timeline highlighting internships and professional work, with role descriptions and associated technologies.
Education & Certifications section listing academic history alongside completed certifications (Infosys Springboard, Oracle, NPTEL, etc.).
Featured Projects displayed as cards with previews, tech tags, and links to live demos and source code.
Social & profile links section ("Others") linking out to GitHub, LinkedIn, Email, LeetCode, X/Twitter, and Unstop.
Contact form modal that submits messages via the Formspree API, with client-side validation and inline success/error feedback.
Resume download button for direct access to a PDF resume.
Light/dark theme toggle, with the selected theme persisted in localStorage and an initial preference inferred from the visitor's system settings.
Scroll-based UI behavior: animated section reveals (AOS library), active navigation link highlighting, and a dynamic header shadow on scroll.
3D tilt hover effects on project, skill, education, and experience cards for added interactivity.
Animated canvas background rendered behind the hero section.


Tech Stack

CategoryTechnologyStructureHTML5StylingCSS3, Bootstrap 4.6.2ScriptingVanilla JavaScript, jQueryAnimationAOS (Animate on Scroll)TypographyGoogle Fonts (Inter)Contact FormFormspreeHostingVercel

Project Structure

PROTOFILO-1/
├── index.html             # Main page markup and section content
├── style.css               # Site-wide styling, theming, and layout
├── script.js                # Interactivity: theme toggle, animations, contact form, navigation
├── BUVAN-PROFILE.jpeg        # Open Graph / social preview image
├── BUVAN.jpeg                 # About Me section profile photo
├── icons-portfolio.png         # Header/brand avatar icon
├── IS-26.png                    # Infosys experience logo
├── BUVANRAJ-FINAL-26.pdf          # Downloadable resume
└── .github/workflows/              # CI/deployment configuration

Getting Started

Prerequisites


Any modern web browser
(Optional) A local static server for the smoothest development experience


Installation



Open index.html directly in your browser, or serve the folder locally:



# Or using the VS Code "Live Server" extension

Configuring the Contact Form

The contact form submits to Formspree. To enable it, open script.js and replace the placeholder form ID with your own Formspree endpoint:

jsconst FORMSPREE_FORM_ID = 'YOUR_FORMSPREE_FORM_ID'; // Replace with your actual Formspree form ID

Without a valid ID, form submissions will fail with a configuration error message.

Customization

To adapt this portfolio for your own use:


Update personal details, bio, and section copy directly in index.html.
Replace BUVAN.jpeg, BUVAN-PROFILE.jpeg, and icons-portfolio.png with your own images.
Edit the skills, experience, education, and project cards to reflect your own background.
Swap in your own resume PDF and update the corresponding download link.
Update social and profile links in the "Others" and "Contact" sections.


Deployment

The site is deployed on Vercel at protofilo-1.vercel.app. As a static site with no build step, it can also be deployed to any static hosting provider (GitHub Pages, Netlify, etc.) by uploading the repository contents directly.

License

No license file is currently included in this repository. If you plan to share this project publicly or accept contributions, consider adding an open-source license (e.g. MIT) to clarify usage rights.

Author

Buvanraj V


GitHub: @Buvan-Buddu
LinkedIn: buvanraj-v-
Email: vbuvanraj@gmail.com

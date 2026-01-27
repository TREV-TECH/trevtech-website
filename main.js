// main.js - Website functionality and animations

// ============================================
// ORIGINAL FUNCTIONALITY (PRESERVED)
// ============================================

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: "smooth",
            });
        }
    });
});

// Sticky header
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.backgroundColor = "rgba(255, 255, 255, 0.98)";
        header.style.boxShadow = "0 2px 15px rgba(0, 0, 0, 0.1)";
    } else {
        header.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
        header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    }
});

// Portfolio filter functionality
const filterButtons = document.querySelectorAll(".portfolio-filter-btn");

filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        this.classList.add("active");
    });
});

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
        mobileMenuBtn.classList.toggle("active");
        navLinks.classList.toggle("active");
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        if (mobileMenuBtn) mobileMenuBtn.classList.remove("active");
        if (navLinks) navLinks.classList.remove("active");
    });
});

// Newsletter functionality
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('newsletterForm');
    const emailInput = document.getElementById('emailInput');
    const submitBtn = document.getElementById('submitBtn');
    const messageDiv = document.getElementById('newsletterMessage');

    if (!form || !emailInput || !submitBtn || !messageDiv) return;

    function showMessage(text, type) {
        messageDiv.textContent = text;
        messageDiv.className = `newsletter-message ${type} show`;

        setTimeout(() => {
            messageDiv.classList.remove('show');
        }, 5000);
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function setLoading(loading) {
        submitBtn.disabled = loading;
        if (loading) {
            submitBtn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-dasharray="31.416" stroke-dashoffset="31.416">
                        <animate attributeName="stroke-dasharray" dur="2s" values="0 31.416;15.708 15.708;0 31.416" repeatCount="indefinite"/>
                        <animate attributeName="stroke-dashoffset" dur="2s" values="0;-15.708;-31.416" repeatCount="indefinite"/>
                    </circle>
                </svg>
            `;
        } else {
            submitBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20" fill="white">
                    <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/>
                </svg>
            `;
        }
    }

    emailInput.addEventListener('input', function () {
        emailInput.classList.remove('error');
        messageDiv.classList.remove('show');
    });

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        const email = emailInput.value.trim();

        if (!email) {
            emailInput.classList.add('error');
            showMessage('Please enter your email address.', 'error');
            emailInput.focus();
            return;
        }

        if (!isValidEmail(email)) {
            emailInput.classList.add('error');
            showMessage('Please enter a valid email address.', 'error');
            emailInput.focus();
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('http://192.168.100.4:8089/newsletter/api/newsletter/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(email)
            });

            if (!response.ok) {
                throw new Error('Subscription failed');
            }

            const result = await response.text();
            showMessage(`🎉 ${result}`, 'success');
            emailInput.value = '';
            emailInput.classList.remove('error');

        } catch (error) {
            showMessage('Something went wrong. Please try again.', 'error');
        } finally {
            setLoading(false);
        }
    });

    const socialLinks = document.querySelectorAll('.footer-social a');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-3px) scale(1.1)';
        });

        link.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// ============================================
// GSAP ANIMATIONS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Check if GSAP is loaded
    if (typeof gsap === 'undefined') return;
    
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // ========== HERO LANDING SECTION ==========
    const heroTl = gsap.timeline();
    
    heroTl
        .from(".cosmic-brand-matrix", {
            duration: 1.2,
            y: 100,
            opacity: 0,
            ease: "power4.out"
        })
        .from(".neural-tagline-stream", {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: "power3.out"
        }, "-=0.7")
        .from(".plasma-action-pod", {
            duration: 0.8,
            scale: 0.5,
            opacity: 0,
            ease: "back.out(1.7)"
        }, "-=0.5");

    // Animate quantum pixels
    gsap.from(".quantum-pixel", {
        duration: 1.5,
        scale: 0,
        opacity: 0,
        stagger: {
            each: 0.08,
            from: "random"
        },
        ease: "elastic.out(1, 0.5)"
    });

    // Orbital animation
    gsap.from(".orbital-hypnosis-core", {
        duration: 2,
        scale: 0,
        rotation: -180,
        opacity: 0,
        ease: "power3.out"
    });

    // ========== HEADER ==========
    gsap.from("header", {
        duration: 1,
        y: -100,
        opacity: 0,
        ease: "power3.out",
        delay: 0.3
    });

    gsap.from(".nav-links li", {
        duration: 0.5,
        y: -30,
        opacity: 0,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.6
    });

    // ========== HERO SECTION (below landing) ==========
    gsap.from(".hero-content h1", {
        scrollTrigger: {
            trigger: ".hero",
            start: "top 80%"
        },
        duration: 1,
        x: -100,
        opacity: 0,
        ease: "power3.out"
    });

    gsap.from(".hero-content p", {
        scrollTrigger: {
            trigger: ".hero",
            start: "top 80%"
        },
        duration: 1,
        x: -80,
        opacity: 0,
        ease: "power3.out",
        delay: 0.2
    });

    gsap.from(".hero-buttons .btn", {
        scrollTrigger: {
            trigger: ".hero",
            start: "top 80%"
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: "back.out(1.7)",
        delay: 0.4
    });

    // ========== ABOUT SECTION ==========
    gsap.from(".about-image", {
        scrollTrigger: {
            trigger: ".about",
            start: "top 70%"
        },
        duration: 1.2,
        x: -150,
        opacity: 0,
        ease: "power3.out"
    });

    gsap.from(".about-text h2", {
        scrollTrigger: {
            trigger: ".about-text",
            start: "top 80%"
        },
        duration: 1,
        y: 60,
        opacity: 0,
        ease: "power3.out"
    });

    gsap.from(".about-text p", {
        scrollTrigger: {
            trigger: ".about-text",
            start: "top 80%"
        },
        duration: 0.8,
        y: 40,
        opacity: 0,
        stagger: 0.15,
        ease: "power2.out"
    });

    // Stats with counter animation
    gsap.from(".stat-item", {
        scrollTrigger: {
            trigger: ".stats",
            start: "top 85%"
        },
        duration: 0.8,
        y: 60,
        opacity: 0,
        stagger: 0.15,
        ease: "back.out(1.4)"
    });

    // ========== SERVICES SECTION ==========
    gsap.fromTo(".services h2", 
        { y: 50, opacity: 0 },
        {
            scrollTrigger: {
                trigger: ".services",
                start: "top 85%"
            },
            duration: 1,
            y: 0,
            opacity: 1,
            ease: "power3.out"
        }
    );

    gsap.fromTo(".service-card", 
        { y: 80, opacity: 0 },
        {
            scrollTrigger: {
                trigger: ".services-grid",
                start: "top 85%"
            },
            duration: 0.8,
            y: 0,
            opacity: 1,
            stagger: 0.12,
            ease: "power3.out"
        }
    );

    // Service card hover
    document.querySelectorAll(".service-card").forEach((card) => {
        card.addEventListener("mouseenter", () => {
            gsap.to(card, {
                duration: 0.3,
                y: -15,
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                ease: "power2.out"
            });
            gsap.to(card.querySelector(".service-icon"), {
                duration: 0.4,
                scale: 1.2,
                rotation: 10,
                ease: "back.out(1.7)"
            });
        });
        card.addEventListener("mouseleave", () => {
            gsap.to(card, {
                duration: 0.3,
                y: 0,
                scale: 1,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
                ease: "power2.out"
            });
            gsap.to(card.querySelector(".service-icon"), {
                duration: 0.4,
                scale: 1,
                rotation: 0,
                ease: "power2.out"
            });
        });
    });

    // ========== TESTIMONIALS SECTION ==========
    gsap.from(".testimonials h2", {
        scrollTrigger: {
            trigger: ".testimonials",
            start: "top 80%"
        },
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out"
    });

    gsap.from(".testimonial-card", {
        scrollTrigger: {
            trigger: ".testimonials-grid",
            start: "top 80%"
        },
        duration: 1,
        y: 80,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.out"
    });

    // Testimonial hover
    document.querySelectorAll(".testimonial-card").forEach((card) => {
        card.addEventListener("mouseenter", () => {
            gsap.to(card, {
                duration: 0.4,
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)",
                ease: "power2.out"
            });
        });
        card.addEventListener("mouseleave", () => {
            gsap.to(card, {
                duration: 0.4,
                y: 0,
                scale: 1,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
                ease: "power2.out"
            });
        });
    });

    // ========== PARTNERS SECTION ==========
    gsap.fromTo(".partner-logo", 
        { y: 40, opacity: 0, scale: 0.8 },
        {
            scrollTrigger: {
                trigger: ".partners-logo-grid",
                start: "top 85%"
            },
            duration: 0.6,
            y: 0,
            opacity: 1,
            scale: 1,
            stagger: 0.1,
            ease: "back.out(1.4)"
        }
    );

    // Partner hover
    document.querySelectorAll(".partner-logo").forEach((logo) => {
        logo.addEventListener("mouseenter", () => {
            gsap.to(logo, {
                duration: 0.3,
                y: -10,
                scale: 1.1,
                ease: "power2.out"
            });
        });
        logo.addEventListener("mouseleave", () => {
            gsap.to(logo, {
                duration: 0.3,
                y: 0,
                scale: 1,
                ease: "power2.out"
            });
        });
    });

    // ========== FOOTER ==========
    gsap.fromTo(".footer-content > div", 
        { y: 50, opacity: 0 },
        {
            scrollTrigger: {
                trigger: "footer",
                start: "top 90%"
            },
            duration: 0.8,
            y: 0,
            opacity: 1,
            stagger: 0.15,
            ease: "power3.out"
        }
    );

    gsap.fromTo(".footer-social a", 
        { scale: 0, opacity: 0 },
        {
            scrollTrigger: {
                trigger: ".footer-social",
                start: "top 95%"
            },
            duration: 0.5,
            scale: 1,
            opacity: 1,
            stagger: 0.1,
            ease: "back.out(1.7)"
        }
    );

    // ========== PORTFOLIO PAGE ==========
    gsap.fromTo(".portfolio-item", 
        { y: 80, opacity: 0 },
        {
            scrollTrigger: {
                trigger: ".portfolio-grid",
                start: "top 85%"
            },
            duration: 0.8,
            y: 0,
            opacity: 1,
            stagger: 0.15,
            ease: "power3.out"
        }
    );

    // Portfolio item hover
    document.querySelectorAll(".portfolio-item").forEach((item) => {
        item.addEventListener("mouseenter", () => {
            gsap.to(item, {
                duration: 0.3,
                scale: 1.03,
                ease: "power2.out"
            });
        });
        item.addEventListener("mouseleave", () => {
            gsap.to(item, {
                duration: 0.3,
                scale: 1,
                ease: "power2.out"
            });
        });
    });

    // ========== CONTACT PAGE ==========
    gsap.fromTo(".contact-info", 
        { x: -80, opacity: 0 },
        {
            scrollTrigger: {
                trigger: ".contact-content",
                start: "top 80%"
            },
            duration: 1,
            x: 0,
            opacity: 1,
            ease: "power3.out"
        }
    );

    gsap.fromTo(".contact-form", 
        { x: 80, opacity: 0 },
        {
            scrollTrigger: {
                trigger: ".contact-content",
                start: "top 80%"
            },
            duration: 1,
            x: 0,
            opacity: 1,
            ease: "power3.out",
            delay: 0.2
        }
    );

    gsap.fromTo(".contact-info-item", 
        { x: -30, opacity: 0 },
        {
            scrollTrigger: {
                trigger: ".contact-info",
                start: "top 80%"
            },
            duration: 0.6,
            x: 0,
            opacity: 1,
            stagger: 0.1,
            ease: "power2.out"
        }
    );

    gsap.fromTo(".form-group", 
        { y: 30, opacity: 0 },
        {
            scrollTrigger: {
                trigger: ".contact-form",
                start: "top 80%"
            },
            duration: 0.5,
            y: 0,
            opacity: 1,
            stagger: 0.1,
            ease: "power2.out"
        }
    );

    // ========== GENERAL PAGE ANIMATIONS ==========
    // Header animation for all pages
    gsap.from("header", {
        duration: 0.8,
        y: -80,
        opacity: 0,
        ease: "power3.out"
    });

    gsap.from(".nav-links li", {
        duration: 0.5,
        y: -20,
        opacity: 0,
        stagger: 0.08,
        ease: "power2.out",
        delay: 0.3
    });

    // Section headings animation
    gsap.utils.toArray("section h2").forEach((heading) => {
        gsap.fromTo(heading, 
            { y: 40, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: heading,
                    start: "top 85%"
                },
                duration: 0.8,
                y: 0,
                opacity: 1,
                ease: "power3.out"
            }
        );
    });

    // Section paragraphs animation
    gsap.utils.toArray("section > .container > p").forEach((para) => {
        gsap.fromTo(para, 
            { y: 30, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: para,
                    start: "top 85%"
                },
                duration: 0.8,
                y: 0,
                opacity: 1,
                ease: "power3.out"
            }
        );
    });

    // ========== NEW SECTIONS ANIMATIONS ==========
    
    // Why Choose Us - Feature items
    gsap.fromTo(".feature-item", 
        { y: 60, opacity: 0 },
        {
            scrollTrigger: {
                trigger: ".features-grid",
                start: "top 85%"
            },
            duration: 0.8,
            y: 0,
            opacity: 1,
            stagger: 0.15,
            ease: "power3.out"
        }
    );

    // Process steps
    gsap.fromTo(".process-step", 
        { y: 50, opacity: 0 },
        {
            scrollTrigger: {
                trigger: ".process-steps",
                start: "top 85%"
            },
            duration: 0.8,
            y: 0,
            opacity: 1,
            stagger: 0.2,
            ease: "power3.out"
        }
    );

    // CTA section
    gsap.fromTo(".cta-content", 
        { y: 50, opacity: 0 },
        {
            scrollTrigger: {
                trigger: ".cta-section",
                start: "top 80%"
            },
            duration: 1,
            y: 0,
            opacity: 1,
            ease: "power3.out"
        }
    );

    // Mission Vision cards
    gsap.fromTo(".mv-card", 
        { y: 60, opacity: 0 },
        {
            scrollTrigger: {
                trigger: ".mv-grid",
                start: "top 85%"
            },
            duration: 0.8,
            y: 0,
            opacity: 1,
            stagger: 0.15,
            ease: "power3.out"
        }
    );

    // Value items
    gsap.fromTo(".value-item", 
        { x: -50, opacity: 0 },
        {
            scrollTrigger: {
                trigger: ".values-grid",
                start: "top 85%"
            },
            duration: 0.8,
            x: 0,
            opacity: 1,
            stagger: 0.15,
            ease: "power3.out"
        }
    );

    // Feature item hover
    document.querySelectorAll(".feature-item").forEach((item) => {
        item.addEventListener("mouseenter", () => {
            gsap.to(item, {
                duration: 0.3,
                y: -10,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                ease: "power2.out"
            });
        });
        item.addEventListener("mouseleave", () => {
            gsap.to(item, {
                duration: 0.3,
                y: 0,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
                ease: "power2.out"
            });
        });
    });

    // ========== PAGE HERO ANIMATION ==========
    gsap.from(".page-hero h1", {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out"
    });

    gsap.from(".page-hero p", {
        duration: 1,
        y: 30,
        opacity: 0,
        ease: "power3.out",
        delay: 0.2
    });

    // ========== AGILE SECTION ==========
    gsap.fromTo(".agile-step", 
        { y: 60, opacity: 0 },
        {
            scrollTrigger: {
                trigger: ".agile-process",
                start: "top 85%"
            },
            duration: 0.8,
            y: 0,
            opacity: 1,
            stagger: 0.12,
            ease: "power3.out"
        }
    );

    gsap.fromTo(".agile-benefit", 
        { y: 40, opacity: 0 },
        {
            scrollTrigger: {
                trigger: ".agile-benefits",
                start: "top 85%"
            },
            duration: 0.6,
            y: 0,
            opacity: 1,
            stagger: 0.1,
            ease: "power2.out"
        }
    );

    // ========== TECH STACK ==========
    gsap.fromTo(".tech-category", 
        { y: 50, opacity: 0 },
        {
            scrollTrigger: {
                trigger: ".tech-categories",
                start: "top 85%"
            },
            duration: 0.8,
            y: 0,
            opacity: 1,
            stagger: 0.15,
            ease: "power3.out"
        }
    );

    // ========== CASE STUDY ==========
    gsap.fromTo(".case-study-challenge, .case-study-solution, .case-study-results", 
        { y: 60, opacity: 0 },
        {
            scrollTrigger: {
                trigger: ".case-study-content",
                start: "top 85%"
            },
            duration: 0.8,
            y: 0,
            opacity: 1,
            stagger: 0.2,
            ease: "power3.out"
        }
    );

    // ========== INDUSTRIES ==========
    gsap.fromTo(".industry-item", 
        { scale: 0.8, opacity: 0 },
        {
            scrollTrigger: {
                trigger: ".industries-grid",
                start: "top 85%"
            },
            duration: 0.6,
            scale: 1,
            opacity: 1,
            stagger: 0.1,
            ease: "back.out(1.4)"
        }
    );

    // ========== FAQ ==========
    gsap.fromTo(".faq-item", 
        { y: 40, opacity: 0 },
        {
            scrollTrigger: {
                trigger: ".faq-grid",
                start: "top 85%"
            },
            duration: 0.6,
            y: 0,
            opacity: 1,
            stagger: 0.1,
            ease: "power2.out"
        }
    );

    // ========== BUTTON HOVER EFFECTS ==========
    document.querySelectorAll(".btn, .plasma-action-pod").forEach((btn) => {
        btn.addEventListener("mouseenter", () => {
            gsap.to(btn, {
                duration: 0.3,
                scale: 1.05,
                ease: "power2.out"
            });
        });
        btn.addEventListener("mouseleave", () => {
            gsap.to(btn, {
                duration: 0.3,
                scale: 1,
                ease: "power2.out"
            });
        });
    });

    // ========== PARALLAX EFFECT ==========
    gsap.to(".orbital-hypnosis-core", {
        scrollTrigger: {
            trigger: ".quantum-nexus-zone",
            start: "top top",
            end: "bottom top",
            scrub: 1
        },
        y: 200,
        ease: "none"
    });
});

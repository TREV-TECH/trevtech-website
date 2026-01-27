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
// GSAP ANIMATIONS (SUBTLE ENHANCEMENTS)
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Check if GSAP is loaded
    if (typeof gsap === 'undefined') return;
    
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Hero section entrance
    gsap.from(".cosmic-brand-matrix", {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out"
    });

    gsap.from(".neural-tagline-stream", {
        duration: 1,
        y: 30,
        opacity: 0,
        ease: "power3.out",
        delay: 0.3
    });

    gsap.from(".plasma-action-pod", {
        duration: 0.8,
        scale: 0.9,
        opacity: 0,
        ease: "back.out(1.7)",
        delay: 0.5
    });

    // Scroll-triggered animations - simple fade up
    const animateOnScroll = (selector, stagger = 0.1) => {
        gsap.utils.toArray(selector).forEach((el) => {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none none"
                },
                duration: 0.6,
                y: 40,
                opacity: 0,
                ease: "power2.out"
            });
        });
    };

    // Apply subtle animations
    animateOnScroll(".service-card");
    animateOnScroll(".testimonial-card");
    animateOnScroll(".partner-logo");
    animateOnScroll(".stat-item");

    // Hover enhancements for cards
    document.querySelectorAll(".service-card").forEach((card) => {
        card.addEventListener("mouseenter", () => {
            gsap.to(card, { duration: 0.3, y: -8, ease: "power2.out" });
        });
        card.addEventListener("mouseleave", () => {
            gsap.to(card, { duration: 0.3, y: 0, ease: "power2.out" });
        });
    });
});

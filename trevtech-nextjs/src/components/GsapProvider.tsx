'use client';

import { useEffect, useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';

// Use useLayoutEffect on client, useEffect on server
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function GsapProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useIsomorphicLayoutEffect(() => {
    // Dynamically import GSAP to avoid SSR issues
    const initGsap = async () => {
      const gsapModule = await import('gsap');
      const ScrollTriggerModule = await import('gsap/ScrollTrigger');
      
      const gsap = gsapModule.default;
      const ScrollTrigger = ScrollTriggerModule.ScrollTrigger;
      
      // Register plugin
      gsap.registerPlugin(ScrollTrigger);
      
      // Kill all existing ScrollTriggers first
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      
      // Wait for DOM to be fully ready
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          initAnimations(gsap, ScrollTrigger);
          ScrollTrigger.refresh();
        });
      });
    };

    initGsap();

    return () => {
      // Cleanup on unmount
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      });
    };
  }, [pathname]); // Re-run on route change

  return <>{children}</>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function initAnimations(gsap: any, ST: any) {
  // ========== HERO LANDING SECTION ==========
  const cosmicBrand = document.querySelector(".cosmic-brand-matrix");
  if (cosmicBrand) {
    const heroTl = gsap.timeline();
    
    heroTl
      .fromTo(".cosmic-brand-matrix", 
        { y: 100, opacity: 0 },
        { duration: 1.2, y: 0, opacity: 1, ease: "power4.out" }
      )
      .fromTo(".neural-tagline-stream",
        { y: 50, opacity: 0 },
        { duration: 1, y: 0, opacity: 1, ease: "power3.out" },
        "-=0.7"
      )
      .fromTo(".plasma-action-pod",
        { scale: 0.5, opacity: 0 },
        { duration: 0.8, scale: 1, opacity: 1, ease: "back.out(1.7)" },
        "-=0.5"
      );

    // Animate quantum pixels
    gsap.fromTo(".quantum-pixel",
      { scale: 0, opacity: 0 },
      {
        duration: 1.5,
        scale: 1,
        opacity: 1,
        stagger: { each: 0.08, from: "random" },
        ease: "elastic.out(1, 0.5)"
      }
    );

    // Orbital animation
    gsap.fromTo(".orbital-hypnosis-core",
      { scale: 0, rotation: -180, opacity: 0 },
      { duration: 2, scale: 1, rotation: 0, opacity: 1, ease: "power3.out" }
    );

    // Parallax effect
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
  }

  // ========== HEADER ==========
  gsap.fromTo("header",
    { y: -100, opacity: 0 },
    { duration: 1, y: 0, opacity: 1, ease: "power3.out", delay: 0.3 }
  );

  gsap.fromTo(".nav-links li",
    { y: -30, opacity: 0 },
    { duration: 0.5, y: 0, opacity: 1, stagger: 0.1, ease: "power2.out", delay: 0.6 }
  );

  // ========== HERO SECTION ==========
  const heroContent = document.querySelector(".hero-content");
  if (heroContent) {
    gsap.fromTo(".hero-content h1",
      { x: -100, opacity: 0 },
      {
        scrollTrigger: { trigger: ".hero", start: "top 80%" },
        duration: 1, x: 0, opacity: 1, ease: "power3.out"
      }
    );

    gsap.fromTo(".hero-content p",
      { x: -80, opacity: 0 },
      {
        scrollTrigger: { trigger: ".hero", start: "top 80%" },
        duration: 1, x: 0, opacity: 1, ease: "power3.out", delay: 0.2
      }
    );

    gsap.fromTo(".hero-buttons .btn",
      { y: 50, opacity: 0 },
      {
        scrollTrigger: { trigger: ".hero", start: "top 80%" },
        duration: 0.8, y: 0, opacity: 1, stagger: 0.2, ease: "back.out(1.7)", delay: 0.4
      }
    );
  }

  // ========== ABOUT SECTION ==========
  const aboutSection = document.querySelector(".about");
  if (aboutSection) {
    gsap.fromTo(".about-image",
      { x: -150, opacity: 0 },
      {
        scrollTrigger: { trigger: ".about", start: "top 70%" },
        duration: 1.2, x: 0, opacity: 1, ease: "power3.out"
      }
    );

    gsap.fromTo(".about-text h2",
      { y: 60, opacity: 0 },
      {
        scrollTrigger: { trigger: ".about-text", start: "top 80%" },
        duration: 1, y: 0, opacity: 1, ease: "power3.out"
      }
    );

    gsap.fromTo(".about-text p",
      { y: 40, opacity: 0 },
      {
        scrollTrigger: { trigger: ".about-text", start: "top 80%" },
        duration: 0.8, y: 0, opacity: 1, stagger: 0.15, ease: "power2.out"
      }
    );
  }

  // ========== STATS ==========
  const stats = document.querySelector(".stats");
  if (stats) {
    gsap.fromTo(".stat-item",
      { y: 60, opacity: 0 },
      {
        scrollTrigger: { trigger: ".stats", start: "top 85%" },
        duration: 0.8, y: 0, opacity: 1, stagger: 0.15, ease: "back.out(1.4)"
      }
    );
  }

  // ========== SERVICES ==========
  const servicesGrid = document.querySelector(".services-grid");
  if (servicesGrid) {
    gsap.fromTo(".service-card",
      { y: 80, opacity: 0 },
      {
        scrollTrigger: { trigger: ".services-grid", start: "top 85%" },
        duration: 0.8, y: 0, opacity: 1, stagger: 0.12, ease: "power3.out"
      }
    );
  }

  // ========== TESTIMONIALS ==========
  const testimonialsGrid = document.querySelector(".testimonials-grid");
  if (testimonialsGrid) {
    gsap.fromTo(".testimonial-card",
      { y: 80, opacity: 0 },
      {
        scrollTrigger: { trigger: ".testimonials-grid", start: "top 80%" },
        duration: 1, y: 0, opacity: 1, stagger: 0.2, ease: "power3.out"
      }
    );
  }

  // ========== FEATURES ==========
  const featuresGrid = document.querySelector(".features-grid");
  if (featuresGrid) {
    gsap.fromTo(".feature-item",
      { y: 60, opacity: 0 },
      {
        scrollTrigger: { trigger: ".features-grid", start: "top 85%" },
        duration: 0.8, y: 0, opacity: 1, stagger: 0.15, ease: "power3.out"
      }
    );
  }

  // ========== PROCESS STEPS ==========
  const processSteps = document.querySelector(".process-steps");
  if (processSteps) {
    gsap.fromTo(".process-step",
      { y: 50, opacity: 0 },
      {
        scrollTrigger: { trigger: ".process-steps", start: "top 85%" },
        duration: 0.8, y: 0, opacity: 1, stagger: 0.2, ease: "power3.out"
      }
    );
  }

  // ========== CTA ==========
  const ctaContent = document.querySelector(".cta-content");
  if (ctaContent) {
    gsap.fromTo(".cta-content",
      { y: 50, opacity: 0 },
      {
        scrollTrigger: { trigger: ".cta-section", start: "top 80%" },
        duration: 1, y: 0, opacity: 1, ease: "power3.out"
      }
    );
  }

  // ========== PARTNERS ==========
  const partnersGrid = document.querySelector(".partners-logo-grid");
  if (partnersGrid) {
    gsap.fromTo(".partner-logo",
      { y: 40, opacity: 0, scale: 0.8 },
      {
        scrollTrigger: { trigger: ".partners-logo-grid", start: "top 85%" },
        duration: 0.6, y: 0, opacity: 1, scale: 1, stagger: 0.1, ease: "back.out(1.4)"
      }
    );
  }

  // ========== FOOTER ==========
  const footerContent = document.querySelector(".footer-content");
  if (footerContent) {
    gsap.fromTo(".footer-content > div",
      { y: 50, opacity: 0 },
      {
        scrollTrigger: { trigger: "footer", start: "top 90%" },
        duration: 0.8, y: 0, opacity: 1, stagger: 0.15, ease: "power3.out"
      }
    );
  }

  // ========== PAGE HERO ==========
  const pageHero = document.querySelector(".page-hero");
  if (pageHero) {
    gsap.fromTo(".page-hero h1",
      { y: 50, opacity: 0 },
      { duration: 1, y: 0, opacity: 1, ease: "power3.out" }
    );

    gsap.fromTo(".page-hero p",
      { y: 30, opacity: 0 },
      { duration: 1, y: 0, opacity: 1, ease: "power3.out", delay: 0.2 }
    );
  }

  // ========== MISSION VISION ==========
  const mvGrid = document.querySelector(".mv-grid");
  if (mvGrid) {
    gsap.fromTo(".mv-card",
      { y: 60, opacity: 0 },
      {
        scrollTrigger: { trigger: ".mv-grid", start: "top 85%" },
        duration: 0.8, y: 0, opacity: 1, stagger: 0.15, ease: "power3.out"
      }
    );
  }

  // ========== VALUES ==========
  const valuesGrid = document.querySelector(".values-grid");
  if (valuesGrid) {
    gsap.fromTo(".value-item",
      { x: -50, opacity: 0 },
      {
        scrollTrigger: { trigger: ".values-grid", start: "top 85%" },
        duration: 0.8, x: 0, opacity: 1, stagger: 0.15, ease: "power3.out"
      }
    );
  }

  // ========== AGILE ==========
  const agileProcess = document.querySelector(".agile-process");
  if (agileProcess) {
    gsap.fromTo(".agile-step",
      { y: 60, opacity: 0 },
      {
        scrollTrigger: { trigger: ".agile-process", start: "top 85%" },
        duration: 0.8, y: 0, opacity: 1, stagger: 0.12, ease: "power3.out"
      }
    );
  }

  const agileBenefits = document.querySelector(".agile-benefits");
  if (agileBenefits) {
    gsap.fromTo(".agile-benefit",
      { y: 40, opacity: 0 },
      {
        scrollTrigger: { trigger: ".agile-benefits", start: "top 85%" },
        duration: 0.6, y: 0, opacity: 1, stagger: 0.1, ease: "power2.out"
      }
    );
  }

  // ========== TECH STACK ==========
  const techCategories = document.querySelector(".tech-categories");
  if (techCategories) {
    gsap.fromTo(".tech-category",
      { y: 50, opacity: 0 },
      {
        scrollTrigger: { trigger: ".tech-categories", start: "top 85%" },
        duration: 0.8, y: 0, opacity: 1, stagger: 0.15, ease: "power3.out"
      }
    );
  }

  // ========== PORTFOLIO ==========
  const portfolioGrid = document.querySelector(".portfolio-grid");
  if (portfolioGrid) {
    gsap.fromTo(".portfolio-item",
      { y: 80, opacity: 0 },
      {
        scrollTrigger: { trigger: ".portfolio-grid", start: "top 85%" },
        duration: 0.8, y: 0, opacity: 1, stagger: 0.15, ease: "power3.out"
      }
    );
  }

  // ========== CASE STUDY ==========
  const caseStudyContent = document.querySelector(".case-study-content");
  if (caseStudyContent) {
    gsap.fromTo(".case-study-content > div",
      { y: 60, opacity: 0 },
      {
        scrollTrigger: { trigger: ".case-study-content", start: "top 85%" },
        duration: 0.8, y: 0, opacity: 1, stagger: 0.2, ease: "power3.out"
      }
    );
  }

  // ========== INDUSTRIES ==========
  const industriesGrid = document.querySelector(".industries-grid");
  if (industriesGrid) {
    gsap.fromTo(".industry-item",
      { scale: 0.8, opacity: 0 },
      {
        scrollTrigger: { trigger: ".industries-grid", start: "top 85%" },
        duration: 0.6, scale: 1, opacity: 1, stagger: 0.1, ease: "back.out(1.4)"
      }
    );
  }

  // ========== CONTACT ==========
  const contactContent = document.querySelector(".contact-content");
  if (contactContent) {
    gsap.fromTo(".contact-info",
      { x: -80, opacity: 0 },
      {
        scrollTrigger: { trigger: ".contact-content", start: "top 80%" },
        duration: 1, x: 0, opacity: 1, ease: "power3.out"
      }
    );

    gsap.fromTo(".contact-form",
      { x: 80, opacity: 0 },
      {
        scrollTrigger: { trigger: ".contact-content", start: "top 80%" },
        duration: 1, x: 0, opacity: 1, ease: "power3.out", delay: 0.2
      }
    );
  }

  // ========== FAQ ==========
  const faqGrid = document.querySelector(".faq-grid");
  if (faqGrid) {
    gsap.fromTo(".faq-item",
      { y: 40, opacity: 0 },
      {
        scrollTrigger: { trigger: ".faq-grid", start: "top 85%" },
        duration: 0.6, y: 0, opacity: 1, stagger: 0.1, ease: "power2.out"
      }
    );
  }
  
  // Use ST to avoid unused variable warning
  void ST;
}

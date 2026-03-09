// GSAP Animation Utilities
// All animations respect prefers-reduced-motion

export const initScrollAnimations = () => {
  if (typeof window === 'undefined') return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    // If user prefers reduced motion, skip animations entirely
    return;
  }

  // Dynamically import GSAP only on client
  import('gsap').then(({ gsap }) => {
    import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger);

      // Set default values to prevent flashing
      gsap.set('.animate-section', { opacity: 1 });
      gsap.set('.animate-cards .card-item', { opacity: 1 });
      gsap.set('.animate-cards .testimonial-card', { opacity: 1 });
      gsap.set('.animate-cards .stat-item', { opacity: 1 });
      gsap.set('.hero-title', { opacity: 1 });
      gsap.set('.hero-button', { opacity: 1 });
      gsap.set('.faq-item', { opacity: 1 });
      gsap.set('.science-card', { opacity: 1 });

      // ========================================
      // Hero Section Animations
      // ========================================
      const heroTitle = document.querySelector('.hero-title');
      const heroSubtext = document.querySelector('.hero-subtext');
      const heroButtons = document.querySelectorAll('.hero-button');

      if (heroTitle) {
        gsap.fromTo(heroTitle,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: 'power3.out',
            delay: 0.2,
          }
        );
      }

      if (heroSubtext) {
        gsap.fromTo(heroSubtext,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            delay: 0.5,
          }
        );
      }

      if (heroButtons.length > 0) {
        gsap.fromTo(heroButtons,
          { opacity: 0, y: 20, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'back.out(1.5)',
            delay: 0.8,
          }
        );
      }

      // ========================================
      // Section Heading Animations
      // ========================================
      const sectionHeadings = document.querySelectorAll('.animate-section h2, .animate-section h3');
      sectionHeadings.forEach((heading) => {
        gsap.fromTo(heading,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: heading,
              start: 'top 85%',
              once: true,
            },
          }
        );
      });

      // Section descriptions
      const sectionDescriptions = document.querySelectorAll('.animate-section p:not(.card-item p):not(.testimonial-card p)');
      sectionDescriptions.forEach((desc) => {
        gsap.fromTo(desc,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: desc,
              start: 'top 85%',
              once: true,
            },
          }
        );
      });

      // ========================================
      // Card Animations (Staggered with Scale)
      // ========================================
      const cardGroups = document.querySelectorAll('.animate-cards');
      cardGroups.forEach((group) => {
        const cards = group.querySelectorAll('.card-item, .testimonial-card, .stat-item, .science-card');
        if (cards.length > 0) {
          gsap.fromTo(cards,
            { opacity: 0, y: 50, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.7,
              stagger: 0.15,
              ease: 'back.out(1.2)',
              scrollTrigger: {
                trigger: group,
                start: 'top 80%',
                once: true,
              },
            }
          );
        }
      });

      // ========================================
      // Product/Science Cards Special Animation
      // ========================================
      const scienceCards = document.querySelectorAll('.science-card');
      if (scienceCards.length > 0) {
        gsap.fromTo(scienceCards,
          { opacity: 0, y: 60, rotationY: -15 },
          {
            opacity: 1,
            y: 0,
            rotationY: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: scienceCards[0].closest('section'),
              start: 'top 75%',
              once: true,
            },
          }
        );
      }

      // ========================================
      // FAQ Items (Slide from Left)
      // ========================================
      const faqContainer = document.querySelector('#faq-container');
      const faqItems = document.querySelectorAll('.faq-item');
      if (faqContainer && faqItems.length > 0) {
        gsap.fromTo(faqItems,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: faqContainer,
              start: 'top 80%',
              once: true,
            },
          }
        );
      }

      // ========================================
      // CTA Buttons (Bottom of Sections)
      // ========================================
      const ctaSections = document.querySelectorAll('.animate-section');
      ctaSections.forEach((section) => {
        const ctaButtons = section.querySelectorAll('a[class*="bg-yellow"], a[class*="border-yellow"]');
        if (ctaButtons.length > 0) {
          gsap.fromTo(ctaButtons,
            { opacity: 0, y: 30, scale: 0.9 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              stagger: 0.12,
              ease: 'back.out(1.5)',
              scrollTrigger: {
                trigger: section,
                start: 'top 75%',
                once: true,
              },
            }
          );
        }
      });

      // ========================================
      // Image Animations (Fade + Slide)
      // ========================================
      const imageContainers = document.querySelectorAll('.animate-section img, .animate-section picture');
      imageContainers.forEach((img) => {
        gsap.fromTo(img,
          { opacity: 0, scale: 1.1 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: img,
              start: 'top 85%',
              once: true,
            },
          }
        );
      });

      // ========================================
      // Stats/Numbers Animation
      // ========================================
      const statsItems = document.querySelectorAll('.stat-item');
      if (statsItems.length > 0) {
        gsap.fromTo(statsItems,
          { opacity: 0, scale: 0.8, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'elastic.out(1, 0.5)',
            scrollTrigger: {
              trigger: statsItems[0].closest('section'),
              start: 'top 80%',
              once: true,
            },
          }
        );
      }

      // ========================================
      // Location/Map Section
      // ========================================
      const locationSection = document.querySelector('#location-section, [class*="location"]');
      if (locationSection) {
        const locationElements = locationSection.querySelectorAll('h2, h3, p, .map-container');
        gsap.fromTo(locationElements,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: locationSection,
              start: 'top 80%',
              once: true,
            },
          }
        );
      }

      // ========================================
      // General Section Fade-In
      // ========================================
      const sections = document.querySelectorAll('.animate-section');
      sections.forEach((section) => {
        // Only animate sections that don't have specific animations above
        const hasSpecificAnimation =
          section.querySelector('.card-item') ||
          section.querySelector('.science-card') ||
          section.querySelector('.faq-item') ||
          section.querySelector('.stat-item');

        if (!hasSpecificAnimation) {
          gsap.fromTo(section,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 85%',
                once: true,
              },
            }
          );
        }
      });
    });
  });
};

export const initHoverAnimations = () => {
  if (typeof window === 'undefined') return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) return;

  // Skip hover animations - they can interfere with scrolling
  // Just let CSS handle hover states
};

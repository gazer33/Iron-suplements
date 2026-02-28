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

      // Fade-in sections on scroll
      const sections = document.querySelectorAll('.animate-section');
      sections.forEach((section) => {
        gsap.fromTo(section,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              toggleActions: 'play none none none',
              once: true, // Only animate once
            },
          }
        );
      });

      // Stagger animations for cards/items
      const cardGroups = document.querySelectorAll('.animate-cards');
      cardGroups.forEach((group) => {
        const cards = group.querySelectorAll('.card-item, .testimonial-card, .stat-item');
        if (cards.length > 0) {
          gsap.fromTo(cards,
            {
              opacity: 0,
              y: 30,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: group,
                start: 'top 85%',
                toggleActions: 'play none none none',
                once: true, // Only animate once
              },
            }
          );
        }
      });

      // Hero animations - animate all hero buttons
      const heroTitle = document.querySelector('.hero-title');
      const heroButtons = document.querySelectorAll('.hero-button');

      if (heroTitle) {
        gsap.fromTo(heroTitle,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            delay: 0.2,
          }
        );
      }

      if (heroButtons.length > 0) {
        gsap.fromTo(heroButtons,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            delay: 0.6,
          }
        );
      }

      // FAQ items
      const faqContainer = document.querySelector('#faq-container');
      const faqItems = document.querySelectorAll('.faq-item');
      if (faqContainer && faqItems.length > 0) {
        gsap.fromTo(faqItems,
          {
            opacity: 0,
            x: -20,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: faqContainer,
              start: 'top 80%',
              toggleActions: 'play none none none',
              once: true, // Only animate once
            },
          }
        );
      }
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

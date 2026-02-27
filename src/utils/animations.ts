// GSAP Animation Utilities
// All animations respect prefers-reduced-motion

export const initScrollAnimations = () => {
  if (typeof window === 'undefined') return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    // If user prefers reduced motion, skip animations
    return;
  }

  // Dynamically import GSAP only on client
  import('gsap').then(({ gsap }) => {
    import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger);

      // Fade-in sections on scroll
      const sections = document.querySelectorAll('.animate-section');
      sections.forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });

      // Stagger animations for cards/items
      const cardGroups = document.querySelectorAll('.animate-cards');
      cardGroups.forEach((group) => {
        const cards = group.querySelectorAll('.card-item, .testimonial-card, .stat-item');
        gsap.from(cards, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: group,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });

      // Hero animations
      const heroTitle = document.querySelector('.hero-title');
      const heroButton = document.querySelector('.hero-button');

      if (heroTitle) {
        gsap.from(heroTitle, {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: 'power3.out',
          delay: 0.2,
        });
      }

      if (heroButton) {
        gsap.from(heroButton, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: 'power2.out',
          delay: 0.6,
        });
      }

      // FAQ items
      const faqItems = document.querySelectorAll('.faq-item');
      if (faqItems.length > 0) {
        gsap.from(faqItems, {
          opacity: 0,
          x: -20,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#faq-container',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      }
    });
  });
};

export const initHoverAnimations = () => {
  if (typeof window === 'undefined') return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) return;

  import('gsap').then(({ gsap }) => {
    // Add subtle hover effects to buttons
    const buttons = document.querySelectorAll('button, .button-link');
    buttons.forEach((button) => {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, { scale: 1.05, duration: 0.2, ease: 'power1.out' });
      });
      button.addEventListener('mouseleave', () => {
        gsap.to(button, { scale: 1, duration: 0.2, ease: 'power1.in' });
      });
    });
  });
};

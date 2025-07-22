'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface UseGSAPOptions {
  enableSmoothScroll?: boolean;
  enableStickNav?: boolean;
  enableCursor?: boolean;
  refreshDelay?: number;
}

export const useGSAP = (options: UseGSAPOptions = {}) => {
  const {
    enableSmoothScroll = true,
    enableCursor = true,
    refreshDelay = 500,
  } = options;

  const lenisRef = useRef<Lenis | null>(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined' || isInitialized.current) return;

    const initializeParallax = () => {
      const parallaxImages = document.querySelectorAll('.gsap-parallax');

      parallaxImages.forEach(image => {
        let parallaxValueY;

        if (
          image.classList.contains('gsap-parallax-small') &&
          image.classList.contains('gsap-revert')
        ) {
          parallaxValueY = -50;
        } else if (image.classList.contains('gsap-revert')) {
          parallaxValueY = -150;
        } else if (image.classList.contains('gsap-parallax-small')) {
          parallaxValueY = 50;
        } else {
          parallaxValueY = 150;
        }

        gsap.to(image, {
          y: parallaxValueY,
          ease: 'none',
          scrollTrigger: {
            trigger: image.closest('section') || image,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });
    };

    const initializeNumberAnimations = () => {
      const numbers = document.querySelectorAll('.numbersJS');

      if (numbers.length > 0) {
        const numberWithCommas = (x: number) => {
          return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        };

        gsap.from(numbers, {
          scrollTrigger: {
            trigger:
              numbers[0].parentElement?.parentElement?.parentElement
                ?.parentElement || numbers[0],
            start: 'top center',
          },
          textContent: 0,
          duration: 2,
          ease: 'power1.in',
          snap: { textContent: 1 },
          stagger: {
            each: 0.3,
            onUpdate: function (this: gsap.core.Tween) {
              const target = this.targets()[0] as HTMLElement;
              if (target) {
                target.innerHTML = numberWithCommas(
                  Math.ceil(Number(target.textContent))
                );
              }
            },
          },
        });
      }
    };

    const initializeTextAnimations = () => {
      // Text reveal animations
      const textReveal = document.querySelectorAll('.gsapTextReveal');
      textReveal.forEach(textEl => {
        const words = (textEl.textContent || '')
          .split(' ')
          .map(word => `<span>${word}</span>`)
          .join(' ');
        textEl.innerHTML = words;

        const spans = textEl.querySelectorAll('span');

        gsap.from(spans, {
          duration: 1,
          y: '150px',
          opacity: 0,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: textEl.closest('section') || textEl,
            start: 'top bottom',
            once: true,
          },
        });
      });

      // Text reveal editor
      const textRevealEditor = document.querySelectorAll(
        '.gsapTextRevealEditor'
      );
      textRevealEditor.forEach(textEl => {
        Array.from(textEl.children).forEach(child => {
          const words = (child.textContent || '')
            .split(' ')
            .map(word => `<span>${word}</span>`)
            .join(' ');
          child.innerHTML = words;
        });

        const spans = textEl.querySelectorAll('span');

        gsap.from(spans, {
          duration: 1,
          y: '150px',
          opacity: 0,
          stagger: 0.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: textEl.closest('section') || textEl,
            start: 'top center',
            once: true,
          },
        });
      });

      // Text reveal editor hero
      const textRevealEditorHero = document.querySelectorAll(
        '.gsapTextRevealEditorHero'
      );
      textRevealEditorHero.forEach(textEl => {
        Array.from(textEl.children).forEach(child => {
          const words = (child.textContent || '')
            .split(' ')
            .map(word => `<span>${word}</span>`)
            .join(' ');
          child.innerHTML = words;
        });

        const spans = textEl.querySelectorAll('span');

        gsap.from(spans, {
          duration: 1,
          y: '150px',
          opacity: 0,
          stagger: 0.1,
          ease: 'power2.out',
          delay: 2,
        });
      });

      // Gradient text reveal
      const textElGradient = document.querySelector('.gsapTextRevealGradient');
      if (textElGradient) {
        const wrapWords = (node: Element) => {
          Array.from(node.childNodes).forEach(child => {
            if (child.nodeType === Node.TEXT_NODE) {
              const words = (child.textContent || '')
                .split(' ')
                .map(word => `<span>${word}</span>`)
                .join(' ');
              const tempDiv = document.createElement('div');
              tempDiv.innerHTML = words;
              while (tempDiv.firstChild) {
                node.insertBefore(tempDiv.firstChild, child);
              }
              node.removeChild(child);
            } else if (child.nodeType === Node.ELEMENT_NODE) {
              wrapWords(child as Element);
            }
          });
        };

        wrapWords(textElGradient);

        document
          .querySelectorAll('.gsapTextRevealGradient span')
          .forEach((el, index) => {
            const heroDelay = el.parentElement?.classList.contains('hero-delay')
              ? index === 0
                ? 1
                : 0
              : 0;

            gsap.fromTo(
              el,
              {
                scrollTrigger: {
                  trigger: el.closest('section') || el,
                  start: 'top center',
                },
                opacity: 0,
                y: 50,
              },
              {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: index * 0.2 + heroDelay,
              }
            );
          });
      }

      // Scroll text
      const gsapScrollText = document.querySelectorAll('.gsapScrollText');
      gsapScrollText.forEach(textEl => {
        gsap.fromTo(
          textEl,
          {
            xPercent: 0,
          },
          {
            xPercent: -40,
            scrollTrigger: {
              trigger: textEl.parentElement?.parentElement || textEl,
              start: 'top center',
              end: '+=500 top',
              scrub: 2,
              onUpdate: self => {
                const progress = self.progress;
                const direction = progress > 0.5 ? 1 : -1;
                gsap.to(textEl, {
                  x: direction * (progress * 200 - 100),
                  ease: 'none',
                });
              },
            },
          }
        );
      });
    };

    const initializeSpecializedAnimations = () => {
      // Date columns
      document.querySelectorAll('.gsapDateJs').forEach(el => {
        gsap.to(el, {
          scrollTrigger: {
            trigger: el.parentElement || el,
            start: 'top center',
          },
          width: '100%',
          duration: 1.3,
          opacity: '1',
        });

        const firstChild = el.children[0];
        if (firstChild) {
          gsap.to(firstChild, {
            scrollTrigger: {
              trigger: el.parentElement?.parentElement || el,
              start: 'top center',
            },
            opacity: 1,
            delay: 1.3,
            duration: 1.3,
          });
        }

        const nextSibling = el.nextElementSibling;
        if (nextSibling) {
          gsap.to(nextSibling, {
            scrollTrigger: {
              trigger: el.parentElement || el,
              start: 'top center',
            },
            opacity: 1,
            delay: 1.3,
            duration: 1.3,
            y: 0,
          });
        }
      });

      // Gray columns
      document.querySelectorAll('.gsapGrayColumns').forEach(el => {
        const firstChild = el.children[0];
        const secondChild = el.children[1];

        if (firstChild) {
          gsap.to(firstChild, {
            scrollTrigger: {
              trigger: el.closest('section') || el,
              start: 'top center',
            },
            width: '100%',
            duration: 1.3,
            opacity: '1',
          });
        }

        if (secondChild) {
          gsap.to(secondChild, {
            scrollTrigger: {
              trigger: el.closest('section') || el,
              start: 'top center',
            },
            opacity: 1,
            delay: 1.3,
            duration: 1.3,
          });
        }

        const nextSibling = el.nextElementSibling;
        if (nextSibling) {
          gsap.from(nextSibling, {
            scrollTrigger: {
              trigger: el.closest('section') || el,
              start: 'top center',
            },
            opacity: 0,
            delay: 1.3,
            duration: 1.3,
            y: 100,
          });
        }
      });

      // Cards
      const cardsJS = document.querySelector('.cardsJS');
      if (cardsJS) {
        gsap.to(cardsJS, {
          scrollTrigger: {
            trigger: cardsJS,
            start: 'top center',
          },
          opacity: '1',
          duration: 1.3,
        });
      }

      // Espresso text
      document
        .querySelectorAll('.gsapEspressoText')
        .forEach((textEl, index) => {
          gsap.from(textEl, {
            scrollTrigger: {
              trigger: textEl.closest('section') || textEl,
              start: 'top bottom',
              once: true,
            },
            y: 20,
            opacity: 0,
            duration: 1.3,
            delay: index / 2,
          });
        });
    };

    const initializeCursor = () => {
      // Create cursor elements if they don't exist
      let cursor = document.querySelector('.customCursor') as HTMLElement;
      if (!cursor) {
        cursor = document.createElement('div');
        cursor.className = 'customCursor';
        cursor.style.cssText = `
          position: fixed;
          width: 20px;
          height: 20px;
          border: 2px solid var(--primary, #000);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          opacity: 0;
          transition: opacity 0.3s ease;
        `;
        document.body.appendChild(cursor);
      }

      gsap.set(cursor, {
        xPercent: -50,
        yPercent: -50,
      });

      let mouseX = 0;
      let mouseY = 0;

      const handleMouseMove = (e: MouseEvent) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        gsap.set(cursor, {
          x: mouseX,
          y: mouseY,
          duration: 0.1,
          ease: 'power3.out',
        });
      };

      window.addEventListener('mousemove', handleMouseMove);

      // Handle link hover effects
      document.querySelectorAll('a').forEach(link => {
        link.addEventListener('mouseenter', () => {
          cursor.style.opacity = '1';
        });

        link.addEventListener('mouseleave', () => {
          cursor.style.opacity = '0';
        });
      });

      // Handle special sections with follow elements
      const followElements = document.querySelectorAll(
        '.followingEspresso, .drop-a-line'
      );
      const followSections = document.querySelectorAll(
        '#espressoSection, #drop-a-line'
      );

      followElements.forEach((followElement, index) => {
        const section = followSections[index];
        if (!section) return;

        gsap.set(followElement, {
          scale: 0,
          opacity: 0,
          x: '-50%',
          y: '-50%',
        });

        section.addEventListener('mouseenter', () => {
          gsap.to(followElement, {
            scale: 1,
            opacity: 1,
            duration: 1,
          });

          gsap.set(cursor, {
            scale: 0,
          });
        });

        section.addEventListener('mouseleave', () => {
          gsap.to(followElement, {
            scale: 0,
            opacity: 0,
            duration: 1,
          });

          gsap.set(cursor, {
            scale: 1,
          });
        });

        section.addEventListener('mousemove', () => {
          gsap.to(followElement, {
            x: mouseX,
            y: mouseY,
          });
        });
      });

      // Contact click sections
      const contactClickSections = document.querySelectorAll(
        'div#drop-a-line, div#drop-a-line *, #espressoSection, #espressoSection *'
      );
      contactClickSections.forEach(section => {
        section.addEventListener('click', e => {
          e.preventDefault();
          window.location.href = '/contact/';
        });
      });
    };

    const initializeGSAPAnimations = () => {
      // Main GSAP animations for elements with gsap-animated class
      const gsapEl = document.querySelectorAll('.gsap-animated');

      gsapEl.forEach(el => {
        let delayValue = 0;

        if (el.classList.contains('gsap-delay-hero')) {
          delayValue = 0.5;
        } else if (el.classList.contains('gsap-delay-3')) {
          delayValue = 3;
        }

        // Fade in from left
        if (el.classList.contains('gsap-fade-in-left')) {
          gsap.from(el, {
            scrollTrigger: {
              trigger: el.closest('section') || el,
              start: 'top 80%',
            },
            opacity: 0,
            xPercent: -50,
            ease: 'power1.inOut',
            duration: 1,
            delay: delayValue,
          });
        }

        // Fade in from left with stagger
        else if (el.classList.contains('gsap-fade-in-left-stagger')) {
          gsap.from(el.children, {
            scrollTrigger: {
              trigger: el.closest('section') || el,
              start: 'top 80%',
            },
            opacity: 0,
            xPercent: -50,
            ease: 'power1.inOut',
            duration: 1,
            stagger: 0.3,
            delay: delayValue,
          });
        }

        // Fade in from right
        else if (el.classList.contains('gsap-fade-in-right')) {
          gsap.from(el, {
            scrollTrigger: {
              trigger: el.closest('section') || el,
              start: 'top 80%',
            },
            opacity: 0,
            xPercent: 50,
            ease: 'power1.inOut',
            duration: 1,
            delay: delayValue,
          });
        }

        // Fade in from right with stagger
        else if (el.classList.contains('gsap-fade-in-right-stagger')) {
          gsap.from(el.children, {
            scrollTrigger: {
              trigger: el.closest('section') || el,
              start: 'top 80%',
            },
            opacity: 0,
            xPercent: 50,
            ease: 'power1.inOut',
            duration: 1,
            stagger: 0.3,
            delay: delayValue,
          });
        }

        // Fade in from up
        else if (el.classList.contains('gsap-fade-in-up')) {
          gsap.from(el, {
            scrollTrigger: {
              trigger: el.closest('section') || el,
              start: 'top 80%',
            },
            opacity: 0,
            yPercent: 50,
            ease: 'power1.inOut',
            duration: 1,
            delay: delayValue,
          });
        }

        // Fade in from up (hero)
        else if (el.classList.contains('gsap-fade-in-up-hero')) {
          gsap.from(el, {
            opacity: 0,
            yPercent: 50,
            ease: 'power1.inOut',
            duration: 1,
            delay: 1.5,
          });
        }

        // Fade in from down
        else if (el.classList.contains('gsap-fade-in-down')) {
          gsap.from(el, {
            scrollTrigger: {
              trigger: el.closest('section') || el,
              start: 'top 80%',
            },
            opacity: 0,
            yPercent: -50,
            ease: 'power1.inOut',
            duration: 1,
            delay: delayValue,
          });
        }

        // Fade in from down with stagger
        else if (el.classList.contains('gsap-fade-in-down-stagger')) {
          gsap.from(el.children, {
            scrollTrigger: {
              trigger: el.closest('section') || el,
              start: 'top 80%',
            },
            opacity: 0,
            yPercent: -50,
            ease: 'power1.inOut',
            duration: 1,
            stagger: 0.3,
            delay: delayValue,
          });
        }

        // Fade in from down (hero)
        else if (el.classList.contains('gsap-fade-in-down-hero')) {
          gsap.from(el, {
            opacity: 0,
            yPercent: -50,
            ease: 'power1.inOut',
            duration: 1,
            delay: 1.5,
          });
        }

        // Basic fade in
        else if (el.classList.contains('gsap-fade-in')) {
          gsap.from(el, {
            scrollTrigger: {
              trigger: el.closest('section') || el,
              start: 'top 80%',
            },
            opacity: 0,
            ease: 'power1.inOut',
            duration: 1,
            delay: delayValue,
          });
        }

        // Basic fade in (hero)
        else if (el.classList.contains('gsap-fade-in-hero')) {
          gsap.from(el, {
            opacity: 0,
            ease: 'power1.inOut',
            duration: 1,
            delay: 1.5,
          });
        }

        // Fade in from up with stagger
        else if (el.classList.contains('gsap-fade-in-up-stagger')) {
          gsap.from(el.children, {
            scrollTrigger: {
              trigger: el.closest('section') || el,
              start: 'top 80%',
            },
            opacity: 0,
            yPercent: 50,
            ease: 'power1.inOut',
            duration: 1,
            stagger: 0.3,
            delay: delayValue,
          });
        }

        // Fade in from up with stagger (hero)
        else if (el.classList.contains('gsap-fade-in-up-stagger-hero')) {
          gsap.from(el.children, {
            scrollTrigger: {
              trigger: el.closest('section') || el,
              start: 'top 80%',
            },
            opacity: 0,
            yPercent: 50,
            ease: 'power1.inOut',
            duration: 1,
            stagger: 0.3,
            delay: 1.5,
          });
        }
      });

      // Parallax animations
      initializeParallax();

      // Number animations
      initializeNumberAnimations();

      // Text reveal animations
      initializeTextAnimations();

      // Other specialized animations
      initializeSpecializedAnimations();
    };

    const initializeAnimations = () => {
      // Initialize Lenis smooth scrolling
      if (enableSmoothScroll) {
        lenisRef.current = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        function raf(time: number) {
          if (lenisRef.current) {
            lenisRef.current.raf(time);
          }
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Integrate with GSAP ScrollTrigger
        lenisRef.current.on('scroll', ScrollTrigger.update);

        // Use GSAP ticker instead of requestAnimationFrame
        gsap.ticker.add(time => {
          if (lenisRef.current) {
            lenisRef.current.raf(time * 1000);
          }
        });

        // Prevent GSAP ticker from adjusting time to improve performance
        gsap.ticker.lagSmoothing(0);
      }

      // Custom cursor
      if (enableCursor) {
        initializeCursor();
      }

      // Initialize all GSAP animations
      initializeGSAPAnimations();

      // Refresh ScrollTrigger
      ScrollTrigger.refresh();
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, refreshDelay);

      isInitialized.current = true;
    };

    // Initialize after a short delay to ensure DOM is ready
    const timer = setTimeout(initializeAnimations, 0);

    return () => {
      clearTimeout(timer);
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      gsap.ticker.remove(time => {
        if (lenisRef.current) {
          lenisRef.current.raf(time * 1000);
        }
      });
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [enableSmoothScroll, enableCursor, refreshDelay]);

  return {
    lenis: lenisRef.current,
    refresh: () => ScrollTrigger.refresh(),
  };
};

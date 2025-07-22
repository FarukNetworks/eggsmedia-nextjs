'use client';

import './HeroSection.css';
import Button from '../../Parts/Button';
import Group1 from './svg/Group 1.svg';
import L2 from './svg/L2.svg';
import R5 from './svg/R5.svg';
import R6 from './svg/R6.svg';
import L3 from './svg/L3.svg';
import Image from 'next/image';
import { useState, useRef, useEffect, useCallback } from 'react';

// Define the button interface to match the updated structure
interface ButtonData {
  title: string;
  url: string;
}

export default function HeroSection(props: {
  heading: string;
  editor: string;
  button: ButtonData;
  gifUrl: string;
  imageUrl: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
}) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [titleAnimationPhase, setTitleAnimationPhase] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const handlePortfolioHighlightsClick = () => {
    setIsVideoModalOpen(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleCloseVideo = () => {
    setIsVideoModalOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  // Dynamic styles for title animation
  const getTitleStyles = () => {
    switch (titleAnimationPhase) {
      case 1:
      case 2:
        return {
          color: 'transparent',
        };
      case 3:
      case 4:
      case 5:
      default:
        return {
          color: '#231f20',
        };
    }
  };

  const getGradientStyles = () => {
    switch (titleAnimationPhase) {
      case 1:
        return {
          width: '0%',
          left: '0',
          right: 'unset',
        };
      case 2:
        return {
          width: '100%',
          left: '0',
          right: 'unset',
          transition: 'width 0.6s ease-out',
        };
      case 3:
        return {
          width: '100%',
          left: '0',
          right: 'unset',
        };
      case 4:
        return {
          width: '0%',
          left: 'unset',
          right: '0',
          transition: 'width 0.6s ease-out',
        };
      case 5:
      default:
        return {
          width: '0%',
          left: 'unset',
          right: '0',
        };
    }
  };

  const getSpanStyles = useCallback(() => {
    switch (titleAnimationPhase) {
      case 3:
      case 4:
      case 5:
        return {
          background: 'linear-gradient(90deg, #d883bb 0%, #5bc5ce 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
        };
      default:
        return {
          background: 'transparent',
          color: 'inherit',
        };
    }
  }, [titleAnimationPhase]);

  // Apply span styles when animation phase changes
  useEffect(() => {
    if (headingRef.current) {
      const spans = headingRef.current.querySelectorAll('span');
      const spanStyles = getSpanStyles();

      spans.forEach(span => {
        const htmlSpan = span as HTMLElement;
        Object.assign(htmlSpan.style, spanStyles);
      });
    }
  }, [titleAnimationPhase, getSpanStyles]);

  useEffect(() => {
    // Title animation sequence matching GSAP timeline exactly
    const runTitleAnimation = () => {
      // Phase 1: Start - gradient width 0, text transparent
      setTitleAnimationPhase(1);

      // Phase 2: Gradient expands to 100% over 600ms
      setTimeout(() => {
        setTitleAnimationPhase(2);
      }, 50); // Small delay to ensure initial state is rendered

      // Phase 3: At 600ms - text color changes instantly, span gets gradient
      setTimeout(() => {
        setTitleAnimationPhase(3);
      }, 650);

      // Phase 4: At 650ms - gradient starts collapsing from left to right over 600ms
      setTimeout(() => {
        setTitleAnimationPhase(4);
      }, 700);

      // Phase 5: Animation complete
      setTimeout(() => {
        setTitleAnimationPhase(5);
      }, 1300);
    };

    // Start title animation after component mounts
    runTitleAnimation();

    const heroObjects = document.querySelectorAll('.heroObject');

    heroObjects.forEach((el: Element, index: number) => {
      const htmlElement = el as HTMLElement;

      setTimeout(function () {
        setTimeout(function () {
          htmlElement.classList.remove('opacity-0');
        }, Number(`${index}99`));
      }, 1400);

      htmlElement.addEventListener('mousemove', function (e: MouseEvent) {
        const rect = htmlElement.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        htmlElement.style.transform = `translate(${x}px, ${y}px)`;
      });

      setInterval(() => {
        htmlElement.style.transform = `rotate(${Math.random() * 360}deg)`;
      }, 3000 * (index + 1)); // Rotate each element after 1 second, but each different one after 1 second
    });
  }, []);

  return (
    <>
      <section id="slider" className="relative z-10 mb-10 mt-[110px]">
        <div className="min-h-[calc(100vh-110px)] flex items-center max-lg:pt-24 max-sm:pt-8 max-sm:pb-0">
          <div className="grid grid-cols-1 gap-x-5 lg:grid-cols-3 relative w-full">
            <div className="max-lg:hidden gsap-animated gsap-fade-in-hero absolute left-0 top-[calc(50%-3.5rem)] -translate-y-1/2 bg-[#F8F8F8] w-full h-[65vh] -z-20"></div>

            <div className="container lg:col-span-2 flex items-center relative -top-14 !max-w-[1400px] max-lg:mb-40">
              <div className="lg:pl-32">
                <h1
                  ref={headingRef}
                  className="base96 max-sm:pb-5 pb-10 relative inline-block leading-[.8]"
                  style={getTitleStyles()}
                >
                  <div
                    dangerouslySetInnerHTML={{ __html: props.heading }}
                  ></div>

                  <div
                    className="absolute top-0 bg-gradient-to-r from-[#D883BB] to-[#5BC5CE] h-full"
                    style={getGradientStyles()}
                  ></div>
                </h1>

                <div className="max-sm:text-[18px] text-[24px] leading-[1.15] gsap-animated gsap-fade-in-up gsap-delay-hero max-w-[600px] mb-10">
                  {props.editor}
                </div>

                <div className="gsap-animated gsap-fade-in-up-hero block">
                  <Button
                    title={props.button.title}
                    url={props.button.url}
                    target="_self"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="relative">
                <div className="max-lg:hidden gsap-animated gsap-fade-in-hero absolute right-0 top-[calc(50%-3.5rem)] -translate-y-1/2 gradientHeroRightBox w-[200%] h-[65vh] -z-10"></div>

                <figure className="relative inline-block max-sm:max-w-[200px] max-sm:mx-auto max-sm:block ">
                  <div className="hidden max-lg:hidden gsap-animated gsap-fade-in-up-hero absolute bottom-5 -left-[70%] strokeTextBlack text-[72px] leading-normal pr-5 opacity-40">
                    <p className="h-[70px]">Balancing</p>
                    <p className="h-[70px]">Creativity</p>
                    <p>&Strategy</p>
                  </div>

                  <div className="gsap-animated gsap-fade-in-hero">
                    <div className="rotateLinkContainer">
                      <button
                        id="portfolioHighlights"
                        onClick={handlePortfolioHighlightsClick}
                        className="
    hoverCircle
    absolute
    bottom-10
    -left-[90%]
    -translate-x-1/2
    z-50 group
    max-lg:translate-x-0 max-lg:left-0 max-lg:-top-[200px] max-lg:bottom-0 max-lg:absolute max-sm:h-[200px]
    max-sm:relative
    "
                        aria-label="Portfolio Highlights"
                      >
                        <svg
                          id="rotatingText"
                          viewBox="0 0 200 200"
                          width="200"
                          height="200"
                          className="hoverCircle relative"
                        >
                          <defs className="hoverCircle">
                            <path
                              className="hoverCircle"
                              id="circle"
                              d="M 100, 100
            m -75, 0
            a 75, 75 0 1, 0 150, 0
            a 75, 75 0 1, 0 -150, 0
            "
                            ></path>
                          </defs>
                          <text width="400" className="hoverCircle">
                            <textPath
                              alignmentBaseline="inherit"
                              xlinkHref="#circle"
                              className="textCircle hoverCircle z-20 relative"
                            >
                              PORTFOLIO REEL - PORTFOLIO REEL -
                            </textPath>
                          </text>
                        </svg>

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105px] h-[105px] rounded-full object-cover baseTransition group-hover:w-[170px] group-hover:h-[170px] -z-10 overflow-hidden block">
                          <Image
                            priority={true}
                            loading="eager"
                            className="rounded-full object-cover object-center baseTransition h-full"
                            src={props.gifUrl}
                            alt="Eggsmedia"
                            width="267"
                            height="150"
                          />
                        </div>

                        <svg
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[25px] h-[25px] rounded-full object-cover baseTransition group-hover:w-[40px] group-hover:h-[40px] z-10"
                          width="25"
                          height="25"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M23 12L5 22.5L5 1.5L23 12Z"
                            fill="#9A9EB1"
                            opacity="80%"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* <div className="heroObject baseTransition opacity-0 absolute -left-3 top-20 -z-10 max-sm:top-10">
                    <L1 className="w-[80px] h-[80px]" />
                  </div> */}

                  {/* <div className="heroObject baseTransition opacity-0 absolute -right-24 top-5 max-sm:-top-5">
                    <R1 className="w-[175px] h-[175px]" />
                  </div> */}

                  {/* <div className="heroObject baseTransition opacity-0 absolute right-14 max-sm:right-6 top-[34%] -z-10">
                    <R2 className="w-[60px] h-[60px]" />
                  </div> */}

                  <div className="heroObject baseTransition opacity-0 absolute -right-16 max-sm:-right-10 top-[39%]">
                    <Group1 className="scale-[.6]" />
                  </div>

                  <div className="heroObject baseTransition opacity-0 absolute -left-10 top-[50%]">
                    <L2 className="w-[100px] h-[100px]" />
                  </div>

                  <div className="heroObject baseTransition opacity-0 absolute -right-8 max-sm:top-[60%] top-[55%]">
                    <R5 className="w-[100px] h-[100px]" />
                  </div>

                  <div className="heroObject baseTransition opacity-0 absolute right-0 top-[78%]">
                    <R6 className="w-[100px] h-[100px]" />
                  </div>

                  <div className="heroObject baseTransition opacity-0 absolute left-10 top-[74%] max-sm:top-[80%]">
                    <L3 className="w-[85px] h-[85px]" />
                  </div>

                  <div className="heroObject baseTransition opacity-0 absolute left-10 top-[calc(74%+80px)] max-sm:top-[calc(66%+80px)]">
                    <L3 className="w-[85px] h-[85px]" />
                  </div>

                  <Image
                    className="gsap-animated gsap-fade-in-hero max-sm:h-[300px] max-sm:w-auto max-sm:hidden max-sm:mx-auto"
                    src={props.imageUrl}
                    alt={props.imageAlt}
                    width={props.imageWidth}
                    height={props.imageHeight}
                    fetchPriority="high"
                    loading="eager"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <div
        id="portfolioHighlightsVideo"
        className={`fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[100] transition-all duration-300 ${
          isVideoModalOpen
            ? 'scale-100 opacity-100 visible'
            : 'scale-0 opacity-0 invisible'
        }`}
      >
        <div className="relative max-w-4xl max-h-[80vh] w-full mx-4">
          <button
            id="closePortfolioHighlightsVideo"
            onClick={handleCloseVideo}
            className="fixed top-10 right-1/2 translate-x-1/2 bg-primary w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl z-50 cursor-pointer baseTransition hover:bg-secondary"
            aria-label="Close video"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <video
            ref={videoRef}
            className="fixed inset-0 w-full h-auto rounded-lg shadow-lg"
            controls
            preload="metadata"
          >
            <source
              src="https://eggsmedia.com/wp-content/uploads/2025/03/eggs-media-video-portfolio-reel.webm"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
}

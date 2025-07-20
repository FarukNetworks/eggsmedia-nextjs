import './HeroSection.css';
import Button from '../../Parts/Button';
import L1 from './svg/L1.svg';
import R1 from './svg/R1.svg';
import R2 from './svg/R2.svg';
import Group1 from './svg/Group 1.svg';
import L2 from './svg/L2.svg';
import R5 from './svg/R5.svg';
import R6 from './svg/R6.svg';
import L3 from './svg/L3.svg';
import Image from 'next/image';
import { useState, useRef } from 'react';

export default function HeroSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const heading = 'Balancing Creativity and Strategy';
  const editor =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  const gifUrl =
    'https://eggsmedia.com/wp-content/uploads/2025/03/Eggs-Website-GIF.gif';
  const imageUrl =
    'https://eggsmedia.com/wp-content/uploads/2024/11/eggsmedia-hero-image.png';
  const imageAlt = 'Hero Section Image';
  const imageWidth = 1000;
  const imageHeight = 1000;

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

  return (
    <>
      <section id="slider" className="relative z-10 mb-10">
        <div className="min-h-[calc(100vh-110px)] flex items-center max-lg:pt-24 max-sm:pt-8 max-sm:pb-0">
          <div className="grid grid-cols-1 gap-x-5 lg:grid-cols-3 relative w-full">
            <div className="max-lg:hidden gsap-animated gsap-fade-in-hero absolute left-0 top-[calc(50%-3.5rem)] -translate-y-1/2 bg-[#F8F8F8] w-full h-[65vh] -z-20"></div>

            <div className="container lg:col-span-2 flex items-center relative -top-14 !max-w-[1400px] max-lg:mb-40">
              <div className="lg:pl-32">
                <h1 className="base96 max-sm:pb-5 pb-10 customTitleAnimation withSpan relative inline-block leading-[.8]">
                  {heading}

                  <div className="absolute top-0 bg-gradient-to-r from-primary to-secondary h-full customGradientBgAnimation"></div>
                </h1>

                <div className="max-sm:text-[18px] text-[24px] leading-[1.15] gsap-animated gsap-fade-in-up gsap-delay-hero max-w-[600px] mb-10">
                  {editor}
                </div>

                <div className="gsap-animated gsap-fade-in-up-hero block">
                  <Button></Button>
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
                            className="rounded-full object-cover object-center baseTransition h-full"
                            src={gifUrl}
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

                  <div className="heroObject baseTransition opacity-0 absolute -left-3 top-20 -z-10 max-sm:top-10">
                    <L1 />
                  </div>

                  <div className="heroObject baseTransition opacity-0 absolute -right-24 top-5 max-sm:-top-5">
                    <R1 />
                  </div>

                  <div className="heroObject baseTransition opacity-0 absolute right-14 max-sm:right-6 top-[34%] -z-10">
                    <R2 />
                  </div>

                  <div className="heroObject baseTransition opacity-0 absolute -right-16 max-sm:-right-10 top-[39%]">
                    <Group1 />
                  </div>

                  <div className="heroObject baseTransition opacity-0 absolute -left-10 top-[50%]">
                    <L2 />
                  </div>

                  <div className="heroObject baseTransition opacity-0 absolute -right-8 max-sm:top-[60%] top-[55%]">
                    <R5 />
                  </div>

                  <div className="heroObject baseTransition opacity-0 absolute right-0 top-[78%]">
                    <R6 />
                  </div>

                  <div className="heroObject baseTransition opacity-0 absolute left-10 top-[74%] max-sm:top-[80%]">
                    <L3 />
                  </div>

                  <div className="heroObject baseTransition opacity-0 absolute left-10 top-[calc(74%+80px)] max-sm:top-[calc(66%+80px)]">
                    <L3 />
                  </div>

                  <Image
                    className="gsap-animated gsap-fade-in-hero max-sm:h-[300px] max-sm:w-auto max-sm:hidden max-sm:mx-auto"
                    src={imageUrl}
                    alt={imageAlt}
                    width={imageWidth}
                    height={imageHeight}
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
            className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300 transition-colors z-10"
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
            className="w-full h-auto rounded-lg shadow-lg"
            controls
            preload="metadata"
          >
            <source
              src="https://eggsmedia.com/wp-content/uploads/2025/03/portfolio-highlights.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
}

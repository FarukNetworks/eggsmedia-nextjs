import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
  whiteLogo?: boolean;
}

export default function Header({ whiteLogo = false }: HeaderProps) {
  return (
    <header>
      <div className="baseTransition mx-auto grid place-items-center fixed z-[99] top-0 left-0 bg-transparent w-full">
        <div className="md:flex md:justify-between md:items-center py-6 w-full max-w-[2250px] px-[var(--containerPadding)]">
          <div className="flex justify-between items-center w-full">
            <div id="logo" className="relative z-40 min-w-[117px]">
              <Link
                className="custom-logo-link absolute inset-0 baseTransition"
                href="/"
                rel="home"
              >
                {whiteLogo ? (
                  <Image
                    width="117"
                    height="32"
                    src="https://eggsmedia.com/wp-content/uploads/2025/06/eggsmedia-logo-white.png"
                    className="custom-logo"
                    alt="Eggs Media Logo"
                    decoding="async"
                  />
                ) : (
                  <Image
                    width="117"
                    height="32"
                    src="https://eggsmedia.com/wp-content/uploads/2025/06/eggsmedia-logo-black-font.png"
                    className="custom-logo"
                    alt="Eggs Media Logo"
                    decoding="async"
                  />
                )}
              </Link>
            </div>

            <div className="relative z-40 flex gap-12">
              <button
                className="relative w-[171px] group hidden md:block"
                type="button"
              >
                <Link href="/contact">
                  <svg
                    className="absolute left-0 top-0 z-10 baseTransition opacity-100 group-hover:opacity-0"
                    width="171"
                    height="36"
                    viewBox="0 0 171 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="170"
                      height="35"
                      rx="17.5"
                      stroke="url(#paint0_linear_10_233)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_10_233"
                        x1="-24.3355"
                        y1="0"
                        x2="145.728"
                        y2="-84.0785"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#D883BB" />
                        <stop offset="1" stopColor="#5BC5CE" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <svg
                    className="absolute left-0 top-0 z-10 baseTransition opacity-0 group-hover:opacity-100 fill-[url(#paint0_linear_10_233)]"
                    width="171"
                    height="36"
                    viewBox="0 0 171 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="170"
                      height="35"
                      rx="17.5"
                      stroke="url(#paint0_linear_10_233)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_10_233"
                        x1="-24.3355"
                        y1="0"
                        x2="145.728"
                        y2="-84.0785"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#D883BB" />
                        <stop offset="1" stopColor="#5BC5CE" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <span className="relative z-20 baseTransition group-hover:text-white text-[16px] font-[500] text-black">
                    CONTACT
                  </span>
                </Link>
              </button>

              <button
                type="button"
                aria-label="Toggle navigation"
                id="primary-menu-toggle"
              >
                <svg
                  width="80"
                  height="36"
                  viewBox="0 0 80 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 13H80" stroke="#231F20" strokeWidth="1.5" />
                  <path d="M0 23H80" stroke="#231F20" strokeWidth="1.5" />
                </svg>
              </button>
            </div>
          </div>

          <div id="primary-menu" className="navBase navHandler mr-auto z-30">
            <div></div>
            <div className="flex justify-between max-sm:flex-col max-sm:mt-auto max-sm:h-screen max-sm:pb-[100px] max-sm:pt-[125px] max-sm:overflow-auto w-full px-[var(--containerPadding)] max-w-[2250px]">
              <div className="flex flex-col justify-end xl:pr-20">
                <div id="social-media-icons">
                  <div className="flex gap-8">
                    <a
                      className="group"
                      href="https://www.instagram.com/eggsmedia/"
                      target="_blank"
                      rel="noopener"
                      title="Instagram"
                      aria-label="Instagram"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="baseTransition group-hover:fill-primary"
                          d="M12.0029 5.8467C8.59691 5.8467 5.84962 8.594 5.84962 12C5.84962 15.406 8.59691 18.1533 12.0029 18.1533C15.4089 18.1533 18.1562 15.406 18.1562 12C18.1562 8.594 15.4089 5.8467 12.0029 5.8467ZM12.0029 16.0004C9.80187 16.0004 8.00247 14.2064 8.00247 12C8.00247 9.7936 9.79651 7.99955 12.0029 7.99955C14.2093 7.99955 16.0034 9.7936 16.0034 12C16.0034 14.2064 14.204 16.0004 12.0029 16.0004ZM19.8431 5.595C19.8431 6.39295 19.2005 7.03024 18.4079 7.03024C17.61 7.03024 16.9727 6.38759 16.9727 5.595C16.9727 4.80241 17.6153 4.15977 18.4079 4.15977C19.2005 4.15977 19.8431 4.80241 19.8431 5.595ZM23.9186 7.05166C23.8275 5.12909 23.3884 3.42608 21.9799 2.02298C20.5768 0.619882 18.8738 0.180743 16.9513 0.0843468C14.9698 -0.0281156 9.03069 -0.0281156 7.04922 0.0843468C5.132 0.175388 3.429 0.614526 2.02054 2.01763C0.612085 3.42073 0.178302 5.12373 0.0819054 7.0463C-0.030557 9.02778 -0.030557 14.9669 0.0819054 16.9483C0.172946 18.8709 0.612085 20.5739 2.02054 21.977C3.429 23.3801 5.12665 23.8193 7.04922 23.9157C9.03069 24.0281 14.9698 24.0281 16.9513 23.9157C18.8738 23.8246 20.5768 23.3855 21.9799 21.977C23.383 20.5739 23.8222 18.8709 23.9186 16.9483C24.031 14.9669 24.031 9.03314 23.9186 7.05166ZM21.3587 19.0744C20.941 20.1241 20.1323 20.9327 19.0773 21.3558C17.4975 21.9824 13.7488 21.8378 12.0029 21.8378C10.2571 21.8378 6.50297 21.977 4.9285 21.3558C3.87885 20.9381 3.07019 20.1294 2.64712 19.0744C2.02054 17.4946 2.16514 13.7458 2.16514 12C2.16514 10.2542 2.0259 6.50006 2.64712 4.92558C3.06484 3.87593 3.87349 3.06728 4.9285 2.6442C6.50833 2.01763 10.2571 2.16222 12.0029 2.16222C13.7488 2.16222 17.5029 2.02298 19.0773 2.6442C20.127 3.06192 20.9356 3.87058 21.3587 4.92558C21.9853 6.50541 21.8407 10.2542 21.8407 12C21.8407 13.7458 21.9853 17.4999 21.3587 19.0744Z"
                          fill="white"
                        />
                      </svg>

                      <span className="sr-only">Instagram</span>
                    </a>

                    <a
                      className="group"
                      href="https://www.facebook.com/eggsmedia/"
                      target="_blank"
                      rel="noopener"
                      title="Facebook"
                      aria-label="Facebook"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="baseTransition group-hover:fill-primary"
                          d="M24 12.0728C24 5.44372 18.629 0.0727539 12 0.0727539C5.37097 0.0727539 0 5.44372 0 12.0728C0 18.0621 4.38823 23.0266 10.125 23.9276V15.5416H7.07661V12.0728H10.125V9.42888C10.125 6.42163 11.9153 4.7605 14.6574 4.7605C15.9706 4.7605 17.3439 4.99469 17.3439 4.99469V7.9463H15.8303C14.34 7.9463 13.875 8.87146 13.875 9.82033V12.0728H17.2031L16.6708 15.5416H13.875V23.9276C19.6118 23.0266 24 18.0621 24 12.0728Z"
                          fill="white"
                        />
                      </svg>

                      <span className="sr-only">Facebook</span>
                    </a>

                    <a
                      className="group"
                      href="https://twitter.com/eggsmedia/"
                      target="_blank"
                      rel="noopener"
                      title="Twitter"
                      aria-label="Twitter"
                    >
                      <span className="sr-only">Twitter</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

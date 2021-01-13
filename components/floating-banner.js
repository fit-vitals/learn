import React, { useState } from "react";

export default function Component(props) {
  const [hidePopup, setHidePopup] = useState(false);
  return (
    <>
      {!hidePopup && (
        <div className="fixed bottom-0 inset-x-0 pb-2 sm:pb-5 z-50">
          <div className="max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="p-2 rounded-lg bg-secondary-2 shadow-lg sm:p-3">
              <div className="flex items-center justify-between flex-wrap">
                <div className="w-0 flex-1 flex items-center">
                  <span className="flex p-2 rounded-lg bg-primary">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                      />
                    </svg>
                  </span>
                  <p className="ml-3 font-medium text-white truncate">
                    <span className="md:hidden">
                      We launched Fit Vitals to help track your Core Web Vitals!
                    </span>
                    <span className="hidden md:inline">
                      Big news! We launched Fit Vitals to help track your Core
                      Web Vitals.
                    </span>
                  </p>
                </div>
                <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                  <div className="rounded-md shadow-sm">
                    <a
                      href="https://fitvitals.dev"
                      className="flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-secondary-2 bg-white hover:text-secondary-3 focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
                <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
                  <button
                    type="button"
                    onClick={() => setHidePopup(true)}
                    className="-mr-1 flex p-2 rounded-md hover:bg-secondary-2 focus:outline-none focus:bg-secondary-2 transition ease-in-out duration-150"
                    aria-label="Dismiss"
                  >
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

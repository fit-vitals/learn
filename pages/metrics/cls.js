import React, { useState, useEffect } from "react";
import Head from "next/head";
import Stats from "../../components/stats";
import Link from "next/link";
import { useMetricsFromLocalStorage } from "../../utils/useMetricsFromLocalStorage";
import Explore from "../../components/explore";

export default function CumulativeLayoutShift() {
  const [myLCP, setLCP] = useState(0);
  const [myCLS, setCLS] = useState(0);
  const [myFID, setFID] = useState(0);
  const [myTTFB, setTTFB] = useState(0);
  const [isMissingMetrics, setIsMissingMetrics] = useState(false);
  const [causeShift, setCauseShift] = useState(true);

  const getMetricsFromLocalStorage = () => {
    setCLS(-1);
    setLCP(-1);
    setFID(-1);
    setTTFB(-1);

    const {
      formattedCLS,
      formattedLCP,
      formattedFID,
      formattedTTFB,
      hasMissingValue,
    } = useMetricsFromLocalStorage();

    setCLS(formattedCLS);
    setLCP(formattedLCP);
    setFID(formattedFID);
    setTTFB(formattedTTFB);
    setIsMissingMetrics(hasMissingValue);
  };

  useEffect(() => {
    setTimeout(() => {
      setCauseShift(false);
    }, 1000);
  });

  return (
    <div className="container mx-auto p-12">
      <Head>
        <title>Fit Vitals - Core Web Vitals Guide</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "http://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement":
              [
               {
                "@type": "ListItem",
                "position": 1,
                "item":
                {
                 "@id": "https://learn.fitvitals.dev/",
                 "name": "Web Vitals",
                 "url": "https://learn.fitvitals.dev/"
                 }
               },
               {
                "@type": "ListItem",
               "position": 2,
               "item":
                {
                  "@id": "https://learn.fitvitals.dev/metrics/cls",
                  "name": "Cumulative Layout Shift",
                  "url": "https://learn.fitvitals.dev/metrics/cls"
                }
               }
              ]
             }
        `,
          }}
        ></script>
      </Head>

      <main>
        <div class="container">
          <div>
            {/* breadcrumbs */}
            <nav className="flex items-center text-sm leading-5 font-medium">
              <Link href="/">
                <a className="text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out">
                  Web Vitals
                </a>
              </Link>

              <svg
                className="flex-shrink-0 mx-2 h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <Link href="/metrics/cls">
                <a className="text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out">
                  Cumulative Layout Shift
                </a>
              </Link>
            </nav>
          </div>
          <div className="flex flex-wrap justify-center pt-3 lg:pt-6">
            <div className="flex-row w-screen text-center">
              <h1 className="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-secondary sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
                Cumulative Layout Shift (CLS)
              </h1>
            </div>
            <article className="flex-row pt-12 prose">
              {causeShift && <div className="pt-full">{/* problem div */}</div>}
              <p>
                Cumulative Layout Shift (CLS) is a member of the new Core Web
                Vitals released by Google this May. The goal of this metric is
                to measure visual stability.
              </p>
              <p>More basically:</p>
              <div>
                <h2>Does this page jump around?</h2>
              </div>
              <div>
                <p>
                  Notice how this page shifted around while loading? That shift
                  contributes to our CLS score (refresh to see it again). Any
                  shift on the page can contribute to CLS if it causes the start
                  position of an element to change.
                </p>
              </div>
              <div>
                <h2>How is CLS calculated?</h2>
              </div>
              <div>
                <p>
                  Cumulative Layout Shift can be calculated with a simple
                  formula:{" "}
                </p>
                <span className="hidden md:inline p-2 bg-gray-300 italic">
                  layout shift score = impact fraction * distance fraction
                </span>
                <p className="inline md:hidden p-2 bg-gray-300 italic">
                  layout shift score
                </p>
                <p className="inline md:hidden p-2 bg-gray-300 italic">=</p>
                <br />
                <p className="inline md:hidden p-2 bg-gray-300 italic">
                  impact fraction * distance fraction
                </p>
              </div>
              <div>
                <p>
                  The <b>impact fraction</b> is the percentage of the viewport
                  that's impacted by the shift.
                </p>
                <p>
                  The <b>distance fraction</b> is the greatest distance any
                  element has moved divided by the viewport's largest dimension
                  (height or width).
                </p>
                <p>
                  Google has a great example here:{" "}
                  <a
                    href="https://web.dev/cls/#layout-shift-score"
                    target="_blank"
                  >
                    https://web.dev/cls/#layout-shift-score
                  </a>
                </p>
                <p>This result should be within the ranges below:</p>
              </div>
              <div className="inline md:hidden">
                <img
                  loading="lazy"
                  src="/cls-metric-threshold.svg"
                  alt="CLS range from Good to Poor. Good is less than .1. Needs Improvement is less than .25. Anything over is Poor."
                />
              </div>
              <div className="hidden md:inline">
                <img
                  loading="lazy"
                  src="/cls_range.svg"
                  alt="CLS range from Good to Poor. Good is less than .1. Needs Improvement is less than .25. Anything over is Poor."
                />
              </div>
              <div>
                <h2>Which elements impact CLS?</h2>
              </div>
              <div>
                <p>
                  Any element in the viewport that causes a shift in an
                  element's start position can cause your CLS to go up.
                </p>
                <p>This means a few things:</p>
                <ul>
                  <li>
                    Pay attention to all shifts, but especially ones in the
                    initial viewport (AKA above the fold).
                  </li>
                  <li>
                    Ensure all component loading states take up the same amount
                    of space as their final states.
                  </li>
                  <li>
                    Pay extra attention to the output of SSR/SSG output and the
                    page after it's hydrated.
                  </li>
                </ul>
              </div>
              <div>
                <h2>How can I debug CLS issues?</h2>
              </div>
              <div>
                <h3>Debugging SSR/SSG output</h3>
                <div>
                  <p>
                    The difference between your server-side rendered page and
                    your page's final state may be causing a CLS issue.
                  </p>
                  <p>
                    To debug this, try loading your page with{" "}
                    <b>JavaScript disabled</b>. This will allow you to see
                    what's loading during SSR (or SSG) and what's not.
                  </p>
                  <p>
                    As a rule of thumb, all components should have placeholders
                    during SSR that take up the same amount of space as their
                    finished state.
                  </p>
                </div>
                <h3>Finding the shifting elements</h3>
                <div>
                  <p>
                    If you can't spot elements causing CLS issues by eye,
                    consider using the performance profiling tools built into
                    Chrome.
                  </p>
                  <p>
                    By checking the box for{" "}
                    <b>Enable advanced paint instrumentation</b>, the profiler
                    will mark elements that cause CLS issues as well as the
                    target for your largest contentful paint (
                    <Link href="/metrics/lcp">
                      <a>LCP</a>
                    </Link>
                    ).
                  </p>
                  <img
                    loading="lazy"
                    src="/cls-shift-chrome-profiler-example.gif"
                    alt="gif showing the usage of the chrome profiler to spot CLS shift issues"
                  />
                </div>
              </div>
              <div>
                <h3>Quick fixes for CLS</h3>
                <ul>
                  <li>Use placeholders for elements while they are loading.</li>
                  <li>
                    Be sure your lazily loaded images have a placeholder or
                    height and width specified.
                  </li>
                  <li>
                    Debug the output of your SSR (mentioned above) and try to
                    get it to match the final state as closely as possible.
                  </li>
                </ul>
              </div>
              <div>
                <h2>How can I track my CLS score?</h2>
                <p>There are currently four ways to track your Web Vitals:</p>
                <ul>
                  <li>Page audits (Lighthouse and PageSpeed Insights)</li>
                  <li>A Chrome extension</li>
                  <li>Google Search Console</li>
                  <li>Manual tracking</li>
                </ul>
                <p>
                  Read{" "}
                  <Link href="/tracking-core-web-vitals">
                    <a>our guide</a>
                  </Link>{" "}
                  on tracking your site's vitals.
                </p>
              </div>
            </article>
          </div>
          <div className="pt-8">
            <Stats
              cls={myCLS}
              lcp={myLCP}
              fid={myFID}
              ttfb={myTTFB}
              isMissingMetrics={isMissingMetrics}
            />
          </div>
          <div className="pt-8">
            <button
              onClick={getMetricsFromLocalStorage}
              className="mt-3 w-full px-6 py-3 border border-transparent text-primary leading-6 font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-700 focus:outline-none focus:shadow-outline active:bg-green-900 transition duration-150 ease-in-out sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
            >
              Load my vitals
            </button>
          </div>
          <div>
            <Explore current="cls" />
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
export async function getStaticProps(context) {
  return {
    props: {},
  };
}

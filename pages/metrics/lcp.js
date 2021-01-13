import React, { useState } from "react";
import Head from "next/head";
import Stats from "../../components/stats";
import Link from "next/link";
import Explore from "../../components/explore";
import { useMetricsFromLocalStorage } from "../../utils/useMetricsFromLocalStorage";

export default function LargestContentfulPaint() {
  const [myLCP, setLCP] = useState(0);
  const [myCLS, setCLS] = useState(0);
  const [myFID, setFID] = useState(0);
  const [myTTFB, setTTFB] = useState(0);
  const [isMissingMetrics, setIsMissingMetrics] = useState(false);

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
                  "@id": "https://learn.fitvitals.dev/metrics/lcp",
                  "name": "Largest Contentful Paint",
                  "url": "https://learn.fitvitals.dev.com/metrics/lcp"
                }
               }
              ]
             }
        `,
          }}
        ></script>
      </Head>

      <main>
        <div className="container">
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
                  Largest Contentful Paint
                </a>
              </Link>
            </nav>
          </div>
          <div className="flex flex-wrap justify-center pt-3 lg:pt-6">
            <div className="flex-row w-screen text-center">
              <h1 className="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-secondary sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
                Largest Contentful Paint (LCP)
              </h1>
            </div>
            <article className="flex-row pt-12 prose">
              <p>
                Largest Contentful Paint (LCP) is a member of the new Core Web
                Vitals released by Google this May. The goal of the metrics is
                to measure the load time of the main content.
              </p>
              <p>More basically:</p>
              <div>
                <h2>Does the biggest thing on the screen load quickly?</h2>
              </div>
              <div>
                <h3>Example</h3>
                <p>
                  Here's a bunch of very large images curtesy of NASA and
                  SpaceX:
                </p>
                <img src="/big-image.jpg"></img>
                <img src="/another-big-image.jpg"></img>
                <img src="/astronaut.jpg"></img>
                <img src="/spacex.jpg"></img>
                <img src="/spacex-launch.jpg"></img>
                <p>
                  Because these images are so large, they slow down the
                  rendering of the page.
                </p>
              </div>
              <div>
                <h2>How is LCP calculated?</h2>
              </div>
              <div>
                <p>There's no complex formula for Largest Contentful Paint.</p>
                <p>
                  It is simply the render time for the largest block of text or
                  image visible within the viewport.
                </p>
                <p>This result should be within the ranges below:</p>
                <div className="inline md:hidden">
                  <img
                    loading="lazy"
                    src="/lcp-metric-threshold.svg"
                    alt="LCP range from Good to Poor. Good is less than 2.5 seconds. Needs Improvement is less than 4 seconds. Anything over is Poor."
                  />
                </div>
                <div className="hidden md:inline">
                  <img
                    loading="lazy"
                    src="/lcp-range.svg"
                    alt="CLS range from Good to Poor. Good is less than 2.5 seconds. Needs Improvement is less than 4 seconds. Anything over is Poor."
                  />
                </div>
              </div>
              <div>
                <h2>Which elements impact LCP?</h2>
              </div>
              <div>
                <p>
                  The largest text or image within the viewport is what is
                  measured.
                </p>
                <p>This means a few things:</p>
                <ul>
                  <li>
                    LCP closely resembles the perceived load time for most
                    users.
                  </li>
                  <li>
                    As your design changes, the tracked element can change. This
                    means mobile vs. desktop may track different elements.
                  </li>
                  <li>
                    Prioritize load times for elements in the initial viewport
                    as they will have the biggest impact.
                  </li>
                </ul>
              </div>
              <div>
                <h2>How can I debug LCP issues?</h2>
              </div>
              <div>
                <h3>Finding your LCP element</h3>
                <div>
                  <p>
                    If you can't spot your LCP target element by eye, the Chrome
                    profiler built into the developer tools can help.
                  </p>
                  <p>
                    By checking the box for{" "}
                    <b>Enable advanced paint instrumentation</b>, the profiler
                    will mark elements that cause{" "}
                    <Link href="/metrics/cls">
                      <a>CLS</a>
                    </Link>{" "}
                    issues as well as the target for your Largest Contentful
                    Paint.
                  </p>
                  <img
                    loading="lazy"
                    src="/lcp-chrome-profiler-example.gif"
                    alt="gif showing the usage of the chrome profiler to spot CLS shift issues and LCP"
                  />
                </div>
              </div>
              <div>
                <h3>Quick fixes for LCP</h3>
                <ul>
                  <li>
                    Focus on improving Time to First Byte (TTFB). The faster
                    your server responds, the faster the main content can
                    render.
                  </li>
                  <li>Lazy load all images not in the initial viewport.</li>
                  <li>Serve correctly sized images for the viewport size.</li>
                  <li>
                    Anything that improves First Contentful Paint (FCP){" "}
                    <i>should</i> improve LCP.
                  </li>
                </ul>
              </div>
              <div>
                <h2>How can I track my LCP score?</h2>
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
          </div>
          <div>
            <Explore current="lcp" />
          </div>
        </div>
      </main>
    </div>
  );
}
export async function getStaticProps(context) {
  return {
    props: {},
  };
}

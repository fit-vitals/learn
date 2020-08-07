import React, { useState } from "react";
import Head from "next/head";
import Stats from "../../components/stats";
import Link from "next/link";
import Explore from "../../components/explore";
import { useMetricsFromLocalStorage } from "../../utils/useMetricsFromLocalStorage";

export default function FirstInputDelay() {
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
                  "@id": "https://learn.fitvitals.dev/metrics/fid",
                  "name": "First Input Delay",
                  "url": "https://learn.fitvitals.dev/metrics/fid"
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
              <Link href="/metrics/fid">
                <a className="text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out">
                  First Input Delay
                </a>
              </Link>
            </nav>
          </div>
          <div className="flex flex-wrap justify-center pt-3 lg:pt-6">
            <div className="flex-row w-screen text-center">
              <h1 className="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
                First Input Delay (FID)
              </h1>
            </div>
            <article className="flex-row pt-12 prose">
              <p>
                First Input Delay (FID) is a member of the new Core Web Vitals
                released by Google this May. The goal of this metric is to
                measure the responsiveness of your site.
              </p>
              <p>More basically:</p>
              <div>
                <h2>Does this page respond when I click it?</h2>
              </div>
              <div>
                <p>
                  It's important that your pages load quickly. It's equally
                  important that your visitors can actually interact with that
                  page quickly as well.
                </p>
              </div>
              <div>
                <h2>How is FID calculated?</h2>
              </div>
              <div>
                <p>
                  Have you ever clicked on a textbox and had to wait a brief
                  moment for the site to respond to your click?
                </p>
                <p>
                  That's an <b>input delay</b>. FID is simply the measure of the
                  first input delay to happen on your site.
                </p>
                <p>
                  On the technical side, this means the metric measures from the
                  start of a user interaction event to the time when the browser
                  is able to begin processing the event with a handler.
                </p>
                <p>
                  FID is the time it takes between an input event and the next
                  time the main thread is idle.
                </p>
                <p>This result should be within the ranges below:</p>
              </div>
              <div className="inline md:hidden">
                <img
                  loading="lazy"
                  src="/fid-metric-threshold.svg"
                  alt="FID range from Good to Poor. Good is less than 100 ms. Needs Improvement is less than 300 ms. Anything over is Poor."
                />
              </div>
              <div className="hidden md:inline">
                <img
                  loading="lazy"
                  src="/fid-range.svg"
                  alt="FID range from Good to Poor. Good is less than 100 ms. Needs Improvement is less than 300 ms. Anything over is Poor."
                />
              </div>
              <div>
                <h2>Which elements impact FID?</h2>
              </div>
              <div>
                <p>
                  Any element that can receive an input event can impact FID,
                  including:
                </p>
                <ul>
                  <li>
                    All
                    <span className="text-pink-500 font-mono text-base">
                      {" <input> "}
                    </span>
                    elements
                  </li>
                  <li>
                    <span className="text-pink-500 font-mono text-base">
                      {" <a>"}
                    </span>{" "}
                    tags
                  </li>
                  <li>Dropdowns</li>
                </ul>
              </div>
              <div>
                <h2>How can I debug FID issues?</h2>
              </div>
              <div>
                <p>
                  FID is a metric that can only be collected <b>in the field</b>
                  , meaning real users must interact with your site.
                </p>
                <p>
                  If you're not using a real user monitoring (RUM) tool,
                  consider trying to improve your Total Blocking Time (TBT).
                  Google claims that TBT serves as a great proxy for FID.
                </p>
                <p>
                  Google has a very thorough guide for improving your FID{" "}
                  <a href="https://web.dev/optimize-fid/" target="_blank">
                    here
                  </a>
                  .
                </p>
                <p>
                  Be sure to install the Chrome extension to keep an eye on your
                  First Input Delay while developing/browsing your site.
                </p>
              </div>
              <div>
                <h3>Quick fixes for FID</h3>
                <ul>
                  <li>Reduce both first party and third party scripts.</li>
                  <li>Chunk your code to optimize bundle size.</li>
                  <li>
                    Defer non-critical JavaScript with{" "}
                    <span className="text-pink-500 font-mono text-base">
                      async
                    </span>{" "}
                    or{" "}
                    <span className="text-pink-500 font-mono text-base">
                      defer
                    </span>
                    .
                  </li>
                </ul>
              </div>
              <div>
                <h2>How can I track my FID score?</h2>
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
                className="mt-3 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-700 focus:outline-none focus:shadow-outline active:bg-gray-900 transition duration-150 ease-in-out sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
              >
                Load my vitals
              </button>
            </div>
          </div>
          <div>
            <Explore current="fid" />
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

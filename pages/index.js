import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import FloatingBanner from "../components/floating-banner";
import { useMetricsFromLocalStorage } from "../utils/useMetricsFromLocalStorage";
const ReportWebVitalsSnippet = dynamic(() =>
  import("../components/reportWebVitalsSnippet")
);
import dynamic from "next/dynamic";
const DynamicStats = dynamic(() => import("../components/stats"));
const Explore = dynamic(() => import("../components/explore"));

export default function Home() {
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
    <div className="container mx-auto p-8 md:p-12">
      <Head>
        <title>Fit Vitals - Core Web Vitals Guide</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <div className="flex flex-wrap justify-center">
            <div className="flex-row w-screen text-center">
              <h1 className="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-secondary sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
                Core Web Vitals Guide
              </h1>
            </div>
            <div className="flex-row pt-8 prose">
              <h2>What are Web Vitals?</h2>
              <p>
                <a href="https://web.dev/vitals/" target="_blank">
                  Web Vitals
                </a>{" "}
                is an initiative by Google to provide unified guidance for
                quality signals that are essential to delivering a great user
                experience on the web.
              </p>
              <div>
                <p>
                  Google measures your vitals each time a Chrome user visits
                  your site (via the{" "}
                  <a
                    target="_blank"
                    href="https://developers.google.com/web/tools/chrome-user-experience-report"
                  >
                    User Experience Report
                  </a>
                  ).
                </p>
                <p>
                  The three main (or core) Web Vitals are:
                  <ul>
                    <li>Cumulative Layout Shift (CLS)</li>
                    <li>Largest Contentful Paint (LCP)</li>
                    <li>First Input Delay (FID)</li>
                  </ul>
                </p>
                <p>
                  These are user-centric metrics serve as Google's best attempt
                  at finding metrics that convey a positive user experience.
                </p>
              </div>
              <div>
                <h2>How do I track Web Vitals?</h2>
                <h3>In Next.js</h3>
                <p>
                  If you're using Next.js to build your site, you have automatic
                  Web Vitals tracking built in (on versions 9.4+).
                </p>
                <p>
                  To capture these vitals, it's as simple as adding this snippet
                  to your{" "}
                  <span className="text-pink-500 font-mono text-base">
                    `pages/_app.js`
                  </span>
                  :
                </p>
                <ReportWebVitalsSnippet />
                <p>
                  This snippet will monitor real user data as they load your
                  site. This is a somewhat new approach in the performance
                  monitoring field called Real User Monitoring (RUM).
                </p>
                <h3>In Nuxt</h3>
                <p>
                  There's a Nuxt build module that supports sending your vitals
                  to Google Analytics as custom events. Simply install the
                  plugin and add it to your `nuxt.config.js`.
                  {
                    " Note: the install instructions are different for versions < v2.9."
                  }
                </p>
                <p>
                  <span className="text-pink-500 font-mono text-base">
                    npm i --save-dev nuxt-vitals
                  </span>
                </p>
                <p>
                  Check out{" "}
                  <a
                    href="https://github.com/daliborgogic/nuxt-vitals"
                    target="_blank"
                  >
                    nuxt-vitals
                  </a>{" "}
                  on GitHub.
                </p>
                <h3>In Gatsby</h3>
                <p>
                  Gatsby has a great plugin ecosystem. There's a very similar
                  plugin for sending vitals to Google Analytics. Simply install
                  the plugin and modify your `gatsby-config.js`.
                </p>
                <p>
                  <span className="text-pink-500 font-mono text-base">
                    npm i gatsby-plugin-web-vitals
                  </span>
                </p>
                <p>
                  Check out{" "}
                  <a
                    href="https://github.com/bejamas/gatsby-plugin-web-vitals"
                    target="_blank"
                  >
                    gatsby-plugin-web-vitals
                  </a>{" "}
                  on GitHub.
                </p>
                <h3>Everywhere else</h3>
                <p>
                  Google is simplifying its metrics across the board. These new
                  Core Web Vitals are in about every performance monitoring tool
                  Google makes.
                </p>
                <p>
                  This means there are plenty of tracking options to choose
                  from:
                </p>
                <ul>
                  <li>Page audits (Lighthouse and PageSpeed Insights)</li>
                  <li>A Chrome extension</li>
                  <li>Google Search Console</li>
                  <li>Manual tracking</li>
                </ul>

                <p>
                  I created a more detailed overview of{" "}
                  <Link href="/tracking-core-web-vitals">
                    <a>these tracking options</a>
                  </Link>
                  .
                </p>
              </div>
              <div>
                <h2>Why do Core Web Vitals matter?</h2>
                <p>
                  Core Web Vitals were created with the intention to align user
                  experience, performance monitoring, and search ranking.
                </p>
                <p>
                  Because Google is driving adoption of these metrics
                  everywhere, expect your Lighthouse audit, search rank, and
                  user experience to rely on Core Web Vitals.
                </p>
                <p>
                  Google stated in a{" "}
                  <a
                    href="https://webmasters.googleblog.com/2020/05/evaluating-page-experience.html"
                    target="_blank"
                  >
                    blog post
                  </a>{" "}
                  that Core Web Vitals won't play a part in Page Rank until
                  early 2021.
                </p>
                <p>
                  While that does give you some time to prepare, really only CLS
                  is a <i>new</i> metric.
                </p>
                <p>
                  LCP and FID are directly tied to other existing metrics Google
                  uses for Page Rank already. LCP is very closely tied to First
                  Contentful Paint (FCP). FID is very closely tied to Time to
                  Interactive (TTI).
                </p>
                <p>
                  <b>
                    By improving your Core Web Vitals, you're improving your
                    current UX while future-proofing your site's SEO.
                  </b>
                </p>
              </div>
            </div>
          </div>
          <div className="pt-8 md:pt-12">
            <DynamicStats
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
              className="mt-3 w-full px-6 py-3 border border-transparent text-primary leading-6 font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-700 focus:outline-none focus:shadow-outline active:bg-primary transition duration-150 ease-in-out sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
            >
              Load my vitals
            </button>
          </div>
          <div className="pt-8">
            <Explore />
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

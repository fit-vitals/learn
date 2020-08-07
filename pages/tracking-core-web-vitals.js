import React from "react";
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import HowToTrackWebVitals from "../components/howToTrackWebVitals";
const ReportWebVitalsSnippet = dynamic(() =>
  import("../components/reportWebVitalsSnippet")
);
const Explore = dynamic(() => import("../components/explore"));

export default function TrackingCoreWebVitals() {
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
              "@id": "https://learn.fitvitals.dev/how-to-track-web-vitals",
              "name": "How to Track Web Vitals",
              "url": "https://learn.fitvitals.dev/how-to-track-web-vitals"
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
              <Link href="/how-to-track-web-vitals">
                <a className="text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out">
                  How to Track Web Vitals
                </a>
              </Link>
            </nav>
          </div>
          <div className="flex flex-wrap justify-center pt-3 lg:pt-6">
            <div className="flex-row w-screen text-center">
              <h1 className="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
                How to Track Web Vitals
              </h1>
            </div>
            <article className="flex-row pt-8 prose">
              <HowToTrackWebVitals />
            </article>
          </div>
          <div>
            <Explore current="track" />
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

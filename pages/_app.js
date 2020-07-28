import React, { useEffect } from "react";
import "../css/tailwind.css";
import "../css/loading.scss";
import Head from "next/head";
import Footer from "../components/footer";
import GoogleFonts from "next-google-fonts";
import * as Fathom from "fathom-client";
import { useRouter } from "next/router";
import { getMetricCodeFromName } from "../utils/metricHelper";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Initialize Fathom when the app loads
    Fathom.load("BNGCHJEV", {
      url: "https://bovid.vitals.guide/script.js",
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on("routeChangeComplete", onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Vitals.Guide</title>
        <meta name="title" content="Vitals.Guide" />
        <meta
          name="description"
          content="An interactive guide for exploring Core Web Vitals. Start tracking and improving your Web Vitals today."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vitals.guide/" />
        <meta property="og:title" content="Vitals.Guide" />
        <meta
          property="og:description"
          content="An interactive guide for exploring Core Web Vitals. Start tracking and improving your Web Vitals today."
        />
        <meta
          property="og:image"
          content="https://vitals.guide/vitals-guide.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://vitals.guide/" />
        <meta property="twitter:title" content="Vitals.Guide" />
        <meta
          property="twitter:description"
          content="An interactive guide for exploring Core Web Vitals. Start tracking and improving your Web Vitals today."
        />
        <meta
          property="twitter:image"
          content="https://vitals.guide/vitals-guide.png"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

export function reportWebVitals(metric) {
  try {
    console.log(metric);
    window.localStorage.setItem(metric.name, metric.value);
    const metricCode = getMetricCodeFromName(metric.name);
    if (metricCode) {
      Fathom.trackGoal(metricCode, metric.value);
    }
  } catch (e) {
    console.log(e, metric);
  }
}

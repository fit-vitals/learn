import dynamic from "next/dynamic";
const ReportWebVitalsSnippet = dynamic(() =>
  import("./reportWebVitalsSnippet")
);
export default function HowToTrackWebVitals(props) {
  return (
    <>
      <h3>Lighthouse & PageSpeed Insights</h3>
      <p>
        You can track your Web Vitals in Lighthouse audits, but only to an
        extent. To have a complete picture of your Core Web Vitals, you must
        track data both in <b>the lab</b> and in <b>the field</b>.
      </p>
      <p>
        Local Lighthouse audits will point you in the right direction, but are
        only lab-based results.
      </p>
      <p>
        To measure Core Web Vitals in the field, Google pulls data from the{" "}
        <a
          href="https://developers.google.com/web/tools/chrome-user-experience-report"
          target="_blank"
        >
          Chrome User Experience report
        </a>
        . This is data from <i>real</i> users.
      </p>
      <p>
        By running a{" "}
        <a
          href="https://developers.google.com/speed/pagespeed/insights/"
          target="_blank"
        >
          PageSpeed Insight report
        </a>
        , you can look at both lab and field data.
      </p>
      <img
        loading="lazy"
        src="/pagespeed-insights-field-data-vs-lab.png"
        alt="pagespeed insight results showing lab and field data"
      />
      <h3>Chrome Extension</h3>
      <p>
        The Google team has made an extension that helps track Core Web Vitals
        as you browse and develop your site.
      </p>
      <img
        loading="lazy"
        src="/web-vitals-brave-browser-extension.png"
        alt="web vitals plugin for chromium based browsers"
      />
      <p>
        This extension works in any Chromium-based browser. I've used it in both
        Chrome and Brave. It's a great addition to my developer workflow.
      </p>
      <p>
        You can download it{" "}
        <a
          href="https://chrome.google.com/webstore/detail/web-vitals/ahfhijdlegdabablpippeagghigmibma"
          target="_blank"
        >
          here
        </a>
        .
      </p>

      <h3>Google Search Console</h3>
      <p>
        Part of the reason Google introduced Web Vitals was to standardize
        metrics across all their tools, developer and marketing alike.
      </p>
      <img
        loading="lazy"
        src="/core-web-vitals-gsc.png"
        alt="core web vitals in google search console"
      />
      <p>
        In Google Search Console (GSC), the metrics are grouped into both{" "}
        <b>Mobile</b> and <b>Desktop</b>. These reports will highlight areas for
        improvement and even point you to the specific pages with issues.
      </p>
      <p>
        While Google Search Console is normally not part of the developer
        workflow, GSC is currently the best tool for finding and fixing Core Web
        Vital issues. I highly recommend getting access to your site's console.
      </p>
      <h3>DIY Tracking</h3>
      <p>
        While it is more effort, you can setup a DIY solution to measuring,
        collecting, and analyzing the Core Web Vitals for your site.
      </p>
      <h4>In Next.js 9.4+</h4>
      <p>
        If you're working in a Next.js app that's on version 9.4 or later,
        you're in luck. The framework automatically collects Web Vitals for you
        and they are easily accessible.
      </p>
      <p>
        In your{" "}
        <span className="text-pink-500 font-mono text-base">
          `pages/_app.js`
        </span>
        , add a method name{" "}
        <span className="text-pink-500 font-mono text-base">
          reportWebVitals
        </span>{" "}
        like in the example below.
      </p>
      <ReportWebVitalsSnippet />
      <p>
        You can then send these data points to Google Analytics or any other
        custom analytics solution.
      </p>
      <p>
        The Next.js team wrote up a guide about it{" "}
        <a
          href="https://nextjs.org/docs/advanced-features/measuring-performance"
          target="_blank"
        >
          here
        </a>
        .
      </p>
      <h3>In Nuxt</h3>
      <p>
        There's a Nuxt build module that supports sending your vitals to Google
        Analytics as custom events. Simply install the plugin and add it to your
        `nuxt.config.js`.
        {" Note: the install instructions are different for versions < v2.9."}
      </p>
      <p>
        <span className="text-pink-500 font-mono text-base">
          npm i --save-dev nuxt-vitals
        </span>
      </p>
      <p>
        Check out{" "}
        <a href="https://github.com/daliborgogic/nuxt-vitals" target="_blank">
          nuxt-vitals
        </a>{" "}
        on GitHub.
      </p>
      <h3>In Gatsby</h3>
      <p>
        Gatsby has a great plugin ecosystem. There's a very similar plugin for
        sending vitals to Google Analytics. Simply install the plugin and modify
        your `gatsby-config.js`.
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
      <h4>Everywhere else</h4>
      <p>
        If you're not using Next.js, Nuxt, or Gatsby, you can add the{" "}
        <a href="https://github.com/GoogleChrome/web-vitals" target="_blank">
          web-vitals
        </a>{" "}
        package to your project to collect the metrics manually.
      </p>
      <p>
        Web-vitals is an open-source package built by the Google team for
        measuring Web Vitals in the wild.
      </p>
      <p>
        After you've collected these metrics, follow the guide above to send
        your metrics to Google Analytics or some other custom back end solution.
      </p>
      <p>
        Overall, the DIY approach is <b>a lot</b> of work if you're not using a
        framework that supports easily tracking Core Web Vitals.
      </p>
    </>
  );
}

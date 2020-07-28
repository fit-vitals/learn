export const useMetricsFromLocalStorage = () => {
  let hasMissingValue = false;

  const cls = window.localStorage.getItem("CLS");
  const lcp = window.localStorage.getItem("LCP");
  const fid = window.localStorage.getItem("FID");
  const ttfb = window.localStorage.getItem("TTFB");

  const formattedCLS = cls ? parseFloat(cls).toFixed(3) : -1;
  const formattedLCP = lcp ? parseFloat(lcp / 1000).toFixed(3) : -1;
  const formattedFID = fid ? parseFloat(fid).toFixed(3) : -1;
  const formattedTTFB = ttfb ? parseFloat(ttfb).toFixed(2) : -1;

  if (cls == null || lcp == null || fid == null || ttfb == null) {
    hasMissingValue = true;
  }

  return {
    formattedCLS,
    formattedLCP,
    formattedFID,
    formattedTTFB,
    hasMissingValue,
  };
};

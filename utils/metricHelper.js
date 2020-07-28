const metrics = {
  FCP: "SP4B3LHJ",
  LCP: "DKORETDM",
  TTFB: "D5KGBO42",
  FID: "1DYLJKUU",
  CLS: "CZVG0P1A",
};

export const getMetricCodeFromName = (name) => {
  return metrics[name];
};

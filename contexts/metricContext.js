import React, { createContext, useState } from "react";

export const MetricContext = createContext();

export const MetricProvider = ({ children }) => {
  const [myLCP, setLCP] = useState(-1);
  const [myCLS, setCLS] = useState(-1);
  const [myFID, setFID] = useState(-1);
  const [myTTFB, setTTFB] = useState(-1);

  return (
    <MetricContext.Provider
      value={{
        myLCP,
        myCLS,
        myFID,
        myTTFB,
        setLCP,
        setCLS,
        setFID,
        setTTFB,
      }}
    >
      {children}
    </MetricContext.Provider>
  );
};

import React, { useEffect, useState } from "react";
import UpTag from "./up-tag";
import DownTag from "./down-tag";

export default function Stats({
  cls,
  lcp,
  fid,
  ttfb,
  showCLSError,
  isMissingMetrics,
}) {
  return (
    <div>
      <h3 className="text-xl leading-6 font-medium text-gray-900">
        Your Web Vitals on this page
      </h3>
      <div className="mt-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow md:grid-cols-4">
        <div>
          <div className="px-4 py-5 sm:p-6">
            <dl>
              <dt className="text-base leading-6 font-normal text-gray-900">
                Cumulative Layout Shift (CLS)
              </dt>
              <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                {cls === -1 ? (
                  <div className="flex items-baseline text-2xl leading-8 font-semibold text-blue-600 skeleton-box">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="ml-2 text-sm leading-5 font-medium text-gray-500"></span>
                  </div>
                ) : (
                  <div className="flex items-baseline text-2xl leading-8 font-semibold text-blue-600">
                    {cls}
                    <span className="ml-2 text-sm leading-5 font-medium text-gray-500"></span>
                  </div>
                )}
                {cls !== -1 && (
                  <>
                    {cls <= 0.1 && (
                      <UpTag message={"Under"} value={"Under .1"} />
                    )}
                    {cls > 0.1 && (
                      <DownTag message={"Over"} value={"Over .1"} />
                    )}
                  </>
                )}
              </dd>
            </dl>
          </div>
        </div>
        <div className="border-t border-gray-200 md:border-0 md:border-l">
          <div className="px-4 py-5 sm:p-6">
            <dl>
              <dt className="text-base leading-6 font-normal text-gray-900">
                Largest Contentful Paint (LCP)
              </dt>
              <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                {lcp === -1 ? (
                  <div className="flex items-baseline text-2xl leading-8 font-semibold text-blue-600 skeleton-box">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="ml-2 text-sm leading-5 font-medium text-gray-500"></span>
                  </div>
                ) : (
                  <div className="flex items-baseline text-2xl leading-8 font-semibold text-blue-600">
                    {lcp}
                    <span className="ml-2 text-sm leading-5 font-medium text-gray-500">
                      sec
                    </span>
                  </div>
                )}
                {lcp !== -1 && (
                  <>
                    {lcp <= 2.5 && (
                      <UpTag message={"Under"} value={"Under 2.5 sec"} />
                    )}
                    {lcp > 2.5 && (
                      <DownTag message={"Over"} value={"Over 2.5 sec"} />
                    )}
                  </>
                )}
              </dd>
            </dl>
          </div>
        </div>
        <div className="border-t border-gray-200 md:border-0 md:border-l">
          <div className="px-4 py-5 sm:p-6">
            <dl>
              <dt className="text-base leading-6 font-normal text-gray-900">
                First Input Delay (FID)
              </dt>
              <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                {fid === -1 ? (
                  <div className="flex items-baseline text-2xl leading-8 font-semibold text-blue-600 skeleton-box">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="ml-2 text-sm leading-5 font-medium text-gray-500"></span>
                  </div>
                ) : (
                  <div className="flex items-baseline text-2xl leading-8 font-semibold text-blue-600">
                    {fid}
                    <span className="ml-2 text-sm leading-5 font-medium text-gray-500">
                      ms
                    </span>
                  </div>
                )}

                {fid !== -1 && (
                  <>
                    {fid <= 100 && (
                      <UpTag message={"Under"} value={"Under 100 ms"} />
                    )}
                    {fid > 100 && (
                      <DownTag message={"Over"} value={"Over 100 ms"} />
                    )}
                  </>
                )}
              </dd>
            </dl>
          </div>
        </div>
        <div className="border-t border-gray-200 md:border-0 md:border-l">
          <div className="px-4 py-5 sm:p-6">
            <dl>
              <dt className="text-base leading-6 font-normal text-gray-900">
                Time to First Byte (TTFB)
              </dt>
              <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                {ttfb === -1 ? (
                  <div className="flex items-baseline text-2xl leading-8 font-semibold text-blue-600 skeleton-box">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="ml-2 text-sm leading-5 font-medium text-gray-500"></span>
                  </div>
                ) : (
                  <div className="flex items-baseline text-2xl leading-8 font-semibold text-blue-600">
                    {ttfb}
                    <span className="ml-2 text-sm leading-5 font-medium text-gray-500">
                      sec
                    </span>
                  </div>
                )}

                {ttfb !== -1 && (
                  <>
                    {ttfb <= 600 && (
                      <UpTag message={"Under"} value={"Under 600 ms"} />
                    )}
                    {ttfb > 600 && (
                      <DownTag message={"Over"} value={"Over 600 ms"} />
                    )}
                  </>
                )}
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-600 pt-2">
        {isMissingMetrics && (
          <>*web vitals are not compatible with all browsers</>
        )}
      </div>
    </div>
  );
}

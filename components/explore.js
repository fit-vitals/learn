import Link from "next/link";

export default function Explore(props) {
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3"></div>
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
            Explore Vitals
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
            Check out these interactive examples to learn how to improve your
            Core Web Vitals.
          </p>
        </div>

        <div
          className={
            props.current
              ? "mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none"
              : "mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none"
          }
        >
          {props.current !== "cls" && (
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <Link href="/metrics/cls">
                  <img
                    loading="lazy"
                    className="h-48 w-full object-cover"
                    src="https://images.unsplash.com/photo-1550432426-649d74a6b2cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                    alt="a crack in the concrete"
                  />
                </Link>
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm leading-5 font-medium text-blue-600">
                    <Link href="/metrics/cls">
                      <a className="hover:underline">Core Web Vital</a>
                    </Link>
                  </p>
                  <Link href="/metrics/cls">
                    <a className="block">
                      <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                        Cumulative Layout Shift (CLS)
                      </h3>
                      <p className="mt-3 text-base leading-6 text-gray-500">
                        Cumulative Layout Shift (CLS) is a member of the new
                        Core Web Vitals released by Google this May. The goal of
                        this metric is to measure <b>visual stability</b>.
                      </p>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          )}
          {props.current !== "lcp" && (
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <Link href="/metrics/lcp">
                  <img
                    loading="lazy"
                    className="h-48 w-full object-cover"
                    src="https://images.unsplash.com/photo-1514726747853-42d4da9b5528?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                    alt="an easel on a busy street"
                  />
                </Link>
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm leading-5 font-medium text-blue-600">
                    <Link href="/metrics/lcp">
                      <a className="hover:underline">Core Web Vital</a>
                    </Link>
                  </p>
                  <Link href="/metrics/lcp">
                    <a className="block">
                      <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                        Largest Contentful Paint (LCP)
                      </h3>
                      <p className="mt-3 text-base leading-6 text-gray-500">
                        Largest Contentful Paint (LCP) is a member of the new
                        Core Web Vitals released by Google this May. The goal of
                        the metrics is to measure the{" "}
                        <b>main content load time</b>.
                      </p>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          )}
          {props.current !== "fid" && (
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <Link href="/metrics/fid">
                  <img
                    loading="lazy"
                    className="h-48 w-full object-cover"
                    src="https://images.unsplash.com/photo-1539800644988-3424dd648c2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                    alt="an alarm clock"
                  />
                </Link>
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm leading-5 font-medium text-blue-600">
                    <Link href="/metrics/fid">
                      <a className="hover:underline"> Core Web Vital</a>
                    </Link>
                  </p>
                  <Link href="/metrics/fid">
                    <a className="block">
                      <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                        First Input Delay (FID)
                      </h3>
                      <p className="mt-3 text-base leading-6 text-gray-500">
                        First Input Delay (FID) is a member of the new Core Web
                        Vitals released by Google this May. The goal of this
                        metric is to measure your site's <b>responsiveness</b>.
                      </p>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          )}
          {props.current !== "track" && (
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <Link href="/tracking-core-web-vitals">
                  <img
                    loading="lazy"
                    className="h-48 w-full object-cover"
                    src="https://images.unsplash.com/photo-1474546652694-a33dd8161d66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                    alt="a running track"
                  />
                </Link>
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm leading-5 font-medium text-blue-600">
                    <Link href="/metrics/fid">
                      <a className="hover:underline"> Guide </a>
                    </Link>
                  </p>
                  <Link href="/tracking-core-web-vitals">
                    <a className="block">
                      <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                        How to Track Core Web Vitals
                      </h3>
                      <p className="mt-3 text-base leading-6 text-gray-500">
                        What gets measured gets managed. Tracking your Core Web
                        Vitals is a critical step in improving your user
                        experience and SEO.
                      </p>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          )}
          {/* <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <img
                className="h-48 w-full object-cover"
                src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                alt=""
              />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm leading-5 font-medium text-blue-600">
                  <a href="/" className="hover:underline">
                    {" "}
                    Web Vital
                  </a>
                </p>
                <a href="/" className="block">
                  <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                    Time to Fist Byte (TTFB)
                  </h3>
                  <p className="mt-3 text-base leading-6 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint harum rerum voluptatem quo recusandae magni placeat
                    saepe molestiae, sed excepturi cumque corporis perferendis
                    hic.
                  </p>
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

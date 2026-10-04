import Image from "next/image";
import Link from "next/link";

const DealsSection = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary">
          {/* Background Decoration */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />
          <div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-white/10" />

          <div className="relative grid min-h-[400px] items-center lg:grid-cols-2">
            {/* Content */}
            <div className="z-10 px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
              <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-primary-content">
                Limited time offer
              </span>

              <h2 className="mt-5 max-w-lg text-4xl font-black tracking-tight text-primary-content sm:text-5xl">
                Fresh deals,
                <br />
                better prices.
              </h2>

              <p className="mt-5 max-w-md text-sm leading-6 text-primary-content/80 sm:text-base">
                Save more on your everyday groceries. Enjoy special prices
                across fresh produce, dairy, snacks, drinks and more.
              </p>

              <div className="mt-7 flex items-center gap-4">
                <div>
                  <p className="text-4xl font-black text-primary-content">
                    30%
                  </p>

                  <p className="text-xs font-medium uppercase tracking-wider text-primary-content/70">
                    OFF
                  </p>
                </div>

                <div className="h-12 w-px bg-primary-content/20" />

                <p className="max-w-[180px] text-sm text-primary-content/80">
                  On selected grocery products
                </p>
              </div>

              <Link
                href="/deals"
                className="btn mt-8 rounded-full border-none bg-white px-7 text-base-content hover:bg-white/90"
              >
                Shop todays deals
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h14m-6-6 6 6-6 6"
                  />
                </svg>
              </Link>
            </div>

            {/* Image */}
            <div className="relative  h-full min-h-[400px] lg:block">
              <Image
                src="/bread.jpg"
                alt="Fresh groceries"
                fill
                sizes="50vw"
                className="object-cover"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-primary/10" />

              {/* Floating Discount Card */}
              <div className="absolute bottom-10 left-10 rounded-2xl bg-base-100 p-5 shadow-xl">
                <p className="text-xs font-medium text-base-content/50">
                  Todays special
                </p>

                <p className="mt-1 text-xl font-bold">Fresh produce</p>

                <p className="mt-1 text-sm text-primary">Up to 30% off</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsSection;

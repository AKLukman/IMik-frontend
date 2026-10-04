import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-base-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[620px] items-center gap-10 py-16 lg:grid-cols-2 lg:py-20">
          {/* ================= LEFT CONTENT ================= */}
          <div className="relative z-10 max-w-2xl">
            {/* Small Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-base-300 bg-base-100 px-4 py-2 text-sm font-medium shadow-sm">
              <span className="h-2 w-2 rounded-full bg-primary" />
              New collection is here
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Find what
              <br />
              <span className="text-primary">you love.</span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-lg text-base leading-7 text-base-content/60 sm:text-lg">
              Discover thoughtfully selected products designed to make everyday
              life better. Quality products, great prices, and shopping made
              simple.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/shop" className="btn btn-primary rounded-full px-7">
                Shop Now
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

              <Link
                href="/new-arrivals"
                className="btn btn-outline rounded-full px-7"
              >
                Explore Collection
              </Link>
            </div>

            {/* Features */}
            <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-base-300 pt-6">
              <div>
                <p className="text-xl font-bold">10k+</p>
                <p className="mt-1 text-xs text-base-content/50 sm:text-sm">
                  Happy Customers
                </p>
              </div>

              <div>
                <p className="text-xl font-bold">500+</p>
                <p className="mt-1 text-xs text-base-content/50 sm:text-sm">
                  Products
                </p>
              </div>

              <div>
                <p className="text-xl font-bold">4.9/5</p>
                <p className="mt-1 text-xs text-base-content/50 sm:text-sm">
                  Customer Rating
                </p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative flex min-h-[420px] items-center justify-center lg:min-h-[560px]">
            {/* Decorative Background */}
            <div className="absolute right-0 top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-primary/10 blur-3xl sm:h-[450px] sm:w-[450px]" />

            {/* Image Container */}
            <div className="relative z-10 h-[400px] w-full max-w-[500px] overflow-hidden rounded-[2rem] bg-base-300 shadow-2xl sm:h-[500px]">
              <Image
                src="/product-01.jpg"
                alt="Featured products"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Floating Offer Card */}
            <div className="absolute bottom-8 left-2 z-20 rounded-2xl border border-base-200 bg-base-100/95 p-4 shadow-xl backdrop-blur sm:bottom-10 sm:left-0">
              <p className="text-xs font-medium text-base-content/50">
                Limited offer
              </p>

              <p className="mt-1 text-lg font-bold">Up to 30% OFF</p>

              <Link
                href="/deals"
                className="mt-2 inline-block text-sm font-semibold text-primary hover:underline"
              >
                Shop deals →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

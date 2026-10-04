import Link from "next/link";

const NewsletterSection = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-base-200 px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10" />
          <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-primary/10" />

          <div className="relative mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-content shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M3 8.5 12 14l9-5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
                />
              </svg>
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-primary">
              Stay in the loop
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Fresh deals, straight to your inbox
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-base-content/60 sm:text-base">
              Subscribe to get weekly grocery deals, new arrivals and exclusive
              offers delivered straight to your inbox.
            </p>

            {/* Form */}
            <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
              <label className="flex-1">
                <span className="sr-only">Email address</span>

                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="input input-bordered h-12 w-full rounded-full bg-base-100 px-5"
                  required
                />
              </label>

              <button
                type="submit"
                className="btn btn-primary h-12 rounded-full px-7"
              >
                Subscribe
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
              </button>
            </form>

            <p className="mt-4 text-xs text-base-content/40">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;

const features = [
  {
    title: "Fresh Products",
    description:
      "We carefully select fresh, high-quality groceries for your everyday needs.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.7"
          d="M12 21a8 8 0 1 0-8-8c0 5 8 8 8 8Zm0 0c2.5-2.2 3.5-4.8 3.5-8.5M12 7v6m0 0 3-2m-3 2-3-2"
        />
      </svg>
    ),
  },
  {
    title: "Fast Delivery",
    description:
      "Get your groceries delivered quickly and conveniently right to your door.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.7"
          d="M3 7h11v10H3zM14 10h4l3 3v4h-7zM7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      </svg>
    ),
  },
  {
    title: "Secure Payment",
    description:
      "Your payment information is protected with secure and trusted checkout.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.7"
          d="M12 3 5 6v5c0 4.8 2.9 8.2 7 10 4.1-1.8 7-5.2 7-10V6l-7-3Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.7"
          d="m9 12 2 2 4-4"
        />
      </svg>
    ),
  },
  {
    title: "Easy Returns",
    description:
      "Something not right? Our simple return process makes things easy.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.7"
          d="M4 12a8 8 0 0 1 13.7-5.6L20 9M20 9V4m0 5h-5M20 12a8 8 0 0 1-13.7 5.6L4 15m0 0v5m0-5h5"
        />
      </svg>
    ),
  },
];

const FeaturesSection = () => {
  return (
    <section className="border-y border-base-200 bg-base-100 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
            Why choose us
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Shopping made simple
          </h2>

          <p className="mt-3 text-sm leading-6 text-base-content/60 sm:text-base">
            Everything you need for a convenient and reliable grocery shopping
            experience.
          </p>
        </div>

        {/* Features */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-base-200 bg-base-100 p-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                {feature.icon}
              </div>

              <h3 className="mt-5 text-lg font-bold">{feature.title}</h3>

              <p className="mt-2 text-sm leading-6 text-base-content/60">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

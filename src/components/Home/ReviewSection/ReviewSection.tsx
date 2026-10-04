const reviews = [
  {
    name: "Sarah Mitchell",
    location: "London",
    rating: 5,
    review:
      "The fruits and vegetables were incredibly fresh, and everything arrived perfectly packed. Delivery was much faster than I expected.",
    initials: "SM",
  },
  {
    name: "James Wilson",
    location: "Manchester",
    rating: 5,
    review:
      "I've been ordering groceries here for a few months now. Great prices, excellent quality, and the delivery is always reliable.",
    initials: "JW",
  },
  {
    name: "Emily Carter",
    location: "Birmingham",
    rating: 4,
    review:
      "Really convenient grocery shopping experience. I especially love the fresh produce and the weekly deals.",
    initials: "EC",
  },
];

const ReviewsSection = () => {
  return (
    <section className="bg-base-200/40 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
            Customer reviews
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Loved by our customers
          </h2>

          <p className="mt-3 text-sm leading-6 text-base-content/60 sm:text-base">
            See what our customers say about their grocery shopping experience.
          </p>
        </div>

        {/* Overall Rating */}
        <div className="mx-auto mt-8 flex w-fit items-center gap-3 rounded-full border border-base-200 bg-base-100 px-5 py-3 shadow-sm">
          <div className="flex items-center gap-1 text-warning">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.5l2.94 5.95 6.56.95-4.75 4.63 1.12 6.54L12 17.48l-5.87 3.09 1.12-6.54L2.5 9.4l6.56-.95L12 2.5Z" />
              </svg>
            ))}
          </div>

          <span className="text-sm font-bold">4.8 out of 5</span>

          <span className="text-sm text-base-content/50">
            from 2,000+ reviews
          </span>
        </div>

        {/* Reviews */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="rounded-2xl border border-base-200 bg-base-100 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 text-warning">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 ${
                      star <= review.rating ? "fill-current" : "fill-base-300"
                    }`}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.5l2.94 5.95 6.56.95-4.75 4.63 1.12 6.54L12 17.48l-5.87 3.09L7.25 13.99 2.5 9.4l6.56-.95L12 2.5Z" />
                  </svg>
                ))}
              </div>

              {/* Review */}
              <p className="mt-5 text-sm leading-7 text-base-content/70">
                {review.review}
              </p>

              {/* Customer */}
              <div className="mt-6 flex items-center gap-3 border-t border-base-200 pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {review.initials}
                </div>

                <div>
                  <p className="text-sm font-semibold">{review.name}</p>

                  <p className="text-xs text-base-content/50">
                    {review.location}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

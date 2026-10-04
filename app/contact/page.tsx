import Link from "next/link";

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-base-100">
      <section className="border-b border-base-200 bg-base-200/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Get in touch
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              We&apos;d love to hear from you
            </h1>

            <p className="mt-5 text-base leading-7 text-base-content/60 sm:text-lg">
              Have a question about an order, product, delivery, or anything
              else? Our team is here to help.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <div>
                <h2 className="text-2xl font-bold">Contact information</h2>

                <p className="mt-3 text-sm leading-6 text-base-content/60">
                  Reach out to us using any of the options below. We normally
                  respond within one business day.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex gap-4 rounded-2xl border border-base-200 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
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

                  <div>
                    <p className="text-sm font-semibold">Email us</p>

                    <a
                      href="mailto:support@yourstore.com"
                      className="mt-1 block text-sm text-base-content/60 transition hover:text-primary"
                    >
                      support@yourstore.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 rounded-2xl border border-base-200 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M3 5a2 2 0 0 1 2-2h2.3a1 1 0 0 1 1 .76l1.1 4.4a1 1 0 0 1-.29.95L7.7 10.5a16 16 0 0 0 5.8 5.8l1.39-1.41a1 1 0 0 1 .95-.29l4.4 1.1a1 1 0 0 1 .76 1V19a2 2 0 0 1-2 2h-1C9.72 21 3 14.28 3 6V5Z"
                      />
                    </svg>
                  </div>

                  <div>
                    <p className="text-sm font-semibold">Call us</p>

                    <a
                      href="tel:+441234567890"
                      className="mt-1 block text-sm text-base-content/60 transition hover:text-primary"
                    >
                      +44 1234 567 890
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 rounded-2xl border border-base-200 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M12 21s7-5.1 7-11a7 7 0 1 0-14 0c0 5.9 7 11 7 11Z"
                      />
                      <circle cx="12" cy="10" r="2.5" strokeWidth="1.8" />
                    </svg>
                  </div>

                  <div>
                    <p className="text-sm font-semibold">Visit us</p>

                    <p className="mt-1 text-sm leading-6 text-base-content/60">
                      25 Market Street
                      <br />
                      London, UK
                    </p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="rounded-2xl border border-base-200 p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <circle cx="12" cy="12" r="8.5" strokeWidth="1.8" />
                        <path
                          strokeLinecap="round"
                          strokeWidth="1.8"
                          d="M12 7v5l3 2"
                        />
                      </svg>
                    </div>

                    <p className="text-sm font-semibold">Opening hours</p>
                  </div>

                  <div className="mt-4 space-y-2 text-sm text-base-content/60">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>8:00 - 20:00</span>
                    </div>

                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>9:00 - 18:00</span>
                    </div>

                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>10:00 - 16:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-3xl border border-base-200 bg-base-100 p-6 shadow-sm sm:p-8 lg:p-10">
                <div>
                  <h2 className="text-2xl font-bold">Send us a message</h2>

                  <p className="mt-2 text-sm text-base-content/60">
                    Fill out the form and our team will get back to you as soon
                    as possible.
                  </p>
                </div>

                <form className="mt-8 space-y-6">
                  {/* Name + Email */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium"
                      >
                        Your name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Smith"
                        className="input input-bordered w-full rounded-xl"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium"
                      >
                        Email address
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        className="input input-bordered w-full rounded-xl"
                        required
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-medium"
                    >
                      Subject
                    </label>

                    <select
                      id="subject"
                      name="subject"
                      className="select select-bordered w-full rounded-xl"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a subject
                      </option>
                      <option value="order">Question about my order</option>
                      <option value="delivery">Delivery question</option>
                      <option value="product">Product question</option>
                      <option value="refund">Refund or return</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Order Number */}
                  <div>
                    <label
                      htmlFor="order"
                      className="mb-2 block text-sm font-medium"
                    >
                      Order number
                      <span className="ml-1 text-base-content/40">
                        (optional)
                      </span>
                    </label>

                    <input
                      id="order"
                      name="order"
                      type="text"
                      placeholder="e.g. #ORD-10245"
                      className="input input-bordered w-full rounded-xl"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="How can we help you?"
                      className="textarea textarea-bordered w-full rounded-xl"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-full rounded-xl sm:w-auto sm:px-10"
                  >
                    Send message
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ CTA ================= */}
      <section className="border-t border-base-200 bg-base-200/40 py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold">Looking for a quick answer?</h2>

          <p className="mt-3 text-sm leading-6 text-base-content/60">
            Check our frequently asked questions for information about delivery,
            payments, returns and orders.
          </p>

          <Link href="/faq" className="btn btn-outline mt-6 rounded-full px-7">
            Visit FAQ
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;

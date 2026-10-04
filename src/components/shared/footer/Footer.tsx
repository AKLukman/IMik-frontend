"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-base-200 bg-base-100">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-block text-3xl font-black tracking-tight"
            >
              IMiK<span className="text-primary">.</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-base-content/60">
              Discover products you will love. We make online shopping simple,
              reliable, and enjoyable with carefully selected products and
              excellent customer service.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-2">
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="btn btn-circle btn-sm border-base-300 bg-transparent hover:border-primary hover:bg-primary hover:text-primary-content"
              >
                <span className="text-sm font-bold">f</span>
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="btn btn-circle btn-sm border-base-300 bg-transparent hover:border-primary hover:bg-primary hover:text-primary-content"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <rect
                    width="17"
                    height="17"
                    x="3.5"
                    y="3.5"
                    rx="4"
                    strokeWidth="1.8"
                  />

                  <circle cx="12" cy="12" r="4" strokeWidth="1.8" />

                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>

              {/* X */}
              <a
                href="#"
                aria-label="X"
                className="btn btn-circle btn-sm border-base-300 bg-transparent hover:border-primary hover:bg-primary hover:text-primary-content"
              >
                <span className="text-sm font-medium">𝕏</span>
              </a>

              {/* YouTube */}
              <a
                href="#"
                aria-label="YouTube"
                className="btn btn-circle btn-sm border-base-300 bg-transparent hover:border-primary hover:bg-primary hover:text-primary-content"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.9V8.1l6.5 3.9-6.5 3.9Z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider">
              Shop
            </h3>

            <ul className="space-y-3 text-sm text-base-content/60">
              <li>
                <Link
                  href="/shop"
                  className="transition-colors hover:text-base-content"
                >
                  All Products
                </Link>
              </li>

              <li>
                <Link
                  href="/new-arrivals"
                  className="transition-colors hover:text-base-content"
                >
                  New Arrivals
                </Link>
              </li>

              <li>
                <Link
                  href="/best-sellers"
                  className="transition-colors hover:text-base-content"
                >
                  Best Sellers
                </Link>
              </li>

              <li>
                <Link
                  href="/deals"
                  className="transition-colors hover:text-base-content"
                >
                  Deals & Offers
                </Link>
              </li>

              <li>
                <Link
                  href="/collections"
                  className="transition-colors hover:text-base-content"
                >
                  Collections
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider">
              Support
            </h3>

            <ul className="space-y-3 text-sm text-base-content/60">
              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-base-content"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  href="/faq"
                  className="transition-colors hover:text-base-content"
                >
                  FAQ
                </Link>
              </li>

              <li>
                <Link
                  href="/shipping"
                  className="transition-colors hover:text-base-content"
                >
                  Shipping & Delivery
                </Link>
              </li>

              <li>
                <Link
                  href="/returns"
                  className="transition-colors hover:text-base-content"
                >
                  Returns & Refunds
                </Link>
              </li>

              <li>
                <Link
                  href="/order-tracking"
                  className="transition-colors hover:text-base-content"
                >
                  Track Your Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider">
              Company
            </h3>

            <ul className="space-y-3 text-sm text-base-content/60">
              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-base-content"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/careers"
                  className="transition-colors hover:text-base-content"
                >
                  Careers
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy"
                  className="transition-colors hover:text-base-content"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms"
                  className="transition-colors hover:text-base-content"
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  href="/cookies"
                  className="transition-colors hover:text-base-content"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-base-200 pt-6">
          <div className="flex flex-col gap-4 text-sm text-base-content/50 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} IMK. All rights reserved.</p>

            <div className="flex flex-wrap items-center gap-4">
              <span>Secure payments</span>

              <div className="flex items-center gap-2">
                <span className="rounded border border-base-300 px-2 py-1 text-xs font-semibold">
                  VISA
                </span>

                <span className="rounded border border-base-300 px-2 py-1 text-xs font-semibold">
                  MC
                </span>

                <span className="rounded border border-base-300 px-2 py-1 text-xs font-semibold">
                  AMEX
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

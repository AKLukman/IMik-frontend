"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navlinks = (
    <>
      <li>
        <Link href="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
      </li>

      <li>
        <details>
          <summary>Shop</summary>

          <ul>
            <li>
              <Link href="/shop/men" onClick={() => setMenuOpen(false)}>
                Men
              </Link>
            </li>

            <li>
              <Link href="/shop/women" onClick={() => setMenuOpen(false)}>
                Women
              </Link>
            </li>

            <li>
              <Link href="/shop/electronics" onClick={() => setMenuOpen(false)}>
                Electronics
              </Link>
            </li>

            <li>
              <Link href="/shop/accessories" onClick={() => setMenuOpen(false)}>
                Accessories
              </Link>
            </li>
          </ul>
        </details>
      </li>

      <li>
        <Link href="/new-arrivals" onClick={() => setMenuOpen(false)}>
          New Arrivals
        </Link>
      </li>

      <li>
        <Link href="/deals" onClick={() => setMenuOpen(false)}>
          Deals
        </Link>
      </li>

      <li>
        <Link href="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-base-200 bg-base-100/95 backdrop-blur">
      <div className="navbar mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="navbar-start">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="btn btn-ghost btn-circle lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
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
                  d="M6 6l12 12M6 18L18 6"
                />
              </svg>
            ) : (
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Logo */}
          <Link
            href="/"
            className="btn btn-ghost px-0 text-2xl font-black tracking-tight hover:bg-transparent"
          >
            IMiK<span className="text-primary">.</span>
          </Link>
        </div>

        <nav className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal items-center gap-1 px-1 font-medium">
            {navlinks}
          </ul>
        </nav>

        <div className="navbar-end gap-1 sm:gap-2">
          {/* Search */}
          <div
            className={`relative flex items-center transition-all duration-300 ${
              searchOpen ? "w-52 sm:w-64" : "w-10"
            }`}
          >
            {/* Search Input */}
            {searchOpen && (
              <input
                autoFocus
                type="text"
                placeholder="Search products..."
                className="input input-sm input-bordered w-full rounded-full pr-20"
              />
            )}

            {/* Search Icon */}
            <button
              onClick={() => setSearchOpen(true)}
              className={`btn btn-ghost btn-circle ${
                searchOpen ? "absolute right-10" : ""
              }`}
              aria-label="Open search"
            >
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
                  d="m21 21-4.35-4.35m2.1-5.4a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
                />
              </svg>
            </button>

            {/* Close Search */}
            {searchOpen && (
              <button
                onClick={() => setSearchOpen(false)}
                className="btn btn-ghost btn-circle absolute right-0"
                aria-label="Close search"
              >
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
                    d="M6 6l12 12M6 18L18 6"
                  />
                </svg>
              </button>
            )}
          </div>

          {/* Wishlist */}
          <button
            className="btn btn-ghost btn-circle hidden sm:flex"
            aria-label="Wishlist"
          >
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
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"
              />
            </svg>
          </button>

          {/* Cart */}
          <button
            className="btn btn-ghost btn-circle"
            aria-label="Shopping cart"
          >
            <div className="indicator">
              <span className="indicator-item badge badge-primary badge-xs">
                3
              </span>

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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13 5.4 5M7 13l-1.5 1.5A1 1 0 0 0 6.2 16h10.3M9 19.5a1 1 0 1 0 0 .01M17 19.5a1 1 0 1 0 0 .01"
                />
              </svg>
            </div>
          </button>

          {/* Account */}
          <div className="dropdown dropdown-end">
            <button
              tabIndex={0}
              className="btn btn-ghost btn-circle"
              aria-label="Account"
            >
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
                  d="M20 21a8 8 0 0 0-16 0M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                />
              </svg>
            </button>

            <ul
              tabIndex={-1}
              className="menu dropdown-content z-50 mt-3 w-52 rounded-2xl border border-base-200 bg-base-100 p-2 shadow-xl"
            >
              <li>
                <Link href="/account">My Account</Link>
              </li>

              <li>
                <Link href="/orders">My Orders</Link>
              </li>

              <li>
                <Link href="/wishlist">Wishlist</Link>
              </li>

              <li>
                <Link href="/login">Sign In</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-base-200 bg-base-100 shadow-lg lg:hidden">
          <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <ul className="menu w-full gap-1 p-0 font-medium">{navlinks}</ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

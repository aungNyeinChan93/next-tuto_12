"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navlinks = () => {
  const pathname = usePathname();
  return (
    <React.Fragment>
      <div className="flex w-full items-center  sm:justify-between">
        <nav aria-label="Global" className="hidden md:block">
          <SignedIn>
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link
                  className={` transition hover:text-gray-500/75 ${
                    pathname === "/" ? "!text-red-600" : "!text-gray-500"
                  }`}
                  href="/"
                >
                  {" "}
                  Home{" "}
                </Link>
              </li>

              <li>
                <Link
                  className={`transition hover:text-gray-500/75 ${
                    pathname === "/tests" ? "text-red-600" : "text-gray-500"
                  }`}
                  href={"/tests"}
                >
                  {" "}
                  Tests{" "}
                </Link>
              </li>

              <li>
                <Link
                  className={`transition hover:text-gray-500/75 ${
                    pathname === "/tests/posts"
                      ? "text-red-600"
                      : "text-gray-500"
                  }`}
                  href={"/tests/posts"}
                >
                  {" "}
                  Posts{" "}
                </Link>
              </li>

              <li>
                <Link
                  className={`transition hover:text-gray-500/75 ${
                    pathname === "/tests/users"
                      ? "text-red-600"
                      : "text-gray-500"
                  }`}
                  href={"/tests/users"}
                >
                  {" "}
                  Users{" "}
                </Link>
              </li>

              <li>
                <Link
                  className={`transition hover:text-gray-500/75 ${
                    pathname === "/tests/quotes"
                      ? "text-red-600"
                      : "text-gray-500"
                  }`}
                  href={{
                    pathname: "/tests/quotes",
                    query: {
                      limit: 10,
                    },
                  }}
                >
                  {" "}
                  Quotes{" "}
                </Link>
              </li>

              <li>
                <Link
                  className={`transition hover:text-gray-500/75 ${
                    pathname === "/tests/mock-users"
                      ? "text-red-600"
                      : "text-gray-500"
                  }`}
                  href={"/tests/mock-users"}
                >
                  {" "}
                  Mock Users{" "}
                </Link>
              </li>
            </ul>
          </SignedIn>
        </nav>

        <SignedOut>
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <SignInButton mode="modal">
                <button
                  type="button"
                  className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                >
                  Login
                </button>
              </SignInButton>
            </div>

            <button className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </SignedOut>
        <SignedIn>
          <SignOutButton>
            <button
              type="button"
              className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
            >
              Logout
            </button>
          </SignOutButton>
        </SignedIn>
      </div>
    </React.Fragment>
  );
};

export default Navlinks;

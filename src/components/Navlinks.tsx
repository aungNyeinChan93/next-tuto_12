"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navlinks = () => {
  const pathname = usePathname();
  return (
    <React.Fragment>
      <div className="flex w-full items-center  sm:justify-between">
        <nav aria-label="Global" className="hidden md:block">
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
                  pathname === "/tests/posts" ? "text-red-600" : "text-gray-500"
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
                  pathname === "/tests/users" ? "text-red-600" : "text-gray-500"
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
              <a
                className="text-gray-500 transition hover:text-gray-500/75"
                href="#"
              >
                {" "}
                Blog{" "}
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <div className="sm:flex sm:gap-4">
            <a
              className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
              href="#"
            >
              Login
            </a>

            <a
              className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
              href="#"
            >
              Register
            </a>
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
      </div>
    </React.Fragment>
  );
};

export default Navlinks;

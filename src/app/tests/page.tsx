"use client";

import React, { lazy, Suspense, useState } from "react";

/*
    React.lazy() works in Client Components only.

    In Server Components (Next.js App Router), you don’t need React.lazy() for code-splitting — Next.js already does automatic code splitting for server-rendered components.

    So, you mainly use React.lazy() when:

    You have a large client-side component that you want to load only when needed.

    Or when you want to avoid loading heavy libraries right away.
 */

const TestsPage = () => {
  const Hero = lazy(() => import("@/components/Hero"));
  const [show, setShow] = useState<boolean>(false);
  return (
    <React.Fragment>
      <main className="w-full h-screen flex flex-col container mx-auto">
        <section className="hero">
          <button
            type="button"
            className="text-white bg-slate-400 rounded-2xl mx-2 px-4 py-2"
            onClick={() => setShow((prev) => !prev)}
          >
            Toggle
          </button>
          {show && (
            <Suspense fallback={<>Spinner</>}>
              <Hero />
            </Suspense>
          )}
        </section>
      </main>
    </React.Fragment>
  );
};

export default TestsPage;

"use client";

import React from "react";
import dynamic from "next/dynamic";

const TestDynamic = () => {
  const Hero = dynamic(() => import("@/components/Hero"), {
    loading: () => <p>Loader . . .</p>,
    ssr: false,
  });

  return (
    <React.Fragment>
      <main>
        <Hero />
      </main>
    </React.Fragment>
  );
};

export default TestDynamic;

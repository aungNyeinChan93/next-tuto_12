import React from "react";
import TestDynamic from "@/components/share/TestDynamic";
import TestsPage from "./tests/page";
import Time from "@/components/share/Time";
import Hero from "@/components/Hero";

const HomePage = () => {
  console.log("home page");

  return (
    <React.Fragment>
      <main
        className={`
           w-full min-h-screen container mx-auto`}
      >
        {/* <Time />
        <TestDynamic />
        <TestsPage /> */}
        <Hero />
      </main>
    </React.Fragment>
  );
};

export default HomePage;

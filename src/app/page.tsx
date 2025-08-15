import TestDynamic from "@/components/share/TestDynamic";
import React from "react";
import TestsPage from "./tests/page";
import Time from "@/components/share/Time";

const HomePage = () => {
  console.log("home page");

  return (
    <React.Fragment>
      <main
        className={`
           w-full min-h-screen container mx-auto`}
      >
        <Time />
        <TestDynamic />
        <TestsPage />
      </main>
    </React.Fragment>
  );
};

export default HomePage;

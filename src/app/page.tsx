import TestDynamic from "@/components/share/TestDynamic";
import React from "react";
import TestsPage from "./tests/page";

const HomePage = async () => {
  return (
    <React.Fragment>
      <main className="w-full min-h-screen container mx-auto">
        <TestDynamic />
        <TestsPage />
      </main>
    </React.Fragment>
  );
};

export default HomePage;

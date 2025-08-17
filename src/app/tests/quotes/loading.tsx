import Loader from "@/components/share/Loader";
import React from "react";

const QuoteLoading = async () => {
  return (
    <React.Fragment>
      <main className="flex justify-center items-center w-full min-h-screen">
        <Loader />
      </main>
    </React.Fragment>
  );
};

export default QuoteLoading;

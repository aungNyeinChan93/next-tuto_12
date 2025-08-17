"use client";

import React, { useEffect } from "react";

const QuoteErrorPage = ({ error }: { error: Error }) => {
  useEffect(() => {
    if (error instanceof Error) {
      const { message, name, cause } = error;
      console.log({ message, name, cause });
    }
  });
  return (
    <React.Fragment>
      <main className="w-full min-h-screen flex justify-center items-center">
        <span className="text-2xl text-red-600">{error && error.message}</span>
      </main>
    </React.Fragment>
  );
};

export default QuoteErrorPage;

"use client";

import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}

const UserError = ({ error, reset }: Props) => {
  return (
    <React.Fragment>
      <main className="w-full h-screen flex justify-center items-center">
        <div className="text-center">
          <p className="text-xl text-red-500 p-3">{error && error?.message}</p>
          <button
            className="px-4 py-2 bg-slate-50 rounded-lg text-slate-500"
            type="button"
            onClick={reset}
          >
            Try again!
          </button>
        </div>
      </main>
    </React.Fragment>
  );
};

export default UserError;

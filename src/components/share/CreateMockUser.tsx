"use client";

import React, { ReactNode, useState } from "react";

const CreateMockUser = ({ form }: { form: ReactNode }) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <React.Fragment>
      <main className="flex flex-col justify-between">
        <button
          className="px-4 py-2 bg-cyan-800/80 text-white rounded-lg w-[120px]"
          type="button"
          onClick={() => setShow((prev) => !prev)}
        >
          {show ? "Hide" : "Create User"}
        </button>
        <section className="">{show && <>{form}</>}</section>
      </main>
    </React.Fragment>
  );
};

export default CreateMockUser;

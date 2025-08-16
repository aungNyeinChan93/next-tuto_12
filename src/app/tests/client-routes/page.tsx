"use client";

import { useTheme } from "@/components/contexts/ThemeProvider";
// import Hero from "@/components/Hero";
// import ClientComponent from "@/components/share/ClientComponent";
import React from "react";

const ClientRoutes = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <React.Fragment>
      <main
        className={`w-full mt-[100px]  rounded-2xl p-4 h-[500px] flex justify-center items-center container mx-auto ${
          theme === "dark"
            ? "bg-slate-800 text-slate-50"
            : "bg-slate-100 text-slate-900"
        }`}
      >
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            tenetur natus, exercitationem aperiam ipsa amet reiciendis aliquam
            temporibus molestiae cumque nesciunt possimus fugit eos. Similique
            eos nisi aut error nam! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Cupiditate numquam quam ipsam beatae atque id
            recusandae, soluta molestias cum commodi nobis voluptatum quo sed
            debitis, quibusdam optio eos totam perspiciatis impedit. Tempore,
            illo reprehenderit?
          </p>
          {/* <ClientComponent>
            <Hero />
          </ClientComponent> */}
          <button
            type="button"
            onClick={() => changeTheme()}
            className="px-4 py-2 bg-green-600 text-white rounded-lg mt-4"
          >
            Change Theme
          </button>
        </div>
      </main>
    </React.Fragment>
  );
};

export default ClientRoutes;

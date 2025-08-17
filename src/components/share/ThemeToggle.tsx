"use client";

import React, { ReactNode } from "react";
import { useTheme } from "../contexts/ThemeProvider";

interface Props {
  children: ReactNode;
}

const ThemeToggle = ({ children }: Props) => {
  const { theme, changeTheme } = useTheme();
  return (
    <React.Fragment>
      <main className={`${theme === "dark" ? "bg-slate-900" : "bg-slate-50"} `}>
        <button
          className="px-4 py-2 bg-red-500 rounded-2xl"
          type="button"
          onClick={() => changeTheme()}
        >
          Toggle
        </button>
        {children}
      </main>
    </React.Fragment>
  );
};

export default ThemeToggle;

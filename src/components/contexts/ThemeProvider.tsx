"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";

interface Props {
  children: ReactNode;
}

const defaultTheme = {
  theme: "dark",
  changeTheme: () => {},
};

export const ThemeContext = createContext<typeof defaultTheme>(defaultTheme);

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const changeTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);

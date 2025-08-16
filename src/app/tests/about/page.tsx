import { cookies } from "next/headers";
import React from "react";

const setCookie = async () => {
  "use server";
  const nextCookie = await cookies();
  nextCookie.set("theme", "dark");
};

const About = async () => {
  const nextCookie = await cookies(); // include cookies method so that component will be dynamic rendering
  const theme = nextCookie.get("theme");

  if (!theme) {
    // await setCookie();
  }

  return (
    <React.Fragment>
      <main>{theme ? "dark" : "light"}</main>
    </React.Fragment>
  );
};

export default About;

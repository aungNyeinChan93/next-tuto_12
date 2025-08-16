"use client";

import React, { ReactNode, useState } from "react";

const ClientComponent = ({
  children,
  other,
}: {
  children?: ReactNode;
  other?: ReactNode;
}) => {
  const [hero, setHero] = useState("superman");
  return (
    <React.Fragment>
      <p className="p-4 text-2xl text-center">{hero}</p>
      <main>{children}</main>
      <footer className="p-4 bg-red-50 my-10">{other ?? "footer"}</footer>
    </React.Fragment>
  );
};

export default ClientComponent;

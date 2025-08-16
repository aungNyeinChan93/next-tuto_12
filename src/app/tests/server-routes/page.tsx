import Hero from "@/components/Hero";
import ClientComponent from "@/components/share/ClientComponent";
import React from "react";

const ServerRoutes = async () => {
  return (
    <React.Fragment>
      <main>
        ServerRoutes
        <ClientComponent other={<Hero />}>
          <Hero />
        </ClientComponent>
      </main>
    </React.Fragment>
  );
};

export default ServerRoutes;

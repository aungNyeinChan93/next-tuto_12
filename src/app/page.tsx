import React from "react";
import TestDynamic from "@/components/share/TestDynamic";
import TestsPage from "./tests/page";
import Time from "@/components/share/Time";
import Hero from "@/components/Hero";
import { auth, currentUser } from "@clerk/nextjs/server";

const HomePage = async () => {
  console.log("home page");
  const session = await auth();
  const currentAuth = await currentUser();

  return (
    <React.Fragment>
      <main
        className={`
           w-full min-h-screen container mx-auto flex flex-col justify-center gap-4`}
      >
        <Hero />
        <section className="min-h-screen bg-cyan-400/50 flex justify-between overflow-auto">
          <pre>{JSON.stringify(session, null, 2)}</pre>
          <pre>{JSON.stringify(currentAuth, null, 2)}</pre>
        </section>
      </main>
    </React.Fragment>
  );
};

export default HomePage;

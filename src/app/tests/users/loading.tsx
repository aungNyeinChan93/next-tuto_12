import Loader from "@/components/share/Loader";
import React from "react";

const UserLoader = async () => {
  return (
    <React.Fragment>
      <main className="w-full min-h-screen flex justify-center items-center">
        <Loader />
      </main>
    </React.Fragment>
  );
};

export default UserLoader;

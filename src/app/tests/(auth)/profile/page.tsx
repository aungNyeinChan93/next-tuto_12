import { UserProfile } from "@clerk/nextjs";
import React from "react";

const ProfilePage = async () => {
  return (
    <React.Fragment>
      <main className="py-3 ps-[200px] ">
        <UserProfile />
      </main>
    </React.Fragment>
  );
};

export default ProfilePage;

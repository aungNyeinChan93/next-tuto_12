export const fetchCache = "auto";

import React from "react";
import { getUsers, type User } from "./action";
import UserCard from "@/components/share/UserCard";

const UsersPage = async () => {
  await new Promise((r) => setTimeout(r, 2000));
  const users: User[] | undefined = await getUsers();
  console.log(users);

  return (
    <React.Fragment>
      <main className="w-3/4 mx-auto p-4 flex flex-col justify-center min-h-screen bg-slate-300/40 ">
        {/* {JSON.stringify(users, null, 2)} */}
        <h2 className="text-2xl text-center font-semibold underline underline-offset-4 text-slate-200 p-4 tracking-wider">
          Users
        </h2>
        <div className="flex justify-center items-center ">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8  ">
            {users &&
              Array.isArray(users) &&
              users?.map((user) => <UserCard key={user.id} user={user} />)}
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default UsersPage;

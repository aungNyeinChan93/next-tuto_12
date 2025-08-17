import { User } from "@/app/tests/users/action";
import React from "react";

const UserCard = async ({ user }: { user: User }) => {
  return (
    <React.Fragment>
      <div className="w-60 bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md">
        <div className="col-span-2 text-lg font-bold capitalize rounded-md">
          {user.name}
        </div>
        <div className="col-span-2 rounded-md">
          {user.address?.street}
          <p className="text-red-500 text-sm">{user.company?.name}</p>
        </div>
        <div className="col-span-1">
          <button className="rounded-md bg-slate-300 hover:bg-slate-600 hover:text-slate-200 duration-300 p-2">
            Detail
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserCard;

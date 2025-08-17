import React from "react";
import { MOCK_KEY } from "@/utils/config";
import MockUserCard from "./MockUserCard";

export type MockUser = {
  id: string | number;
  name: string;
  email: string;
  createAt?: unknown;
};

export const getMockUsers = async () => {
  const response = await fetch(`https://${MOCK_KEY}/api/next_01/users`);
  const users = await response.json();
  return users;
};

const MockUsers = async () => {
  const mock_users = await getMockUsers();
  console.log(mock_users);

  return (
    <React.Fragment>
      <main className="w-full min-h-screen flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          {mock_users &&
            Array.isArray(mock_users) &&
            mock_users
              .reverse()
              ?.map((user: MockUser) => (
                <MockUserCard user={user} key={user.id} />
              ))}
        </div>
      </main>
    </React.Fragment>
  );
};

export default MockUsers;

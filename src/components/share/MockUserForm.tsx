import { MOCK_KEY } from "@/utils/config";
import { revalidatePath } from "next/cache";
import React from "react";

export const createUserAction = async (formData: FormData) => {
  "use server";
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;

  const newUser = {
    id: Math.random(),
    name,
    email,
    createdAt: Date.now().toLocaleString(),
  };

  const response = await fetch(`https://${MOCK_KEY}/api/next_01/users`, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) throw new Error("mock user fetching fail!");
  const data = await response.json();
  if (data) {
    console.log(data);
    revalidatePath("/tests/mock-users");
  }
};

const MockUserForm = async () => {
  return (
    <React.Fragment>
      <form
        action={createUserAction}
        className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl space-y-4"
      >
        <h2 className="text-xl font-semibold text-gray-800">Create User</h2>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="mt-1 p-4 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="mt-1 p-4 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-md"
        >
          Create Mock User
        </button>
      </form>
    </React.Fragment>
  );
};

export default MockUserForm;

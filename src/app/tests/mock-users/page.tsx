import CreateMockUser from "@/components/share/CreateMockUser";
import Loader from "@/components/share/Loader";
import MockUserForm from "@/components/share/MockUserForm";
import MockUsers from "@/components/share/MockUsers";
import React, { Suspense } from "react";

const MockUserPage = async () => {
  return (
    <React.Fragment>
      <main className="w-full min-h-screen flex justify-center p-4 bg-slate-950/80">
        <div className="flex flex-col gap-4">
          <section>
            <CreateMockUser form={<MockUserForm />} />
          </section>
          <section>
            <Suspense fallback={<Loader />}>
              <MockUsers />
            </Suspense>
          </section>
        </div>
      </main>
    </React.Fragment>
  );
};

export default MockUserPage;

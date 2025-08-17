import Quotes from "@/components/share/Quotes";
import React, { Suspense } from "react";

interface Props {
  searchParams: Promise<{ [key: string]: string }>;
}

const QuotesPage = async ({ searchParams }: Props) => {
  const { limit } = await searchParams;
  await new Promise((r) => setTimeout(r, 500));
  return (
    <React.Fragment>
      <main className="flex justify-center items-center min-h-screen w-full bg-slate-400">
        <Suspense fallback={<>Loading . . . </>}>
          <Quotes limit={limit ?? "1"} />
        </Suspense>
      </main>
    </React.Fragment>
  );
};

export default QuotesPage;

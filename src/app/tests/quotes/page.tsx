import Quotes from "@/components/share/Quotes";
import React from "react";

interface Props {
  searchParams: Promise<{ [key: string]: string }>;
}

const QuotesPage = async ({ searchParams }: Props) => {
  const { limit } = await searchParams;

  return (
    <React.Fragment>
      <main className="flex justify-center items-center min-h-screen w-full bg-slate-400">
        <Quotes limit={limit ?? "1"} />
      </main>
    </React.Fragment>
  );
};

export default QuotesPage;

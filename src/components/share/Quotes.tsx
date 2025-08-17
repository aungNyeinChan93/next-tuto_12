import { type Quotes } from "@/app/api/quotes/data";
import React from "react";

export const getQuotes = async (limit: string | number): Promise<Quotes> => {
  const response = await fetch(
    `http://localhost:3000/api/quotes?limit=${limit}`
  );
  if (!response.ok) throw new Error("quotes fetch fail!");
  const quotes: Quotes = await response.json();
  return quotes;
};

interface Props {
  limit: string | number;
}

const Quotes = async ({ limit }: Props) => {
  const quotes: Quotes | undefined = await getQuotes(limit);
  return (
    <React.Fragment>
      <main>
        <pre>{JSON.stringify(quotes, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default Quotes;

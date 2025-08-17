import { NextRequest, NextResponse } from "next/server"
import { quotes, type Quotes } from "./data"

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const limit = searchParams.get('limit') as string || "10";

    const q: Quotes = limit ? [...quotes.slice(0, Number(limit))].reverse() : [...quotes].reverse()
    return NextResponse.json({ quotes: q, limit, total: q.length })
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const { quote, author } = body
    const newQuote = {
        id: quotes.length + 1,
        quote, author
    }
    quotes.push(newQuote);
    return NextResponse.json({ quotes: quotes.reverse(), newQuote })
}




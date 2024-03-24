import { NextResponse } from "next/server";

const data = {
    search: 'eminem'
}

export async function GET() {
    return NextResponse.json({data})
}

export async function POST(request) {
    const query = await request.json()
    data.search = query
    return new Response(JSON.stringify(query), {
        headers: {
            "Content-Type": "application/json"
        },
        status: 201,
    })
}
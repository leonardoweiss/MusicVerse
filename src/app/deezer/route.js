import { NextResponse } from "next/server";

const search = await fetch('http://localhost:3000/search').then(res => res.json())

const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${search.data.search}`
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9f0556a8d3msh6a90da58442e205p12e65fjsn3567b792ea01',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
}

const sound = await fetch(url, options).then(res => res.json())

export async function GET() {
    return NextResponse.json({sound})
}

export async function POST(request) {
    // const query = await request.json()
    // data.search = query
    // return new Response(JSON.stringify(query), {
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     status: 201,
    // })
}
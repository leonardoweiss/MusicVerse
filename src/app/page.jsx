import Around from "@/components/Around";
import { use } from "react"

const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${"shawn"}`
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '9f0556a8d3msh6a90da58442e205p12e65fjsn3567b792ea01',
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
  }
}

async function getMusic() {
    const response = await fetch(url, options)
    const music = await response.json()
    return music
}

export default function Home() {

  const sound = use(getMusic())

  return (
    <>
      <Around sound={sound}/>
    </>
  )
}
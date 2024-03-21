import Around from "@/components/Around";

export default async function Home() {

  const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${'shawn'}`
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9f0556a8d3msh6a90da58442e205p12e65fjsn3567b792ea01',
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
  }

  const sound = await fetch(url, options).then(res => res.json())

  return (
    <>
      <Around sound={sound}/>
    </>
  )
}
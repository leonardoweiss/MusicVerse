import Around from "@/components/Around";

export default async function Home() {

  const sound = await fetch('http://localhost:3000/deezer').then(res => res.json())

  return (
    <>
      <Around sound={sound.sound}/>
    </>
  )
}
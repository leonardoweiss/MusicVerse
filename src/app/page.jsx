import Around from "@/components/Around";

export default async function Home() {

  const sound = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/deezer`).then(res => res.json())

  return (
    <>
      <Around sound={sound.sound}/>
    </>
  )
}
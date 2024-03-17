"use client"

import Feed from "@/components/Feed";
import Footer from "@/components/Footer";
import Infos from "@/components/Infos";
import ReproductionList from "@/components/ReproductionList";
import { useState } from "react";

export default function Around({ sound }) {

    const [queue, setQueue] = useState(0)
    const [current, setCurrent] = useState(sound.data[0])

    const play = new Audio(current.preview)

    return(
        <>
            <main>
                <ReproductionList music={sound} value={current} def={setCurrent} playing={play} setQueue={setQueue}/>
                <Feed music={sound}/>
                <Infos value={current} />
            </main>
            <Footer music={sound} def={setCurrent} value={current} playing={play} queue={queue} setQueue={setQueue}/>
        </>
    )
}
"use client"

import Feed from "@/components/Feed";
import Footer from "@/components/Footer";
import Infos from "@/components/Infos";
import ReproductionList from "@/components/ReproductionList";
import { useState } from "react";

export default function Around({ sound }) {

    const [queue, setQueue] = useState(0)
    const [current, setCurrent] = useState(sound.data[0])

    return(
        <>
            <main>
                <ReproductionList music={sound} value={current} def={setCurrent} setQueue={setQueue}/>
                <Feed music={sound}/>
                <Infos value={current} />
            </main>
            <Footer music={sound} def={setCurrent} value={current} queue={queue} setQueue={setQueue}/>
        </>
    )
}
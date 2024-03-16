"use client"

import Feed from "@/components/Feed";
import Footer from "@/components/Footer";
import Infos from "@/components/Infos";
import ReproductionList from "@/components/ReproductionList";
import { useState } from "react";

export default function Around({ sound }) {

    localStorage.setItem('indexNow', 0)

    const [queue, setQueue] = useState([localStorage.getItem('indexNow')])
    const [current, setCurrent] = useState(sound.data[queue])

    const play = new Audio(current.preview)

    return(
        <>
            <main>
                <ReproductionList music={sound} value={current} def={setCurrent} playing={play}/>
                <Feed music={sound}/>
                <Infos value={current}/>
            </main>
            <Footer value={current} playing={play}/>
        </>
    )
}
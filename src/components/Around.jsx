"use client"

import Feed from "@/components/Feed";
import Footer from "@/components/Footer";
import Infos from "@/components/Infos";
import ReproductionList from "@/components/ReproductionList";
import { useRef, useState } from "react";

export default function Around({ sound }) {

    const [queue, setQueue] = useState(0)
    const [current, setCurrent] = useState(sound.data[0])
    const [btn, setBtn] = useState('fa-solid fa-play')
    const playRef = useRef()

    return(
        <>
            <main>
                <audio ref={playRef} src={sound.data[queue].preview}></audio>

                <ReproductionList 
                    music={sound}
                    def={setCurrent}
                    setQueue={setQueue} 
                    playRef={playRef}
                    setBtn={setBtn}
                />

                <Feed music={sound}/>

                <Infos value={current} />

            </main>

            <Footer 
                music={sound} 
                def={setCurrent} 
                value={current} 
                queue={queue} 
                setQueue={setQueue} 
                playRef={playRef}
                btn={btn}
                setBtn={setBtn}
            />
        </>
    )
}
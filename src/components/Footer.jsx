"use client"
import Image from "next/image"
import { useState } from "react"

function Footer({music, def, value, queue, setQueue, playRef, btn, setBtn}) {

    const [mutedBtn, setMutedBtn] = useState('fa-solid fa-volume-high')

    return(
        <footer>

            <div id="infos">
                <Image src={value.album.cover_small} width={60} height={60} alt={value.title}/>
                <div>
                    <h5>{value.title}</h5>
                    <p>{value.artist.name}</p>
                </div>
            </div>

            <div id="player">
                <div id="btns">

                    {/* botão "Aleatório" */}
                    <button type="button" className="random">
                        <i className="fa-solid fa-shuffle"></i>
                    </button>

                    {/* botão "Anterior" */}
                    <button 
                        type="button"
                        className="back"
                        onClick={() => {
                            playRef.current.pause()
                            setBtn("fa-solid fa-play")
                            queue <= 0 ? def(music.data[24]) : def(music.data[queue - 1])
                            queue <= 0 ? setQueue(24) : setQueue(queue - 1)
                        }}
                    >
                        <i className="fa-solid fa-backward-step"></i>
                    </button>

                    {/* botão "Play/Pause" */}
                    <button type="button" className="play" onClick={() => {
                        playRef.current.paused ? playRef.current.play() : playRef.current.pause()
                        playRef.current.paused ? setBtn("fa-solid fa-play") : setBtn("fa-solid fa-pause")
                    }}>
                        <i className={btn}></i>
                    </button>

                    {/* botão "Próximo" */}
                    <button type="button" className="next" onClick={() => {
                        playRef.current.pause()
                        setBtn("fa-solid fa-play")
                        queue >= 24 ? def(music.data[0]) : def(music.data[queue + 1])
                        queue >= 24 ? setQueue(0) : setQueue(queue + 1)
                    }}>
                        <i className="fa-solid fa-forward-step"></i>
                    </button>

                    {/* botão "Repetir" */}
                    <button type="button" className="repeat">
                        <i className="fa-solid fa-repeat"></i>
                    </button>
                </div>
            </div>
            <div id="actions-play">
                <button type="button" onClick={() => {
                    playRef.current.muted == true ? playRef.current.muted = false : playRef.current.muted = true
                    playRef.current.muted == true ? setMutedBtn("fa-solid fa-volume-xmark") : setMutedBtn('fa-solid fa-volume-high')
                }}>
                    <i className={mutedBtn}></i>
                </button>
                <button type="button">
                    <i class="fa-regular fa-heart"></i>
                </button>
            </div>
        </footer>
    )
}

export default Footer
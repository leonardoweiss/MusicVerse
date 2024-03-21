"use client"


import Image from "next/image"
import { useRef } from "react"

function ReproductionList({music, def, setQueue, playRef, setBtn}) {

    const inputRef = useRef()

    return(
        <section id="reproduction-list">
            <form id="input" onSubmit={(ev) => {
                ev.preventDefault()
                inputRef.current.value = ''
            }}>
                <input type="text" ref={inputRef} placeholder="Buscar..."/>
                <button>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
            <h1>Fila</h1>
            <div className="queue">
                {music.data.map((m, i) => (
                    <div className="card-queue" key={m.id} onClick={() => {
                        setBtn('fa-solid fa-play')
                        setQueue(i)
                        def(music.data[i])
                        playRef.current.pause()
                    }}>
                        <Image src={m.album.cover_small} width={40} height={40} alt={m.title} />
                        <p>{m.title}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ReproductionList
"use client"

import Image from "next/image"
import { useState } from "react"

function ReproductionList({music, def, playing, setQueue}) {

    const {value, setValue} = useState('')

    return(
        <section id="reproduction-list">
            <input type="text" placeholder="Buscar..." value={value}/>
            <h1>Fila</h1>
            <div className="queue">
                {music.data.map((m, i) => (
                    <div className="card-queue" key={m.id} onClick={() => {
                        setQueue(i)
                        def(music.data[i])
                        playing.pause()
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
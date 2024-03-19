"use client"

import Image from "next/image"

function ReproductionList({music, def, setQueue, playRef, setBtn}) {

    return(
        <section id="reproduction-list">
            <input type="text" placeholder="Buscar..."/>
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
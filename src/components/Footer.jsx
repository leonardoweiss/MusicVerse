"use client"
import Image from "next/image"

function Footer({music, def, value, playing, queue, setQueue}) {

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
                            playing.pause()
                            queue <= 0 ? def(music.data[24]) : def(music.data[queue - 1])
                            queue <= 0 ? setQueue(24) : setQueue(queue - 1)
                        }}
                    >
                        <i className="fa-solid fa-backward-step"></i>
                    </button>
                    {/* botão "Play/Pause" */}
                    <button type="button" className="play" onClick={() => {
                        playing.paused ? playing.play() : playing.pause()
                    }}>
                        {playing.paused ? <i className="fa-solid fa-play"></i> : <i className="fa-solid fa-pause"></i>}
                    </button>
                    {/* botão "Próximo" */}
                    <button type="button" className="next" onClick={() => {
                        playing.pause()
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
                <button type="button">
                    <i className="fa-solid fa-volume-high"></i>
                </button>
                <button type="button">
                    <i class="fa-regular fa-heart"></i>
                </button>
            </div>
        </footer>
    )
}

export default Footer
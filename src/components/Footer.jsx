"use client"
import Image from "next/image"

function Footer({value, playing}) {

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
                    <button type="button" className="random">
                        <i className="fa-solid fa-shuffle"></i>
                    </button>
                    <button 
                        type="button"
                        className="back"
                    >
                        <i className="fa-solid fa-backward-step"></i>
                    </button>
                    <button type="button" className="play" onClick={() => {
                        playing.paused ? playing.play() : playing.pause()
                    }}>
                        {playing.paused ? <i className="fa-solid fa-play"></i> : <i className="fa-solid fa-pause"></i>}
                    </button>
                    <button type="button" className="next">
                        <i className="fa-solid fa-forward-step"></i>
                    </button>
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
"use client"
import Image from "next/image"

const queue = localStorage.getItem('indexNow')

function Infos({value}) {
    return(
        <aside id="music-info">
            <div className="center">
                <Image src={value.album.cover_big} width={450} height={450} alt={value.title} />
                <h3>{value.title} - {value.album.title}</h3>
            </div>
            <div>
                <div className="artist">
                    <div className="info-artist">
                        <Image src={value.artist.picture_xl} priority={true} width={60} height={60} alt={value.artist.name} />
                        <p>{value.artist.name}</p>
                    </div>
                    <div className="deezer">
                        <a href={value.link} target="_blank">Ouça no deezer <i className="fa-brands fa-deezer"></i></a>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Infos
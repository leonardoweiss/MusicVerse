"use client"

import Image from "next/image"

function Feed({ music }) {

    const artistsList = music.data.reduce((list, el) => {
        const entryIndex = list.findIndex(entry => entry.name === el.artist.name)
  
        if (entryIndex === -1) {
          return [
            ...list, {name: `${el.artist.name}`, img: `${el.artist.picture_xl}`}
          ]
        }
        return list
    }, []).slice(0, 4)

    const albunsList = music.data.reduce((list, el) => {
        const entryIndex = list.findIndex(entry => entry.title === el.album.title)
  
        if (entryIndex === -1) {
          return [
            ...list, {title: `${el.album.title}`, img: `${el.album.cover_big}`}
          ]
        }
        return list
    }, []).slice(0, 4)

    return(
        <section id="feed">
            <article id="personal">
                <div>
                    <i className="fa-solid fa-heart"></i> Curtidas
                </div>
                <div>
                    <i className="fa-solid fa-music"></i> Playlists
                </div>
                <div>
                    <i className="fa-solid fa-radio"></i> Rádio
                </div>
            </article>
            <article id="artists">
                <h3>Artistas</h3>
                <div>
                    {artistsList.map(a => (
                        <div className="cards" key={a.name}>
                            <Image src={a.img} width={125} height={125} alt={a.name} />
                            <p>{a.name}</p>
                        </div>
                    ))}
                </div>
            </article>
            <article id="albuns">
                <h3>Álbuns</h3>
                <div>
                    {albunsList.map(a => (
                        <div className="cards yellow" key={a.title}>
                            <Image src={a.img} width={125} height={125} alt={a.title} />
                            <p>{a.title}</p>
                        </div>
                    ))}
                </div>
            </article>
        </section>
    )
}

export default Feed
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AlbumItem from './AlbumItem'

export default function AlbumList () {
    const [albums, setAlbums] = useState([])

    const { userId } = useParams()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
            .then(response => response.json())
            .then(data => setAlbums(data))
    }, [userId]);

    return (
        <>
            <h1>List of albums</h1>
            <ol>
                {albums.map(album => {
                    return (
                        <AlbumItem
                            key={album.id}
                            id={album.id}
                            title={album.title}
                        />
                    )
                })}
            </ol>
        </>
    )
}
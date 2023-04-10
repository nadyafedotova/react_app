import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PhotoItem from './PhotoItem'

export default function PhotoList() {
    const [photos, setPhotos] = useState([]);
    const { albumId } = useParams()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then(response => response.json())
            .then(data => setPhotos(data))
    }, [albumId]);

    return (
        <>
            <h1>List of photos</h1>
            <ul>
                {photos.map(photo => (
                    <PhotoItem
                    key={photo.id}
                    id={photo.id}
                    title={photo.title}
                    thumbnailUrl={photo.thumbnailUrl}
                    />
                ))}
            </ul>
        </>
    )
}
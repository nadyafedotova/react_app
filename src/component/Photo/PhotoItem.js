import React from 'react'

export default function PhotoItem ({...photo}) {
    return (
        <li key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title}/>
        </li>
    )
}
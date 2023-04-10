import React from 'react'
import { Link } from 'react-router-dom'

export default function AlbumItem ({...album}) {
    return (
        <li key={album.id}>
            <Link to={`/albums/${album.id}/photos`}>{album.title}</Link>
        </li>
    )
}
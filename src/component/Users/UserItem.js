import React from 'react'
import { Link } from 'react-router-dom'

export default function UserItem ({...user}) {
    return (
        <li key={user.id}>
            <Link to={`/users/${user.id}/albums`}>{user.name}</Link>
        </li>
    )
}
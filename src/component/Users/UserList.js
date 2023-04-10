import React, { useEffect, useState } from 'react'
import UserItem from './UserItem'

export default function UserList () {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
    }, []);

    return (
        <>
            <h1>List of users</h1>
            <ol>
                {users.map(user => {
                    return (
                        <UserItem
                            key={user.id}
                            id={user.id}
                            name={user.name}
                        />
                    )
                })}
            </ol>
        </>
    )
}
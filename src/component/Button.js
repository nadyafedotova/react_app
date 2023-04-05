import React, { useState } from 'react'

export default function Button ({ emoji, index }) {
    const [count, setCount] = useState(0);

    function handleClick () {
        setCount(count + 1);
    }

    return (
        <button value={count} data-id={index} onClick={handleClick}>
            {emoji} {count}
        </button>
    );
}

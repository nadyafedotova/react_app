import React from 'react'

export default function ShowResult ({handleClickEmoji}) {

    const handleClick = () => handleClickEmoji()
    return (
        <button onClick={handleClick}>
            Show Results
        </button>
    );
}

import React from 'react'
import { emojis } from './EmojiCounter'

export default function ShowEmoji () {
    const elementLis = document.querySelectorAll('li');

    const arr = [];
    for (let i = 0; i < elementLis.length; i++) {
        if (elementLis[i].nodeType === 1) arr.push(+(elementLis[i].childNodes[0].childNodes[0].value))
    }
    const maxIndex = arr.indexOf(Math.max(...arr));
    const show = emojis[maxIndex]

    return (
        <div className="emoji"> {show} </div>
    );
}

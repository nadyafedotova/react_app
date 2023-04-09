import React from 'react'
import { emojis } from './EmojiCounter'

export default function ShowEmoji ({ show, display }) {
    return (
        <div className="emoji" style={{display: `${display}`}}> {emojis[show]} </div>
    );
}

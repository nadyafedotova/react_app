import React from 'react'
import Button from './Button'

const styles = {
    ul:{
        listStyle:'none',
        margin:'2em',
        padding:'0'
    },
    li:{
        padding:'5px'
    }
}

export const emojis = ['😀', ' 😀', ' 🙂', ' 🤪', ' 🥵'];

export default function EmojiCounter () {
    return (
        <ul style={styles.ul}>
            {emojis.map((emoji, index) =>
                <li key={index} style={styles.li}>
                    <span>
                        <Button
                            emoji={emoji}
                            index={index}/>
                    </span>
                </li>
            )}
        </ul>
    );
}

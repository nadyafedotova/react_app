import './App.css';
import EmojiCounter from './component/EmojiCounter'
import ShowResult from './component/ShowResult'
import ShowEmoji from './component/ShowEmoji'
import React, { useState } from 'react'

function App () {
    const [maxIndex, setMaxIndex] = useState(0)
    const [display, setDisplay] = useState("none");

    const handleClickEmoji = () => {
        const elementLis = document.querySelectorAll('li');
        const arr = [];
        for (let i = 0; i < elementLis.length; i++) {
            elementLis[i].nodeType === 1 && arr.push(+(elementLis[i].childNodes[0].childNodes[0].value))
        }
        const index = arr.indexOf(Math.max(...arr))
        setMaxIndex(index);
        setDisplay('block')
    }

    return (
        <div className="wrapper">
            <EmojiCounter/>
            <div className="container">
                <ShowResult handleClickEmoji={handleClickEmoji}/>
                <ShowEmoji show={maxIndex} display={display}/>
            </div>
        </div>
    );
}

export default App;

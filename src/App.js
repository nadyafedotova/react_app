import './App.css';
import EmojiCounter from './component/EmojiCounter'
import ShowResult from './component/ShowResult'
import ShowEmoji from './component/ShowEmoji'

function App () {
    return (
        <div className="wrapper">
            <EmojiCounter/>
            <div className="container">
                <ShowResult/>
                <ShowEmoji/>
            </div>
        </div>
    );
}

export default App;

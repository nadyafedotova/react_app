import './App.css';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom'
import UserList from './component/Users/UserList'
import AlbumList from './component/Album/AlbumList'
import PhotoList from './component/Photo/PhotoList'

function App () {
    return (
        <div className="wrapper">
            <Router>
                <div className="container">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                        </ul>
                    </nav>

                    <Routes>
                        <Route exact path="/" element={<UserList/>}/>
                        <Route path="/users/:userId/albums" element={<AlbumList/>}/>
                        <Route path="/albums/:albumId/photos" element={<PhotoList/>}/>
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;

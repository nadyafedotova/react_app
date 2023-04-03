import { Navbar } from './components/Navbar'
import { Header } from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import { CenterContainer } from './components/CenterContainer'

function App () {
    return (
        <div className="wrapper">
            <Header/>
            <div className="container">
                <BrowserRouter>
                    <Navbar/>
                </BrowserRouter>
                <CenterContainer/>
            </div>
        </div>
    )
}

export default App;

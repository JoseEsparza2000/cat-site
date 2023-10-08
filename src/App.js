import Navbar from "./Navbar"
import Home from "./pages/Home"
import Mana from "./pages/Mana"
import Loki from "./pages/Loki"
import Hela from "./pages/Hela"
import Faye from "./pages/Faye"
import Skye from "./pages/Skye"

function App () {
    let component 
    switch(window.location.pathname) {
        case "/":
            component = <Home />
            break
        case "/mana":
            component = <Mana />
            break
        case "/loki":
            component = <Loki />
            break 
        case "/hela":
            component = <Hela />
            break
        case "/faye":
            component = <Faye />
            break
        case "/skye":
            component = <Skye />
            break

    }
    return (
        <>
            < Navbar/> 
            <div className="container">{component}</div>
        </>
    )
}

export default App
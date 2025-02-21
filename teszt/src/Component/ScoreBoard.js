import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css"
import { Link } from "react-router-dom";

function ScoreBoard() {

    const navref = useRef();

    const showNavbar = () => {
        navref.current.classlist.toggle("responsive_nav");
    }
    return (
       <body>
         <header>
            <h3>
                Logo
            </h3>
            <nav ref={navref}>
                <Link to="/">Home</Link>
                <Link to="/scoreboard">ScoreBoard</Link>
                <Link to="/#">Blog</Link>
                <Link to="/loginpage">Log in/Sign in</Link>
                <button className="nav-btn nav-close-btn" onClick={showNavbar} >
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
        <div>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Point</th>
                    <th>Best Time</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Peti</td>
                        
                    </tr>
                </tbody>
            </table>
        </div>
       </body>
        
    );
}

export default ScoreBoard;
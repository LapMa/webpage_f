import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css"

function Navbar() {
    const navref = useRef();

    const showNavbar = () => {
        navref.current.classlist.toggle("responsive_nav")
    }
    return (
        <header>
            <h3>
                Logo
            </h3>
            <nav ref={navref}>
                <a href="/#">Home</a>
                <a href="/#">ScoreBoard</a>
                <a href="/#">Blog</a>
                <a href="/#">About Me</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar} >
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;
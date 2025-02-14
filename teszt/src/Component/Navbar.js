import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css"
import LoginRegist from "./LoginRegist";

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
                <a href="/#">Bejelentkezés/Regisztráció</a>
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
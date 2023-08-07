import React, {useRef} from "react";
import {FaTimes, FaBars} from "react-icons/fa";
import {Link} from 'react-router-dom'

import '../Styles/header.css'

const Header = () =>{
    const navRef = useRef()

    const showNavBarHandler = () =>{
        navRef.current.classList.toggle("responsive-nav")
    }

    return(
        <header>
            <Link to="/"><img src="/logo.png" alt="logo" className="logo"/></Link>
            <nav ref={navRef}>
                <ul>
                    <Link to="/przepisy"> <li>przepisy</li> </Link>
                    <Link to="/blog"><li>blog</li></Link>
                    <li>konkurs</li>
                    <li>logowanie</li>
                    <button onClick={showNavBarHandler} className="nav-btn nav-close-btn">
                        <FaTimes/>
                    </button>
                </ul>
            </nav>
            <button onClick={showNavBarHandler} className="nav-btn">
                <FaBars/>
            </button>
        </header>
    )
}

export default Header
import React, {useRef, useState} from "react";
import {FaTimes, FaBars} from "react-icons/fa";
import {Link} from 'react-router-dom'

import DropdownLoginMenu from "./DropdownLoginMenu";
import DropDownRecipeMenu from "./DropDownRecipeMenu";

import '../../Styles/header.css'


const Header = () =>{

    const [activeDropdownLogin, setActiveDropdownLogin] = useState(false)
    const [activeDropdownRecipes, setActiveDropdownRecipes] = useState(false)

    const navRef = useRef()
    const showNavBarHandler = () =>{
        navRef.current.classList.toggle("responsive-nav")
    }

    const showDropDownMenu = (e) =>{
        if(e.target.getAttribute("name") === "login"){
            setActiveDropdownLogin(prevState => !prevState)
        }else if(e.target.getAttribute("name") === "recipe"){
            setActiveDropdownRecipes(prevState => !prevState)
        }
    }

    let stylesLogin
    activeDropdownLogin ? stylesLogin={
        backgroundColor: "rgba(174, 118, 29, 0.8)",
    } : stylesLogin = {}

    let stylesRecipe
    activeDropdownRecipes ? stylesRecipe={
        backgroundColor: "rgba(174, 118, 29, 0.8)",
    } : stylesRecipe = {}


    return(
        <header>
            <Link to="/">
                <img src="/logo.png" alt="logo" className="logo"/>
            </Link>

            <nav ref={navRef}>
                <ul>
                    <div style={stylesRecipe}>
                        <li onClick={showDropDownMenu} name={"recipe"}>Przepisy</li>
                        {activeDropdownRecipes
                            ? <DropDownRecipeMenu func = {showDropDownMenu}/>
                            : null
                        }
                    </div>

                    <Link to="/blog">
                        <li>blog</li>
                    </Link>

                    <li>konkurs</li>

                    <div style={stylesLogin}>
                        <li onClick={showDropDownMenu} name={"login"}>logowanie</li>
                        {activeDropdownLogin
                            ? <DropdownLoginMenu func = {showDropDownMenu}/>
                            : null
                        }
                    </div>

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
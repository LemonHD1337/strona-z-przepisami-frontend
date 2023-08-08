import React from "react";
import {BrowserRouter  as Router, Route, Routes} from "react-router-dom"

import Header from './header/Header'
import Main from './Main/Main'
import Recipe from './Main/Recipe'
import RecipeGallery from "./Main/RecipeGallery";
import Blog from './Main/Blog'
import Footer from './footer/Footer.jsx'
import CookiePrivacyPolicy from "./footer/CookiePrivacyPolicy";
import PrivacyPolicy from "./footer/PrivacyPolicy";
import Statute from "./footer/Statute";
import Contact from "./footer/Contact";
import RecipeDescription from "./Main/RecipeDescription";


const Layout = () => {

    return(
        <React.Fragment>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" exact Component={Main}/>
                    <Route path="/przepisy" Component={Recipe}/>
                    <Route path="/przepisy/:name" Component={RecipeGallery}/>
                    <Route path="/przepisy/:name/:id" Component={RecipeDescription}/>
                    <Route path="/blog"  Component={Blog}/>
                    <Route path="/kontakt" Component={Contact}/>
                    <Route path="/regulamin" Component={Statute}/>
                    <Route path="/politka prywatnosci cookie" Component={CookiePrivacyPolicy}/>
                    <Route path="/polityka prywatnosci" Component={PrivacyPolicy}/>
                </Routes>
                <Footer/>
            </Router>
        </React.Fragment>
    )
}

export default Layout
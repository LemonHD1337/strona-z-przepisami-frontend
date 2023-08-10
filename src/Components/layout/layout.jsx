import React from "react";
import {BrowserRouter  as Router, Route, Routes} from "react-router-dom"

import Header from '../header/Header'
import HomePage from '../../Pages/HomePage'
import RecipeGallery from "../../Pages/RecipeGallery";
import BlogPage from '../../Pages/BlogPage'
import Footer from '../footer/Footer.jsx'
import CookiePrivacyPolicy from "../../Pages/footer pages/CookiePrivacyPolicy";
import PrivacyPolicy from "../../Pages/footer pages/PrivacyPolicy";
import Statute from "../../Pages/footer pages/Statute";
import Contact from "../../Pages/footer pages/Contact";
import LoginPage from "../../Pages/LoginPage";

const Layout = () => {
    return(
        <React.Fragment>
            <Router>
                <Header/>
                <main>
                    <Routes>
                        <Route path="/" exact Component={HomePage}/>
                        <Route path="/przepisy/:category" Component={RecipeGallery}/>
                        <Route path="/blog"  Component={BlogPage}/>
                        <Route path="/login" Component={LoginPage} />
                        <Route path="/kontakt" Component={Contact}/>
                        <Route path="/regulamin" Component={Statute}/>
                        <Route path="/politka prywatnosci cookie" Component={CookiePrivacyPolicy}/>
                        <Route path="/polityka prywatnosci" Component={PrivacyPolicy}/>
                    </Routes>
                </main>
                <Footer/>
            </Router>
        </React.Fragment>
    )
}

export default Layout
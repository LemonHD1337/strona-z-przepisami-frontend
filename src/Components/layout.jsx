import React from "react";
import {BrowserRouter  as Router, Route, Routes} from "react-router-dom"

import Header from './Header'
import Main from './Main'
import Receipt from './Receipt'
import Blog from './Blog'
import Footer from './Footer.jsx'
import CookiePrivacyPolicy from "./CookiePrivacyPolicy";
import PrivacyPolicy from "./PrivacyPolicy";
import Statute from "./Statute";
import Contact from "./Contact";

const Layout = () => {

    return(
        <React.Fragment>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" exact Component={Main}/>
                    <Route path="/przepisy" Component={Receipt}/>
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
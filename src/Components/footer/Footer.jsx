import React from "react";
import {Link} from 'react-router-dom'
import {FaFacebookSquare, FaInstagram, FaYoutube} from 'react-icons/fa'

import '../../Styles/footer.css'
const Footer = () =>{
    return(
        <footer>
            <div className="nav-footer">
                <ul>
                    <li><Link to="/kontakt">Kontakt</Link></li>
                    <li><Link to="/regulamin">Regulamin</Link></li>
                    <li><Link to="/politka prywatnosci cookie">Politka Prywatnosci Cookie</Link></li>
                    <li><Link to="/polityka prywatnosci">Polityka Prywatnosci</Link></li>
                </ul>
            </div>
            <div className="nav-icons">
                <span><a href="https://www.facebook.com/przepisypl/" target="_blank"><FaFacebookSquare/></a></span>
                <span><a href="https://www.youtube.com/user/codzisnaobiad" target="_blank"><FaInstagram/></a></span>
                <span><a href="https://www.instagram.com/przepisypl/" target="_blank"><FaYoutube/></a></span>
            </div>
        </footer>
    )
}

export default Footer
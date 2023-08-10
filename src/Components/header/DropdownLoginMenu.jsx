import React from "react";
import {Link} from 'react-router-dom'

const DropdownLoginMenu = ({func}) =>{
    return(
        <ul className={"dropdown"}>
            <Link to={"/login"}>
                <li
                    className={"dropdownFont"}
                    onClick={func}
                    name={"login"}
                >zaloguj się</li>
            </Link>
        </ul>
    )
}

export default DropdownLoginMenu
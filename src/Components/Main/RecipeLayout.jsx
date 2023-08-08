import React from "react";

import "../../Styles/receiptLayout.css"
import {FaRegBookmark, FaRegClock, FaRegFlag} from "react-icons/fa";
import {Link} from "react-router-dom";

const RecipeLayout = (props) =>{
    const {czasPrzygotowania, idPrzepisy, nazwa, poziomTrudnosci, zdjecie} = props.data
    return(
        <Link to={`/przepisy/grill/${idPrzepisy}`}>
            <div className="receipt-layout-container">
                <img src={`http://127.0.0.1:8000/img/${zdjecie}`} alt="obrazek dania"/>
                <h1>{nazwa}</h1>
                <div className="icons-receipt-layout">
                    <span className="cooking-time">
                            <FaRegClock/> <p>{czasPrzygotowania}</p>
                    </span>
                    <span className="difficult">
                            <FaRegFlag/> <p>{poziomTrudnosci}</p>
                    </span>
                </div>
                <span className="bookmark"><FaRegBookmark/></span>
            </div>
        </Link>
    )
}

export default RecipeLayout
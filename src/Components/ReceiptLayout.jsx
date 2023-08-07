import React from "react";

import "../Styles/receiptLayout.css"
import {FaRegBookmark, FaRegClock, FaRegFlag} from "react-icons/fa";

const ReceiptLayout = () =>{
    return(
        <div className="receipt-layout-container">
            <img src="/schab-z-pieczarkami-pod-pierzynka-z-majonezu-i-zoltego-sera-3.webp" alt="obrazek dania"/>
            <h1>tytul</h1>
            <div className="icons-receipt-layout">
                <span className="cooking-time">
                        <FaRegClock/> <p>30min</p>
                </span>
                <span className="difficult">
                        <FaRegFlag/> <p>łatwy</p>
                </span>
            </div>
            <span className="bookmark"><FaRegBookmark/></span>
        </div>
    )
}

export default ReceiptLayout
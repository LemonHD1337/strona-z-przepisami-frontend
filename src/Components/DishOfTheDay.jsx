import React from "react";
import {FaRegClock, FaRegFlag, FaUtensils, FaShareAlt, FaRegBookmark} from 'react-icons/fa'

import "../Styles/dishOfTheDay.css"
const DishOfTheDay = () => {
    return(
        <>
            <div className="dish-of-the-day-container ">
                <img src="/schab-z-pieczarkami-pod-pierzynka-z-majonezu-i-zoltego-sera-3.webp" alt="obraz dania"/>
                <div className="save-share-icons">
                    <span className="share"><FaShareAlt/></span>
                    <span className="bookmark"><FaRegBookmark/></span>
                </div>
                <div className="description">
                    <h1>Parówki w cieście francuskim z warzywami</h1>
                    <p>dsaudsuiiuhsdahuidsauhidsadusagudyiuiasduhiasduihdsuahiuihdsauhidsauhidsauhidsauihduihsauishaduhidsauhisad</p>
                </div>
                <div className="icons">
                    <span className="cooking-time">
                        <FaRegClock/> <p>30min</p>
                    </span>
                    <span className="difficult">
                        <FaRegFlag/> <p>łatwy</p>
                    </span>
                    <span className="number-of-views">
                        <FaUtensils/> <p>4</p>
                    </span>
                </div>
            </div>
        </>
    )
}

export default DishOfTheDay
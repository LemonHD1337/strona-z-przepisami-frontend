import React from "react";

import DishOfTheDay from "./DishOfTheDay";
import TheBestReceipts from "./TheBestReceipt";

import '../../Styles/main.css'

const Main = () =>{
    return(
        <>
            <article className="container">
                <p>Danie Dnia <span id="date">Środa 02.08.2022</span></p>
                <hr className="section-decoration"/>
                <div className="content">
                    <DishOfTheDay/>
                </div>
            </article>
            <article className="container">
                <p className="the-best-receipt-name">Najpopularniejsze dania</p>
                <hr className="section-decoration"/>
                <div className="content">
                    <TheBestReceipts/>
                </div>
            </article>
        </>
    )
}


export default Main
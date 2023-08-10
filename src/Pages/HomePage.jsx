import React from "react";

import DishOfTheDay from "../Components/DishOfTheDay";
import TheBestReceipts from "../Components/TopThreeRecipes";
import ArticleComponent from "../Components/ArticleComponent";

const HomePage = () =>{
    return(
        <>
            <ArticleComponent
                title ={"Danie Dnia"}
                date={"Środa 26.08.2024"}
            >
                <DishOfTheDay/>
            </ArticleComponent>
            <ArticleComponent
                title={"Najpopularniejsze dania"}
            >
                <TheBestReceipts/>
            </ArticleComponent>
        </>
    )
}
export default HomePage
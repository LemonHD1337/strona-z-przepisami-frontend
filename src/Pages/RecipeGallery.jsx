import React from "react";

import '../Styles/recipeGallery.css'
import {useSelector} from "react-redux";
import {useParams} from "react-router";

import idCategory from "../utils/idCategory";

import RecipeLayout from "../Components/RecipeLayout";

const RecipeGallery = () =>{
    const {category} = useParams()
    const data = useSelector(store=> store.recipes)
    const loading = data.loading
    const recipes = data.recipes
    console.log(recipes)


    const content = recipes.map(recipe => {
        if(recipe.kategoria === idCategory(category)){
            return (
                <RecipeLayout
                    key ={recipe.idPrzepisy}
                    category={category}
                    data ={recipe}
                />
            )
        }
    })

    return(
        <div>
            {loading ? (
                <svg className="spinner" role="alert" aria-live="assertive">
                    <circle cx="30" cy="30" r="20" className="circle" />
                </svg>
            ) : content}
        </div>
    )
}

export default RecipeGallery
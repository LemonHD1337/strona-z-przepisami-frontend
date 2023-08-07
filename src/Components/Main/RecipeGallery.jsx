import React from "react";
import {useParams} from "react-router";

const RecipeGallery = () =>{
    let {name} = useParams()
    return(
        <p>{name}</p>
    )
}

export default RecipeGallery
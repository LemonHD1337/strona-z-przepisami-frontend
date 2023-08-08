import React, {useEffect, useState} from "react";
import {useParams} from "react-router";

import RecipeLayout from "./RecipeLayout";

import '../../Styles/recipeGallery.css'
import {Link} from "react-router-dom";
import axios from "axios";
const RecipeGallery = () =>{
    let {name} = useParams()

    const [data, setData] = useState([]);

    const getData = async () => {
        const result = await axios('http://127.0.0.1:8000/api/przepisy');
        setData(result.data);
    }

    useEffect(()=>{
        getData()
    }, [])

    const recipes = data.map(recipe =>(
        <RecipeLayout
            key={recipe.idPrzepisy}
            data = {recipe}
        />
    ))

    return(
            <div className="containerRecipeGallery">
                {recipes}
            </div>
    )
}

export default RecipeGallery
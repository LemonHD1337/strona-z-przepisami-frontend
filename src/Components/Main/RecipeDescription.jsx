import React, {useEffect, useState} from "react";
import {useParams} from "react-router";

import '../../Styles/recipeDescription.css'
import axios from "axios";
const RecipeDescription = () => {
    let {id} = useParams()

    const [data, setData] = useState([]);

    const getData = async () => {
        const result = await axios(`http://127.0.0.1:8000/api/przepis/${id}`);
        console.log(result.data)
        setData(result.data);
    }

    useEffect(()=>{
        getData()
    }, [])


    return(
        <div className="containerRecipeDescription">
            <img src="" alt=""/>

        </div>
    )
}

export default RecipeDescription
import React, {useEffect, useState} from "react";
import axios from "axios";

import RecipeCategory from "./RecipeCategory";
const Recipe = () =>{

    const [data, setData] = useState([]);

    const getData = async () => {
        const result = await axios('http://127.0.0.1:8000/api/kategoria');
        console.log(result.data)
        setData(result.data);
    }

    useEffect(()=>{
        getData()
    }, [])

    const categories = data.map(category => (
        <RecipeCategory
            key={category.idkategoria}
            name={category.nazwa}
            img={category.zdjecie}
        />
    ))

    return(
        <div className="categoriesContainer">
            {categories}
        </div>
    )
}

export default Recipe
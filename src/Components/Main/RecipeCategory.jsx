import React from "react";
import {Link} from "react-router-dom";

import '../../Styles/RecipeCategory.css'
const RecipeCategory = ({name, img}) => {
    return(
        <Link to={`/przepisy/${name}`}>
            <div className="category">
                <div style={{backgroundImage: `url("http://127.0.0.1:8000/img/${name}.png")`}} className="bgc-i">
                    <p>{name}</p>
                </div>
            </div>
        </Link>
    )
}

export default RecipeCategory
import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const DropDownRecipeMenu = ({func}) =>{
    const categories = useSelector(store => store.categories)
    const loading = categories.loading
    const data = categories.categories

    const dropdownList = data.map(({idkategoria , nazwa}) =>(
        <Link
            to={`/przepisy/${nazwa}`}
            key={idkategoria}
        >
            <li
                onClick={func}
                name={"recipe"}
            >
                {nazwa}
            </li>
        </Link>
    ))

    return(
        <ul className={"dropdown"}>
            {loading ? (
                <svg className="spinner" role="alert" aria-live="assertive">
                    <circle cx="30" cy="30" r="20" className="circle" />
                </svg>
            ): dropdownList}
        </ul>
    )
}

export default DropDownRecipeMenu
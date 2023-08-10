import axios from "axios";
export const FETCH_CATEGORIES_LOADING = 'FETCH_CATEGORIES_LOADING'
export const FETCH_CATEGORIES_SUCCEEDED = 'FETCH_CATEGORIES_SUCCEEDED'
export const FETCH_CATEGORIES_FAILED = 'FETCH_CATEGORIES_FAILED'

const fetchCategoriesLoading = () =>{
    return{
        type: FETCH_CATEGORIES_LOADING,
    }
}

const fetchCategoriesSucceeded = (categories) =>{
    return{
        type: FETCH_CATEGORIES_SUCCEEDED,
        payload: categories,
    }
}

const fetchCategoriesFailed = (error) => {
    return{
        type: FETCH_CATEGORIES_FAILED,
        payload: error,
    }
}

export const fetchCategories = () =>{
    return function (dispatch){
        dispatch(fetchCategoriesLoading())
        axios.get("http://127.0.0.1:8000/api/kategoria")
            .then(res => {
                const data = res.data
                dispatch(fetchCategoriesSucceeded(data))
            })
            .catch(err => {
                dispatch(fetchCategoriesFailed(err.message))
            })
    }
}


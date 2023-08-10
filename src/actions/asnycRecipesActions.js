import axios from "axios";

export const FETCH_RECIPES_LOADING = 'FETCH_RECIPES_LOADING'
export const FETCH_RECIPES_SUCCEEDED = 'FETCH_RECIPES_SUCCEEDED'
export const FETCH_RECIPES_FAILED = 'FETCH_RECIPES_FAILED'

const fetchRecipesLoading = () =>{
    return{
        type: FETCH_RECIPES_LOADING,
    }
}

const fetchRecipesSucceeded = recipes =>{
    return{
        type: FETCH_RECIPES_SUCCEEDED,
        payload: recipes,
    }
}

const fetchRecipesFailed = error =>{
    return{
        type: FETCH_RECIPES_FAILED,
        payload: error
    }
}

export const fetchRecipes = () =>{
    return function (dispatch){
        dispatch(fetchRecipesLoading())
        axios.get(`http://127.0.0.1:8000/api/przepisy`)
            .then(res =>{
                const data = res.data
                dispatch(fetchRecipesSucceeded(data))
            })
            .catch(err =>{
                dispatch(fetchRecipesFailed(err.message))
            })
    }
}
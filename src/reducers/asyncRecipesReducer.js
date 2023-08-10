import {
    FETCH_RECIPES_LOADING,
    FETCH_RECIPES_FAILED,
    FETCH_RECIPES_SUCCEEDED
} from "../actions/asnycRecipesActions";

const INITIAL_STATE = {
    loading: false,
    recipes: [],
    error: ''
}

export const asyncRecipesReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type){
        case FETCH_RECIPES_LOADING:
            return{
                ...state,
                loading: true
            }
        case FETCH_RECIPES_SUCCEEDED:
            return{
                ...state,
                loading: false,
                recipes: action.payload,
            }
        case FETCH_RECIPES_FAILED:
            return{
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}
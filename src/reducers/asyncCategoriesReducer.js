import {
    FETCH_CATEGORIES_SUCCEEDED,
    FETCH_CATEGORIES_FAILED,
    FETCH_CATEGORIES_LOADING
} from "../actions/asyncCategoriesActions";


const INITIAL_STATE = {
    loading: false,
    categories: [],
    error: ''
}

export const asyncCategoriesReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case FETCH_CATEGORIES_LOADING:
            return{
                ...state,
                loading: true,
            };
        case FETCH_CATEGORIES_SUCCEEDED:
            return {
                ...state,
                loading: false,
                categories: action.payload,
            };
        case FETCH_CATEGORIES_FAILED:
            return{
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}



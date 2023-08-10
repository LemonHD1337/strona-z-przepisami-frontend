import {combineReducers} from "redux";
import {asyncCategoriesReducer} from "./asyncCategoriesReducer";
import {asyncRecipesReducer} from "./asyncRecipesReducer";


export const rootReducers = combineReducers({
    categories: asyncCategoriesReducer,
    recipes: asyncRecipesReducer,
})
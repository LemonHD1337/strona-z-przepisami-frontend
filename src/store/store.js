import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {rootReducers} from "../reducers/rootReducers";
import {fetchCategories} from "../actions/asyncCategoriesActions";
import {fetchRecipes} from "../actions/asnycRecipesActions";

const store = createStore(rootReducers, applyMiddleware(thunk))

store.subscribe(()=> console.log(store.getState()))
store.dispatch(fetchCategories())
store.dispatch(fetchRecipes())
export default store;

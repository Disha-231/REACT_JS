import { combineReducers } from "redux";
import formReducer from "./studentReducer";

export const rootReducer = combineReducers({
    form : formReducer,
})
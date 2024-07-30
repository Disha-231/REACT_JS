import { combineReducers } from "redux";
import formReducer from "./UserReducer";

export const rootReducer = combineReducers({
    form : formReducer,
})
import { combineReducers } from "redux";
import CounterReduser from "./CounterReducer";
import CrudReducer from "./CrudReducer";

const rootReducer = combineReducers({
    cnt: CounterReduser,
    crud: CrudReducer
})
export default rootReducer
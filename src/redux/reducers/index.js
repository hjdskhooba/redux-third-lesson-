import { combineReducers } from "redux";
import users from "./users";

const rootReducer = () => {return combineReducers({
    users
})}

export default rootReducer;
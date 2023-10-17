import { combineReducers } from "redux";
import titleReducer from './titleReducer'
import usersReducer from "./usersReducer";
import oneUsersReducer from "./oneUsersReducer";

export const rootReducer = combineReducers({
    titleReducer,
    usersReducer,
    oneUsersReducer
})


import { types } from "./types";

const initialState = {
    oneUsers: []
}

export default function oneUsersReducer(state = initialState, action) {
    switch(action.type) {
        case types.ONEUSERS:
            return {userInfo: action.payload}
        default: return state
    }
}
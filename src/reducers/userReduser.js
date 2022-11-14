import { SET_USER } from "../action/types"

const INITIAL_STATE = {
    user: null
}

const userRedusers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
}

export default userRedusers
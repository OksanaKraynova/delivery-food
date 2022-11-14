import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import goodReducer from "./currentGood";
import userRedusers from "./userReduser";

const rootReducer = combineReducers({
    userState: userRedusers,
    goodState: goodReducer,
    cartState: cartReducer
})

export default rootReducer
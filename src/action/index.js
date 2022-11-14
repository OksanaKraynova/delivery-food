import { auth, provider } from "../firebase";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { SET_USER, GET_CART, SET_LOADING_STATUS } from "./types";

export const setUser = payload => ({
    type: SET_USER,
    user: payload
})

export const getArticles = payload => ({
    type: GET_CART,
    payload
})

export const setLoading = status => ({
    type: SET_LOADING_STATUS,
    status
})

export const signInAPI = () => {
    return (dispatch) => {
        signInWithPopup(auth, provider)
            .then(payload => {
                dispatch(setUser(payload.user))
            })
            .catch(err => alert(err.message))
    }
}

export const  getUserAuth = () => {
    return (dispatch) => {
        onAuthStateChanged(auth, user => {
            if(user) {
                dispatch(setUser(user))
            }
        })
    }
}

export const signOutAPI = () => {
    return (dispatch) => {
        signOut(auth).then(( ) => {
            dispatch(setUser(null))
        }).catch(err => alert(err.message))
    }
}
import { createReducer } from "@reduxjs/toolkit"
import { setCurrentUser, updateAuth } from "../actions/userActions"
import { IUserData } from "../../lib/types"

interface IState {
    isAuth:boolean
    currentUser:IUserData | null
}

const initialState:IState = {
    isAuth:false,
    currentUser: null,
}

const userReducer = createReducer(initialState, builder => {
    builder
        .addCase(updateAuth,(state,action) => {
            state.isAuth = action.payload
        })
        .addCase(setCurrentUser,(state,action) => {
            state.currentUser = action.payload
        })
})

export default userReducer
import { createReducer } from "@reduxjs/toolkit"
import { updateAuth } from "../actions/userActions"

interface IState {
    isAuth:boolean
}

const initialState:IState = {
    isAuth:false
}

const userReducer = createReducer(initialState, builder => {
    builder
        .addCase(updateAuth,(state,action) => {
            state.isAuth = action.payload
        })
})

export default userReducer
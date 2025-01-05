import { createReducer } from "@reduxjs/toolkit"
import { setCurrentUser, updateAuth } from "../actions/userActions"
import { IPost } from "../../lib/types"
import { setAllPosts } from "../actions/postsActions"

interface IState {
    all:IPost[]
}

const initialState:IState = {
    all:[]
}

const postsReducer = createReducer(initialState, builder => {
    builder
        .addCase(setAllPosts,(state,action) => {
            state.all = action.payload
        })
        
})

export default postsReducer
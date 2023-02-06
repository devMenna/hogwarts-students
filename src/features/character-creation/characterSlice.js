import { createSlice } from "@reduxjs/toolkit";

const initialState = [

]

const characterSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        createdUser(state,action){
            state.push(...action.payload)
        }
    }
})

export const { selectUserData } = (state) => state.user

export const { createdUser } = characterSlice.actions

export default characterSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const initialState = {

}

const characterSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        createdUser(state,action){
            state['mainUser'] = (action.payload)
        }
    }
})

export const { createdUser } = characterSlice.actions

export default characterSlice.reducer
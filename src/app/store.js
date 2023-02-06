import { configureStore } from "@reduxjs/toolkit";
import characterReducer from '../features/character-creation/characterSlice'

export const store = configureStore({
    reducer:{
        user: characterReducer
    }
})

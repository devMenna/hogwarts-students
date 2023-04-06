import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    favoritesResult(state, action) {
      state.push(action.payload);
    },
  },
});

export const { favoritesResult } = favoritesSlice.actions;

export default favoritesSlice.reducer;

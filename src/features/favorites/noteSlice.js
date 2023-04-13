import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    noteFavorite(state, action) {
      state.push(action.payload);
    },
  },
});

export const { noteFavorite } = noteSlice.actions;

export default noteSlice.reducer;

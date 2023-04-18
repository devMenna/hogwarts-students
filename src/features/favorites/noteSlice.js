import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    noteFavorite(state, action) {
      state.push(action.payload);
    },
    resetNote(state) {
      return initialState;
    },
  },
});

export const { noteFavorite, resetNote } = noteSlice.actions;

export default noteSlice.reducer;

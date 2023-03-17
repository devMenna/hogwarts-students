import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const potionsSlice = createSlice({
  name: 'potions',
  initialState,
  reducers: {
    potionsResult(state, action) {
      console.log('Im here');
      state.push(...action.payload);
    },
  },
});

export const { potionsResult } = potionsSlice.actions;

export default potionsSlice.reducer;

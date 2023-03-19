import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const spellsSlice = createSlice({
  name: 'potions',
  initialState,
  reducers: {
    spellsResult(state, action) {
      state.push(...action.payload);
    },
  },
});

export const { spellsResult } = spellsSlice.actions;

export default spellsSlice.reducer;

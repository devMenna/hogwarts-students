import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  userData: {},
};

const characterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createdUser(state, action) {
      Object.assign(state.userData, action.payload);
    },
  },
});

export const { createdUser } = characterSlice.actions;

export default characterSlice.reducer;

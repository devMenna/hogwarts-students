import { configureStore } from '@reduxjs/toolkit';
import characterReducer from '../features/character-creation/characterSlice';
import potionsReducer from '../features/search-engine/potionsSlice';

export const store = configureStore({
  reducer: {
    user: characterReducer,
    potions: potionsReducer,
  },
});

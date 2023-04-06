import { combineReducers, configureStore } from '@reduxjs/toolkit';
import characterReducer from '../features/character-creation/characterSlice';
import potionsReducer from '../features/search-engine/potionsSlice';
import spellsReducer from '../features/search-engine/spellsSlice';
import favoritesReducer from '../features/favorites/favoritesSlice';

const rootReducer = combineReducers({
  user: characterReducer,
  potions: potionsReducer,
  spells: spellsReducer,
  favorites: favoritesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

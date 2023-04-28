import {combineReducers, configureStore} from '@reduxjs/toolkit';
import memorandumSlice from './memorandumSlice';

const rootReducer = combineReducers({
  toolkit: memorandumSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

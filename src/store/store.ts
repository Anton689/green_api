import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { contactsReducer, appReducer } from './slices';

const rootReducer = combineReducers({
  app: appReducer,
  contacts: contactsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

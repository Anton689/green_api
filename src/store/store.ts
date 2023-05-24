import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { contactsReducer, appReducer, chatReducer } from './slices';

const rootReducer = combineReducers({
  app: appReducer,
  contacts: contactsReducer,
  chats: chatReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

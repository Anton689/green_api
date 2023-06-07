/* eslint-disable @typescript-eslint/no-use-before-define */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { chatAPI } from 'api';
import { AuthType } from 'types';

type InitialStateType = {
  idInstance: string | null;
  apiToken: string | null;
  isAuth: boolean;
  isAuthError: boolean;
};

const initialState: InitialStateType = {
  idInstance: null,
  apiToken: null,
  isAuth: false,
  isAuthError: false,
};

export const checkAuthData = createAsyncThunk(
  'auth/checkAuthData',
  async (data: AuthType, { dispatch }) => {
    try {
      dispatch(setAuthError(false));
      const { instanceValue, tokenValue } = data;
      await chatAPI.checkAuth(instanceValue, tokenValue);

      dispatch(setAuthData(data));
    } catch (error: any) {
      dispatch(setAuthError(true));
    }
  },
);

const appSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthData: (state, action) => {
      state.idInstance = action.payload.instanceValue;
      state.apiToken = action.payload.tokenValue;
      state.isAuth = true;
    },
    setAuthError: (state, action) => {
      state.isAuthError = action.payload;
    },
    deleteToken: state => {
      state.apiToken = null;
      state.idInstance = null;
    },
    logOut: state => {
      state.isAuth = false;
      state.idInstance = '';
      state.apiToken = '';
    },
  },
});

export const { setAuthData, deleteToken, logOut, setAuthError } = appSlice.actions;
export const appReducer = appSlice.reducer;

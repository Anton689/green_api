import { createSlice } from '@reduxjs/toolkit';

type InitialStateType = {
  idInstance: string | null;
  apiToken: string | null;
  isAuth: boolean;
};

const initialState: InitialStateType = {
  idInstance: null,
  apiToken: null,
  isAuth: false,
};

const appSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthData: (state, action) => {
      state.idInstance = action.payload.instanceValue;
      state.apiToken = action.payload.tokenValue;
      state.isAuth = true;
    },
    deleteToken: state => {
      state.apiToken = null;
      state.idInstance = null;
    },
    logOut: state => {
      state.isAuth = false;
    },
  },
});

export const { setAuthData, deleteToken, logOut } = appSlice.actions;
export const appReducer = appSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const appSlice = createSlice({
  name: 'calls',
  initialState,
  reducers: {},
  extraReducers: builder => {},
});

export const appReducer = appSlice.reducer;

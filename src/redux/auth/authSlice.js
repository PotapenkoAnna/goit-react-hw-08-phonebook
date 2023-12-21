import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { logOut, login, refreshUser, signUp } from './auth';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  user: { name: null, email: null }, 
  token: null,
  error: null,
  isLoggedIn: false,
  isRefreshing: false, 
  isLoading: false,
};
 
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {}, 
  extraReducers: (builder) => {
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addMatcher(isAnyOf(signUp.pending, login.pending, logOut.pending, refreshUser.pending), (state) => {
        state.isLoading = true;
        state.isRefreshing = true;
      })
      .addMatcher(isAnyOf(signUp.rejected, login.rejected, logOut.rejected, refreshUser.rejected), (state, action) => {
        state.isLoading = false;
        state.isRefreshing = false;
        state.error = action.error; 
      })
      .addMatcher(isAnyOf(signUp.fulfilled, login.fulfilled, logOut.fulfilled, refreshUser.fulfilled), (state) => {
        state.isLoading = false;
        state.error = null;
      });
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const { reducer: authReducer, actions: authActions } = authSlice;

export const persistedReducer = persistReducer(persistConfig, authReducer);
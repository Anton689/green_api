import { RootState } from 'store';

export const selectAuth = (state: RootState): boolean => state.app.isAuth;
export const selectIsAuthError = (state: RootState): boolean => state.app.isAuthError;

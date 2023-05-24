import { RootState } from 'store';

export const selectAuth = (state: RootState): boolean => state.app.isAuth;

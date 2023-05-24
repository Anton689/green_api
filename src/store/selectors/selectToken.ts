import { RootState } from 'store';

export const selectToken = (state: RootState): string | null => state.app.apiToken;

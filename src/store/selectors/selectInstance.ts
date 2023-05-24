import { RootState } from 'store';

export const selectInstance = (state: RootState): string | null => state.app.idInstance;

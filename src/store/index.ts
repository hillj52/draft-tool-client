import { Dispatch } from '@reduxjs/toolkit';
import { store } from './store';

export * as actionCreators from './action-creators';

export { store };

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunkApi = {
  dispatch: Dispatch;
  rejectValue: string;
};

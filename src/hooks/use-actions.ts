import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { actionCreators } from '../store';
import { useAppDispatch } from './use-app-dispatch';

export const useActions = () => {
  const dispatch = useAppDispatch();
  return useMemo(
    () => bindActionCreators(actionCreators, dispatch),
    [dispatch]
  );
};

import {
  ActionReducerMapBuilder,
  createSlice,
  SliceCaseReducers,
  ValidateSliceCaseReducers,
} from '@reduxjs/toolkit';

export interface GenericState<T> {
  data?: T;
  loading: boolean;
  error?: string;
}

export const createGenericSlice = <
  T,
  Reducers extends SliceCaseReducers<GenericState<T>>
>({
  name = '',
  initialState,
  reducers,
  extraReducers,
}: {
  name: string;
  initialState: GenericState<T>;
  reducers: ValidateSliceCaseReducers<GenericState<T>, Reducers>;
  extraReducers: (builder: ActionReducerMapBuilder<GenericState<T>>) => void;
}) =>
  createSlice({
    name,
    initialState,
    reducers: { ...reducers },
    extraReducers,
  });

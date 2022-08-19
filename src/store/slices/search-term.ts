import { createSlice } from '@reduxjs/toolkit';
import { updateSearchTerm } from '../actions';

const initialState = '';

export const searchTermSlice = createSlice({
  name: 'search-term',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(updateSearchTerm, (state, { payload }) => payload);
  },
});

export default searchTermSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { setFeaturedPlayer, unsetFeaturedPlayer } from '../actions';

interface FeaturedPlayerState {
  playerId?: string;
}

const initialState: FeaturedPlayerState = {};

const featuredPlayerSlice = createSlice({
  name: 'featured-player',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(setFeaturedPlayer, (state, { payload }) => {
      state.playerId = payload;
    });
    builder.addCase(unsetFeaturedPlayer, (state) => {
      state.playerId = undefined;
    });
  },
});

export default featuredPlayerSlice.reducer;

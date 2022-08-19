import { createSlice } from '@reduxjs/toolkit';
import { setFeaturedTeam, unsetFeaturedTeam } from '../actions';

interface FeaturedTeamState {
  teamId?: string;
}

const initialState: FeaturedTeamState = {};

const featuredTeamSlice = createSlice({
  name: 'featured-team',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(setFeaturedTeam, (state, { payload }) => {
      state.teamId = payload;
    });
    builder.addCase(unsetFeaturedTeam, (state) => {
      state.teamId = undefined;
    });
  },
});

export default featuredTeamSlice.reducer;

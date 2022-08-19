import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth';
import playersReducer from './slices/players';
import teamsReducer from './slices/teams';
import featuredPlayerReducer from './slices/featured-player';
import featuredTeamReducer from './slices/featured-team';
import searchTermReducer from './slices/search-term';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    players: playersReducer,
    teams: teamsReducer,
    featuredPlayer: featuredPlayerReducer,
    featuredTeam: featuredTeamReducer,
    searchTerm: searchTermReducer,
  },
});

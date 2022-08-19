import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AppThunkApi } from '..';
import { AuthAPI, PlayersAPI, DraftAPI, TeamsAPI } from '../../apis';
import { Player } from '../../models/player';
import { RosterPosition } from '../../models/roster-position';
import { Team } from '../../models/team';

export interface LoginProps {
  email: string;
  password: string;
}

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }: LoginProps, thunkAPI) => {
    try {
      const response = await AuthAPI.login(email, password);
      return response;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue('INvalid Email/Password');
    }
  }
);

export const getPlayers = createAsyncThunk<Player[], void, AppThunkApi>(
  'players/fetch',
  async (_, thunkAPI) => {
    thunkAPI.dispatch(getPlayers.pending);
    try {
      const response = await PlayersAPI.get();
      return response;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue('Server error');
    }
  }
);

export const updateSearchTerm = createAction<string>('search-term/update');

export const getTeams = createAsyncThunk<Team[], void, AppThunkApi>(
  'teams/fetch',
  async (_, thunkAPI) => {
    thunkAPI.dispatch(getTeams.pending);
    try {
      const response = TeamsAPI.get();
      return response;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue('Server error');
    }
  }
);

export const addTeam = createAsyncThunk<
  Team,
  { owner: string; name: string },
  AppThunkApi
>('teams/add', async ({ owner, name }, thunkAPI) => {
  thunkAPI.dispatch(addTeam.pending);
  try {
    const response = await TeamsAPI.create(owner, name);
    return response;
  } catch (err) {
    console.log(err);
    return thunkAPI.rejectWithValue('Server error');
  }
});

export const setFeaturedPlayer = createAction<string>('featured-player/set');

export const unsetFeaturedPlayer = createAction('featured-player/unset');

export const setFeaturedTeam = createAction<string>('featured-team/set');

export const unsetFeaturedTeam = createAction('featured-team/unset');

interface DraftPlayerProps {
  playerId: string;
  teamId: string;
  price: number;
  position: RosterPosition;
}

export const draftPlayer = createAsyncThunk(
  'draft/draft-player',
  async ({ playerId, teamId, price, position }: DraftPlayerProps, thunkAPI) => {
    try {
      const response = await DraftAPI.draftPlayer(
        playerId,
        teamId,
        price,
        position
      );
      return response;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue('Server error');
    }
  }
);

interface UndraftPlayerProps {
  playerId: string;
  teamId: string;
  position: RosterPosition;
}

export const undraftPlayer = createAsyncThunk(
  'draft/undraft-player',
  async ({ playerId, teamId, position }: UndraftPlayerProps, thunkAPI) => {
    try {
      const response = await DraftAPI.undraftPlayer(playerId, teamId, position);
      return response;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue('Server error');
    }
  }
);

import { AppDispatch } from '..';
import { RosterPosition } from '../../models/roster-position';
import {
  getPlayers,
  getTeams,
  addTeam as addTeamAction,
  login as loginAction,
  setFeaturedPlayer,
  setFeaturedTeam,
  unsetFeaturedPlayer,
  unsetFeaturedTeam,
  updateSearchTerm as updateSearchTermAction,
  draftPlayer as draftPlayerAction,
  undraftPlayer as undraftPlayerAction,
} from '../actions';

export const login =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    dispatch(loginAction({ email, password }));
  };

export const fetchPlayers = () => async (dispatch: AppDispatch) => {
  dispatch(getPlayers());
};

export const updateSearchTerm =
  (term: string) => async (dispatch: AppDispatch) => {
    dispatch(updateSearchTermAction(term));
  };

export const featurePlayer =
  (playerId?: string) => async (dispatch: AppDispatch) => {
    if (playerId) {
      dispatch(setFeaturedPlayer(playerId));
    } else {
      dispatch(unsetFeaturedPlayer());
    }
  };

export const featureTeam =
  (teamId?: string) => async (dispatch: AppDispatch) => {
    if (teamId) {
      dispatch(setFeaturedTeam(teamId));
    } else {
      dispatch(unsetFeaturedTeam());
    }
  };

export const fetchTeams = () => async (dispatch: AppDispatch) => {
  dispatch(getTeams());
};

export const addTeam =
  (owner: string, name: string) => async (dispatch: AppDispatch) => {
    dispatch(addTeamAction({ owner, name }));
  };

export const draftPlayer =
  (playerId: string, teamId: string, position: RosterPosition, price: number) =>
  async (dispatch: AppDispatch) => {
    dispatch(draftPlayerAction({ playerId, teamId, position, price }));
  };

export const undraftPlayer =
  (playerId: string, teamId: string, position: RosterPosition) =>
  async (dispatch: AppDispatch) => {
    dispatch(undraftPlayerAction({ playerId, teamId, position }));
  };

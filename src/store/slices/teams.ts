import { Team } from '../../models/team';
import { addTeam, draftPlayer, getTeams, undraftPlayer } from '../actions';
import { createGenericSlice, GenericState } from './generic-slice';

const initialState: GenericState<Team[]> = {
  data: [],
  loading: false,
};

const teamsSlice = createGenericSlice({
  name: 'teams',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getTeams.pending, (state) => {
      state.loading = true;
      state.error = undefined;
      state.data = undefined;
    });
    builder.addCase(getTeams.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.error = undefined;
      state.loading = false;
    });
    builder.addCase(getTeams.rejected, (state) => {
      state.data = undefined;
      state.loading = false;
      state.error = 'Server error';
    });
    builder.addCase(addTeam.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addTeam.fulfilled, (state, { payload }) => {
      if (state.data) {
        state.data.push(payload);
      } else {
        state.data = [payload];
      }
      state.loading = false;
    });
    builder.addCase(addTeam.rejected, (state) => {
      state.loading = false;
      state.error = 'Error adding team';
    });
    builder.addCase(draftPlayer.fulfilled, (state, { payload }) => {
      const { id } = payload.team;
      const data = state.data?.map((team) => {
        if (team.id !== id) {
          return { ...team };
        }
        return {
          ...payload.team,
        };
      });
      return { data, loading: false };
    });
    builder.addCase(draftPlayer.rejected, (state) => {
      state.error = 'Server error';
    });
    builder.addCase(undraftPlayer.fulfilled, (state, { payload }) => {
      const { id } = payload.team;
      const data = state.data?.map((team) => {
        if (team.id !== id) {
          return { ...team };
        }
        return {
          ...payload.team,
        };
      });
      return { data, loading: false };
    });
    builder.addCase(undraftPlayer.rejected, (state) => {
      state.error = 'Server error';
    });
  },
});

export default teamsSlice.reducer;

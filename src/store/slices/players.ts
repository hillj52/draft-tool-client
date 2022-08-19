import { Player } from '../../models/player';
import { draftPlayer, getPlayers, undraftPlayer } from '../actions';
import { createGenericSlice, GenericState } from './generic-slice';

const initialState: GenericState<Player[]> = {
  data: [],
  loading: false,
};

const playersSlice = createGenericSlice({
  name: 'players',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getPlayers.pending, (state) => {
      state.loading = true;
      state.data = undefined;
      state.error = undefined;
    });
    builder.addCase(getPlayers.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.error = undefined;
    });
    builder.addCase(getPlayers.rejected, (state) => {
      state.loading = false;
      state.data = undefined;
      state.error = 'Error loading players';
    });
    builder.addCase(draftPlayer.fulfilled, (state, { payload }) => {
      const index = state.data?.findIndex(({ id }) => id === payload.player.id);
      if (index) {
        state.data?.splice(index, 1, payload.player);
      }
    });
    builder.addCase(draftPlayer.rejected, (state) => {
      state.error = 'Server error';
    });
    builder.addCase(undraftPlayer.fulfilled, (state, { payload }) => {
      const index = state.data?.findIndex(({ id }) => id === payload.player.id);
      if (index) {
        state.data?.splice(index, 1, payload.player);
      }
    });
    builder.addCase(undraftPlayer.rejected, (state) => {
      state.error = 'Server error';
    });
  },
});

export default playersSlice.reducer;

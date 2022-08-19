import { createGenericSlice, GenericState } from './generic-slice';
import { login } from '../actions';

const initialState: GenericState<string> = {
  loading: false,
};

const authSlice = createGenericSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(login.pending, (state) => {
      console.log('In pending case reducer');
      state.loading = true;
      state.data = undefined;
      state.error = undefined;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.error = undefined;
    });
    builder.addCase(login.rejected, (state, { payload }) => {
      console.log(payload);
      state.loading = false;
      state.error = 'Invalid Email/Password';
    });
  },
});

export default authSlice.reducer;

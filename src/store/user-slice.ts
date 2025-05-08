import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { AppDispatch, RootState } from ".";

type UserState = {
  id: string;
  name: string;
  email: string;
  token: string;
  loading?: boolean;
};
const initialState: UserState = {
  id: "",
  name: "",
  email: "",
  token: "",
  loading: false,
};
export const rSetUser = createAsyncThunk.withTypes<{
  dispatch: AppDispatch;
  state: RootState;
}>()("user/setUser", async (user: UserState, { dispatch }) => {
  await wait(1000);
  dispatch(setUser(user));
});
const userSlice = createSlice({
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setUser: (state, action: PayloadAction<UserState>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(rSetUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(rSetUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(rSetUser.rejected, (state) => {
        state.loading = false;
      });
  },
  name: "user",
});
export const { setToken, setUser } = userSlice.actions;
export default userSlice.reducer;
export const wait = async (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

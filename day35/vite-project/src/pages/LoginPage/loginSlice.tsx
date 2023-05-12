import { createSlice } from "@reduxjs/toolkit";

interface LoginState {
  isLoggedIn: boolean;
}

const initialState: LoginState = {
  isLoggedIn: false,
};

export const loginSlice: any = createSlice({
  name: "Login",
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
  },
});

export const { login } = loginSlice.actions;

export default loginSlice.reducer;

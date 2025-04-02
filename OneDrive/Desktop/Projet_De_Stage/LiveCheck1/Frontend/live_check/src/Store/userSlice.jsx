import { createSlice } from "@reduxjs/toolkit";
import userData from "../static/db.json";

const initialState = {
  user: null,
  admin: null,
  users: userData.users,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      const username = action.payload.username;
      const password = action.payload.password;
      const connectedUser = state.users.find(
        (user) => user.username === username && user.password_hash === password
      );

      state.user = connectedUser ? connectedUser : null;
      state.admin = connectedUser?.id_admin;
    },
    logout: (state) => {
      state.user = null;
      state.admin = null;
      localStorage.clear();
    },
  },
});
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;

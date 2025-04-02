import { createSlice } from "@reduxjs/toolkit";
import userData from "../static/db.json";

const initialState = {
  servers: userData.servers,
};

const ServersSlice = createSlice({
  name: "servers",
  initialState,
  reducers: {
    deleteServer: (state, action) => {
      const updatedServers = state.servers.filter(
        (server) => server.server_id !== action.payload
      );

      state.servers = updatedServers;
    },

    addNewServer: (state, action) => {
      const newServer = action.payload;
      const newServers = [...state.servers, newServer];
      state.servers = newServers;
    },

    updateServer: (state, action) => {
      const server_id = action.payload.id;
      const pos = state.servers.findIndex(
        (server) => server.server_id === server_id
      );

      state.servers[pos] = action.payload.newServer;
    },
  },
});

export default ServersSlice.reducer;

export const { deleteServer, addNewServer, updateServer } =
  ServersSlice.actions;

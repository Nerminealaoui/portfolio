import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import ServersSlice from "./serversSlice";
import GroupsSlice from "./GroupsSlice";
import BackupDetailsSlice from "./BackupDetailSlice";

const Store = configureStore({
  reducer: {
    user: userSlice,
    servers: ServersSlice,
    groups: GroupsSlice,
    backupDetail: BackupDetailsSlice,
  },
});

export default Store;

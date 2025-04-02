import { createSlice } from "@reduxjs/toolkit";
import userData from "../static/db.json";

const initialState = {
  backupDetail: userData.backup_details,
};

const BackupDetailsSlice = createSlice({
  name: "backupDetail",
  initialState,
  reducers: {},
});

export default BackupDetailsSlice.reducer;

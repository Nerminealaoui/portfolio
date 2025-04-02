import { createSlice } from "@reduxjs/toolkit";
import userData from "../static/db.json";

const initialState = {
  groups: userData.groups,
  group: null,
};

const GroupsSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {
    addGroupe: (state, action) => {
      state.groups = [...state.groups, action.payload];
    },

    updateGroupe: (state, action) => {
      const group_id = action.payload.id;
      const pos = state.groups.findIndex(
        (group) => group.group_id === group_id
      );

      state.groups[pos] = action.payload.newGroup;
    },

    deleteGroupe: (state, action) => {
      const updatedGroupe = state.groups.filter(
        (group) => group.group_id !== action.payload
      );
      state.groups = updatedGroupe;
    },

    // getGroupById: (state, action) => {
    //   const groupId = action.payload;
    //   const groupe = state.groups.find((group) => group.group_id === groupId);
    //   state.group = groupe;
    // },
  },
});

export default GroupsSlice.reducer;
export const { deleteGroupe, addGroupe, updateGroupe, getGroupById } =
  GroupsSlice.actions;

import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../fakeData/fakeUsers";

export const userSlice = createSlice({
  name: "users", //name of the state for this reducer
  initialState: { value: UsersData },
  reducers: { // actions associated to our state
    addUser: (state, action) => {
      // action is the setter
      // write code for adding a user
      state.value.push(action.payload);
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;

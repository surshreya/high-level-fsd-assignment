import { createSlice } from "@reduxjs/toolkit";
import man from "./assets/images/profile.png";

const initialState = {
  userInfo: {
    firstName: "Davy",
    lastName: "Jones",
    email: "davyjones@gmail.com",
    phoneExt: "+011",
    phone: "35299731",
    password: "Hi1234!s",
    profileImage: man,
  },
  userPermissions: {
    Membership: true,
    Dashboard: true,
    Campaigns: false,
    Payment: true,
  },
  userRole: {
    role: "Admin",
    type: "Agency",
    status: true,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    updateUserPermission: (state, action) => {
      state.userPermissions = action.payload;
    },
  },
});

export const { updateUserInfo, updateUserPermission } = userSlice.actions;
export default userSlice.reducer;

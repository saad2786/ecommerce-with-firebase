import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  displayName: "",
  photoUrl: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.user = action.payload;
      state.displayName = action.payload.displayName;
      state.email = action.payload.email;
      state.photoUrl = action.payload.photoUrl;
    },

    signOut: (state) => {
      state = initialState;
    },
  },
});

export const { signIn, signOut } = userSlice.actions;

export default userSlice.reducer;

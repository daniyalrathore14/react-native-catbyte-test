import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserMeta {
  id: string;
}
export interface UserState {
  userMeta?: Array<UserMeta>;
}

const initialState: UserState = {
  userMeta: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserMeta: (state, action: PayloadAction<Array<UserMeta>>) => {
      console.log(action.payload);

      state.userMeta = action.payload;
    },
  },
});
export const { setUserMeta } = userSlice.actions;

export default userSlice;

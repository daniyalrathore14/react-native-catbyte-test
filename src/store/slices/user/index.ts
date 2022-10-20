import { RootState } from "~store";
import userSlice from "./slice";

// Reducer
export const userSliceReducer = userSlice.reducer;

// Actions
// Selectors
export const selectUserList = (state: any) => state.user.userMeta;

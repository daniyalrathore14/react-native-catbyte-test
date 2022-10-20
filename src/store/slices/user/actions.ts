import { ApiManager } from "~backend/ApiManager";
import { AppDispatch } from "~store";
import { setUserMeta } from "./slice";

const getUsersList = () => {
  return async (dispatch: AppDispatch) => {
    const res = await ApiManager.get("users");
    if (res?.status === 200) {
      dispatch(setUserMeta(res.data.users));
    }
    //  else onFail && onFail(res);
  };
};
export default getUsersList;

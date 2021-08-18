import { meFetchAction } from "../actions/auth.actions";
import { me as meAPI } from "../api/user.api";
import { store } from "../store";

export const meMidWare = () => {
  meAPI().then((user) => store.dispatch(meFetchAction(user)));
};

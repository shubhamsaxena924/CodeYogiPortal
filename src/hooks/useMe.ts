import { useSelector } from "react-redux";
import { meSelector } from "../selectors/auth.selectors";

export const useMe = () => useSelector(meSelector);
//We will not use hooks like this

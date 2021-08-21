import { lazy } from "react";
const UsersLazy = lazy(() => import("./Users.page"));
export default UsersLazy;

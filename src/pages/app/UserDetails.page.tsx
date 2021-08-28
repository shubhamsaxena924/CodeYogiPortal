import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { appTitleChangeAction } from "../../actions/appUi.actions";
import { userQuerySingleAction } from "../../actions/users.actions";
import Avatar from "../../components/avatar/Avatar";
import {
  selectedUserErrorSelector,
  selectedUserLoadingSelector,
  userByIdSelector,
  userIdsSelector,
} from "../../selectors/users.selectors";
import { useAppSelector } from "../../store";

interface Props {}

const UserDetailsPage: React.FC<Props> = (props) => {
  const userId = +useParams<{ userId: string }>().userId;
  const userIds = useAppSelector(userIdsSelector);
  const user = useAppSelector(userByIdSelector)[userId];
  const isLoading = useAppSelector(selectedUserLoadingSelector);
  const error = useAppSelector(selectedUserErrorSelector);

  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(appTitleChangeAction("Users"));
    dispatch(userQuerySingleAction(userId));
  }, [userId, dispatch]);

  const currentIndex = userIds.findIndex((id) => userId === id);
  return (
    <>
      {/* navigator */}
      <Link
        to="/users"
        className="inline-block p-2 underline text-auth-primary hover:no-underline"
      >
        {"<< Go back to users"}
      </Link>
      <div className="flex items-center justify-center my-5 text-gray-700">
        <button
          className={
            "p-1 border rounded-sm bg-primary-300 bg-opacity-10 disabled:opacity-50 hover:bg-opacity-20 hover:shadow-lg"
          }
          onClick={() => history.push("/users/" + userIds[currentIndex - 1])}
          disabled={currentIndex <= 0 ? true : false}
        >
          {"<<"}
        </button>
        <p className="px-5 tracking-widest">{"UserID " + userId}</p>
        <button
          className={
            " p-1 border rounded-sm bg-primary-300 bg-opacity-10 disabled:opacity-50 hover:bg-opacity-20 hover:shadow-lg"
          }
          onClick={() => history.push("/users/" + userIds[currentIndex + 1])}
          disabled={currentIndex >= userIds.length - 1 ? true : false}
        >
          {">>"}
        </button>
      </div>

      {isLoading && (
        <div className="absolute z-50 w-8 h-8 transform translate-x-3 rounded-full left-1/2 bg-auth-primary animate-pulse"></div>
      )}

      {/* User details */}
      {user && (
        <div className="pl-4 mt-20 space-y-5">
          <div>
            <Avatar
              imageSrc={user.profile_pic_url}
              name={user.first_name + " " + user.last_name}
              size="lg"
              className="object-cover text-white border-4 border-white bg-auth-primary font-josefin"
            />
            <div>{user.id}</div>
            <div>name: {user.first_name + " " + user.last_name}</div>
            <div>bio: {user.bio}</div>{" "}
            <div>academic: {user.academic || "--"}</div>
            <div>phone number: {user.phone_number}</div>
            <div>
              alternate phone number: {user.alternate_phone_number || "--"}
            </div>
            <div>email: {user.email}</div>
            <div>birth year: {user.birth_year || "--"}</div>
          </div>
        </div>
      )}

      {error && <p>{error}</p>}
    </>
  );
};

export default React.memo(UserDetailsPage);

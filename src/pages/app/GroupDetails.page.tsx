import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { appTitleChangeAction } from "../../actions/appUi.actions";
import { groupQuerySingleAction } from "../../actions/groups.actions";
import Avatar from "../../components/avatar/Avatar";
// import Avatar from "../../components/avatar/Avatar";
import {
  groupQueryIdsSelector,
  selectedGroupErrorSelector,
  selectedGroupLoadingSelector,
  selectedGroupSelector,
} from "../../selectors/groups.selectors";
import { useAppSelector } from "../../store";

interface Props {}

const GroupDetailsPage: React.FC<Props> = (props) => {
  const groupId = +useParams<{ groupId: string }>().groupId;
  const dispatch = useDispatch();
  const group = useAppSelector(selectedGroupSelector);
  const error = useAppSelector(selectedGroupErrorSelector);
  const loading = useAppSelector(selectedGroupLoadingSelector);
  const groupIds = useAppSelector(groupQueryIdsSelector);

  const history = useHistory();
  useEffect(() => {
    dispatch(appTitleChangeAction("Groups"));
    dispatch(groupQuerySingleAction(groupId));
  }, [groupId, dispatch]);

  //Otherwise, return will be executed before the group is fetched; Error
  /* if (!group) {
    return <LoaderPulse />;
  } */

  const currentIndex = groupIds.findIndex((id) => groupId === id);

  return (
    <>
      {/* navigator */}
      <Link
        to="/groups"
        className="inline-block p-2 underline text-auth-primary hover:no-underline"
      >
        {"<< Go back to groups"}
      </Link>
      <div className="flex items-center justify-center my-5 text-gray-700">
        <button
          className={
            "p-1 border rounded-sm bg-primary-300 bg-opacity-10 disabled:opacity-50 hover:bg-opacity-20 hover:shadow-lg"
          }
          onClick={() => history.push("/groups/" + groupIds[currentIndex - 1])}
          disabled={currentIndex <= 0 ? true : false}
        >
          {"<<"}
        </button>
        <p className="px-5 tracking-widest">{"GroupID " + groupId}</p>
        <button
          className={
            " p-1 border rounded-sm bg-primary-300 bg-opacity-10 disabled:opacity-50 hover:bg-opacity-20 hover:shadow-lg"
          }
          onClick={() => history.push("/groups/" + groupIds[currentIndex + 1])}
          disabled={currentIndex >= groupIds.length - 1 ? true : false}
        >
          {">>"}
        </button>
      </div>

      {loading && (
        <div className="absolute z-50 w-8 h-8 transform translate-x-3 rounded-full left-1/2 bg-auth-primary animate-pulse"></div>
      )}

      {/* Group Details */}
      {group && (
        <div className="pl-4 mt-20 space-y-5">
          <div>
            <Avatar
              imageSrc={group.group_image_url}
              name={group.name}
              size="lg"
              className="object-cover text-white border-4 border-white bg-auth-primary font-josefin"
            />
          </div>
          <div>id: {group.id}</div>
          <div>name: {group.name}</div>
          <div>description: {group.description}</div>
          <div>chat count: {group.chatCount}</div>
          <div>created at: {group.created_at}</div>
          <div>invited members: {group.invitedMembers.length}</div>
          <div>is academic: {group.is_academic ? "yes" : "no"}</div>
          {group.join_code && <div>group join code: {group.join_code}</div>}
          <div>is private: {group.is_private ? "yes" : "no"}</div>
        </div>
      )}

      {error && <p>{error}</p>}
    </>
  );
};

export default React.memo(GroupDetailsPage);

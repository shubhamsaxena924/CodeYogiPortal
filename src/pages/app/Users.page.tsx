import React, { useEffect, useMemo, useState } from "react";
import { FiList, FiServer } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { appTitleChangeAction } from "../../actions/appUi.actions";
import { usersQueryAction } from "../../actions/users.actions";
import Button from "../../components/button/Button";
import ListCard from "../../components/listTile/ListCard";
import {
  usersQueryLoadingSelector,
  usersSelector,
} from "../../selectors/users.selectors";
import { useAppSelector } from "../../store";

interface Props {}

const UsersPage: React.FC<Props> = (props) => {
  const users = useAppSelector(usersSelector);
  const isLoading = useAppSelector(usersQueryLoadingSelector);
  const dispatch = useDispatch();
  const [isTile, setIsTile] = useState(false);
  useEffect(() => {
    dispatch(appTitleChangeAction("Users"));
    dispatch(usersQueryAction());
  }, []); //eslint-disable-line react-hooks/exhaustive-deps
  const tileButtonHandlerMemo = useMemo(() => {
    return () => setIsTile((value) => !value);
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="absolute z-50 w-8 h-8 mt-10 transform translate-x-3 rounded-full left-1/2 bg-auth-primary animate-pulse"></div>
      ) : (
        <></>
      )}
      <div className="flex-1 hidden px-5 py-5 text-right md:block">
        <span className="inline-block">
          <Button
            Icon={!isTile ? FiList : FiServer}
            type="button"
            theme="primary"
            onClick={tileButtonHandlerMemo}
          ></Button>
        </span>
      </div>
      <div className="flex flex-wrap justify-center pt-10 mx-10 text-center">
        {users.map((user, index) => (
          <ListCard
            key={user.id}
            id={user.id}
            entityName={user.first_name + " " + user.last_name}
            description={user.bio}
            data={user.email}
            imageSrc={user.profile_pic_url}
            imageAlt={user.first_name + " " + user.last_name}
            isTile={isTile}
            theme="primary"
            urlToPushTo="users/"
          />
        ))}
        {!isLoading && users.length === 0 ? (
          <p className="w-full tracking-widest text-center">
            No Results Found!
          </p>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default React.memo(UsersPage);

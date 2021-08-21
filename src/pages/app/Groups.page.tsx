import React, { useEffect, useMemo } from "react";
import { useState } from "react";
import { FiList, FiSearch, FiServer } from "react-icons/fi";
import { groupsQueryAction } from "../../actions/groups.actions";
import { useDispatch } from "react-redux";
// import {
//   groupsFetchAction,
//   groupsQueryAction,
// } from "../../actions/groups.actions";
// import { fetchGroups } from "../../api/groups.api";
import Button from "../../components/button/Button";
import InputField from "../../components/input/InputField";
import ListCard from "../../components/listTile/ListCard";
import ToggleSwitch from "../../components/toggleSwitch/ToggleSwitch";
import {
  groupQueryLoadingSelector,
  groupQuerySelector,
  groupsSelector,
} from "../../selectors/groups.selectors";
import { useAppSelector } from "../../store";
import { appTitleChangeAction } from "../../actions/appUi.actions";

interface Props {}

const GroupsPage: React.FC<Props> = (props) => {
  const [typeSearch, setTypeSearch] = useState(true);
  const query = useAppSelector(groupQuerySelector);
  const groups = useAppSelector(groupsSelector);
  const isLoading = useAppSelector(groupQueryLoadingSelector);

  const dispatch = useDispatch();

  const [isTile, setIsTile] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);
  const [queryOnSubmit, setQueryOnSubmit] = useState(query);
  useEffect(() => {
    dispatch(groupsQueryAction(query));
    dispatch(appTitleChangeAction("Groups"));
    /* fetchGroupsMidWare({
      status: "all-groups",
      query: query,
    }); Not needed anymore; saga will take care */
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  // useMemos
  const toggleHandlerMemo = useMemo(
    () => ({ isOn: typeSearch, setSwitch: setTypeSearch }),
    [typeSearch]
  );
  const submitHandlerMemo = useMemo(() => {
    return (event: any) => {
      event.preventDefault();
      dispatch(groupsQueryAction(queryOnSubmit));

      // fetchGroupsMidWare({
      //   status: "all-groups",
      //   query: queryOnSubmit,
      // });
    };
  }, [queryOnSubmit, dispatch]);
  const tileButtonHandlerMemo = useMemo(() => {
    return () => setIsTile((value) => !value);
  }, []);

  return (
    <div className="text-center">
      <form
        className="block pt-10 mx-10 text-center"
        onSubmit={submitHandlerMemo}
      >
        <InputField
          Icon={FiSearch}
          iconStylingClasses="text-app-primary mr-1 h-5 w-5"
          placeholder="Type to search"
          type="text"
          name="Search"
          value={typeSearch ? query : queryOnSubmit}
          onChange={(event) => {
            setQueryOnSubmit(event.target.value);
            typeSearch && dispatch(groupsQueryAction(event.target.value));
            // fetchGroupsMidWare({
            //   status: "all-groups",
            //   query: event.target.value,
            //   limit: 50,
            // });
          }}
          className="w-full"
        ></InputField>
        <span className="flex justify-between pt-4">
          <div className="flex-1">
            <ToggleSwitch
              title="Search as you type"
              toggleHandler={toggleHandlerMemo}
              theme="primary"
            ></ToggleSwitch>
          </div>
          {typeSearch ? (
            ""
          ) : (
            <div className="flex-1">
              <span className="inline-block">
                <Button
                  type="submit"
                  disabled={typeSearch}
                  buttonText="Search"
                  theme="primary"
                />
              </span>
            </div>
          )}
          <div className="flex-1 hidden py-1 text-right md:block">
            <span className="inline-block">
              <Button
                Icon={!isTile ? FiList : FiServer}
                type="button"
                theme="primary"
                onClick={tileButtonHandlerMemo}
              ></Button>
            </span>
          </div>
        </span>
      </form>
      {isLoading ? (
        <div className="absolute z-50 w-8 h-8 transform translate-x-3 rounded-full left-1/2 bg-auth-primary animate-pulse"></div>
      ) : (
        <></>
      )}
      <div className="flex flex-wrap justify-center pt-10 mx-10">
        {groups.map((group, index) => (
          <ListCard
            key={group.id}
            group={group}
            imageSrc={group.group_image_url}
            imageAlt={group.name}
            isTile={isTile}
            theme="primary"
          />
        ))}
        {!isLoading && groups.length === 0 ? (
          <p className="w-full tracking-widest text-center">
            No Results Found!
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default React.memo(GroupsPage);

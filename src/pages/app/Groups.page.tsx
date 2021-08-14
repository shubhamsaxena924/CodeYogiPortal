import React, { useEffect, useMemo } from "react";
import { useState } from "react";
import { FiList, FiSearch, FiServer } from "react-icons/fi";
import { useDispatch } from "react-redux";
import {
  groupsFetchAction,
  groupsQueryAction,
} from "../../actions/groups.actions";
import { fetchGroups } from "../../api/groups.api";
import Button from "../../components/button/Button";
import InputField from "../../components/input/InputField";
import ListCard from "../../components/listTile/ListCard";
import ToggleSwitch from "../../components/toggleSwitch/ToggleSwitch";
import { useAppSelector } from "../../store";

interface Props {}

const GroupsPage: React.FC<Props> = (props) => {
  const [typeSearch, setTypeSearch] = useState(true);

  const groups = useAppSelector((state) => {
    const groupsIDs = state.groups.queryMap[state.groups.query] || [];
    const groups = groupsIDs.map((id) => state.groups.byId[id]);
    return groups;
  });
  const query = useAppSelector((state) => state.groups.query);

  const dispatch = useDispatch();

  const [isTile, setIsTile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [noResult, setNoResult] = useState(false);
  const [queryOnSubmit, setQueryOnSubmit] = useState(query);
  useEffect(() => {
    setIsLoading(true);
    fetchGroups({
      status: "all-groups",
      limit: 100,
      query: query,
      offset: 0,
    }).then((groups) => {
      dispatch(groupsFetchAction(query, groups));
      setIsLoading(false);
      if (groups.length === 0) {
        setNoResult(true);
      }
    });
  }, [query, dispatch]);

  // useMemos
  const toggleHandlerMemo = useMemo(
    () => ({ isOn: typeSearch, setSwitch: setTypeSearch }),
    [typeSearch]
  );
  const submitHandlerMemo = useMemo(() => {
    return (event: any) => {
      event.preventDefault();
      dispatch(groupsQueryAction(queryOnSubmit));
    };
  }, [queryOnSubmit, dispatch]);
  const tileButtonHandlerMemo = useMemo(() => {
    return () => setIsTile((value) => !value);
  }, []);

  return (
    <div className="text-center pl-14">
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
          value={queryOnSubmit}
          onChange={(event) => {
            setQueryOnSubmit(event.target.value);
            typeSearch && dispatch(groupsQueryAction(event.target.value));
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
            key={index}
            group={group}
            imageSrc={group.group_image_url}
            imageAlt={group.name}
            isTile={isTile}
            theme="primary"
          />
        ))}
        {noResult ? (
          <p className="w-full text-center">No Results Found!</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default React.memo(GroupsPage);

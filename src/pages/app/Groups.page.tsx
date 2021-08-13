import React, { useEffect } from "react";
import { useState } from "react";
import { FiList, FiSearch, FiServer } from "react-icons/fi";
import { fetchGroups } from "../../api/groups.api";
import Button from "../../components/button/Button";
import InputField from "../../components/input/InputField";
import ListCard from "../../components/listTile/ListCard";
import ToggleSwitch from "../../components/toggleSwitch/ToggleSwitch";
import { Group } from "../../models/Group";

interface Props {}

const GroupsPage: React.FC<Props> = (props) => {
  const [typeSearch, setTypeSearch] = useState(true);
  const [groups, setGroups] = useState<Group[]>([]);
  const [query, setQuery] = useState("");
  const [isTile, setIsTile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  let queryValue: string;
  useEffect(() => {
    setIsLoading(true);
    fetchGroups({
      status: "all-groups",
      limit: 100,
      query: query,
      offset: 0,
    }).then((groups) => {
      setIsLoading(false);
      setGroups(() => groups);
    });
  }, [query]);
  return (
    <div className="text-center pl-14">
      <form
        className="block pt-10 mx-10 text-center"
        onSubmit={(event) => {
          event.preventDefault();
          setQuery(() => queryValue);
        }}
      >
        <InputField
          Icon={FiSearch}
          iconStylingClasses="text-app-primary mr-1 h-5 w-5"
          placeholder="Type to search"
          type="text"
          name="Search"
          onChange={(event) => {
            typeSearch
              ? setQuery(event.target.value)
              : (queryValue = event.target.value);
          }}
          className="w-full"
        ></InputField>
        <span className="flex justify-between pt-4">
          <div className="flex-1">
            <ToggleSwitch
              title="Search as you type"
              toggleHandler={{ isOn: typeSearch, setSwitch: setTypeSearch }}
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
                onClick={() => setIsTile((value) => !value)}
              ></Button>
            </span>
          </div>
        </span>
      </form>
      <div className="flex flex-wrap justify-center pt-10 mx-10">
        {isLoading ? (
          <div className="absolute w-8 h-8 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-auth-primary left-1/2 top-1/2 animate-pulse"></div>
        ) : (
          <></>
        )}
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
      </div>
    </div>
  );
};

export default React.memo(GroupsPage);
import { useState } from "react";
import DataContext from "./DataContext";
import {
  validateFollowersJson,
  validateFollowingJson,
} from "../utils/jsonValidators";
import { extractUsernames, getNotFollowingBack } from "./helpers";

export default function DataProvider({ children }) {
  const [data, setData] = useState({ followers: "", following: "" });
  const [dataIsValid, setDataIsValid] = useState({
    followers: null,
    following: null,
  });
  const [stats, setStats] = useState({
    followers: [],
    following: [],
    notFollowingBack: [],
  });

  const updateDataAndValidation = (type, content) => {
    setData((prev) => ({ ...prev, [type]: content }));

    if (content === "") {
      setDataIsValid((prev) => ({ ...prev, [type]: null }));
      setStats((prev) => ({ ...prev, notFollowingBack: [], [type]: [] }));
      return;
    }

    const isValid =
      type === "followers"
        ? validateFollowersJson(content)
        : validateFollowingJson(content);

    setDataIsValid((prev) => ({ ...prev, [type]: isValid }));

    if (isValid) {
      const parsedData = JSON.parse(content);
      const usernames = extractUsernames(type, parsedData);

      setStats((prev) => {
        const updatedStats = { ...prev, [type]: usernames };

        const followersList = type === "followers" ? usernames : prev.followers;
        const followingList = type === "following" ? usernames : prev.following;

        updatedStats.notFollowingBack = getNotFollowingBack(
          followingList,
          followersList,
        );

        return updatedStats;
      });
    }
  };

  return (
    <DataContext.Provider
      value={{
        data,
        dataIsValid,
        updateDataAndValidation,
        stats,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

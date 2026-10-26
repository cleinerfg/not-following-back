import { useState } from "react";
import DataContext from "./DataContext";
import {
  validateFollowersJson,
  validateFollowingJson,
} from "../utils/jsonValidators";

export default function DataProvider({ children }) {
  const [data, setData] = useState({ followers: "", following: "" });
  const [dataIsValid, setDataIsValid] = useState({
    followers: null,
    following: null,
  });

  const updateDataAndValidation = (type, content) => {
    let isValidContent = null;

    if (content !== "") {
      isValidContent =
        type === "followers"
          ? validateFollowersJson(content)
          : validateFollowingJson(content);
    }

    setData((prev) => ({ ...prev, [type]: content }));
    setDataIsValid((prev) => ({ ...prev, [type]: isValidContent }));
  };

  return (
    <DataContext.Provider
      value={{
        data,
        dataIsValid,
        updateDataAndValidation,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

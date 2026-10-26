export function validateFollowingJson(jsonString) {
  try {
    const data = JSON.parse(jsonString);
    console.log(data);
    if (!data || typeof data !== "object" || Array.isArray(data)) return false;
    if (!Array.isArray(data.relationships_following)) return false;
    return data.relationships_following.every(
      (item) =>
        item !== null &&
        typeof item === "object" &&
        typeof item.title === "string",
    );
  } catch {
    return false;
  }
}

export function validateFollowersJson(jsonString) {
  try {
    const data = JSON.parse(jsonString);
    if (!Array.isArray(data)) return false;
    return data.every((item) => {
      if (!item || typeof item !== "object") return false;
      if (!Array.isArray(item.string_list_data)) return false;
      return item.string_list_data.every(
        (subItem) =>
          subItem !== null &&
          typeof subItem === "object" &&
          typeof subItem.value === "string",
      );
    });
  } catch {
    return false;
  }
}

export function extractUsernames(type, parsedData) {
  if (type === "followers") {
    return parsedData.flatMap(
      (item) =>
        item.string_list_data?.map((stringItem) => stringItem.value) || [],
    );
  }
  if (type === "following") {
    return parsedData.relationships_following?.map((item) => item.title) || [];
  }
  return [];
}

export function getNotFollowingBack(following = [], followers = []) {
  const followersSet = new Set(followers);
  return following.filter((username) => !followersSet.has(username));
}

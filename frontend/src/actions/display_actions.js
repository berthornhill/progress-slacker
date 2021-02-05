export const DISPLAY_TAGS = "DISPLAY_TAGS";

export const displayTags = (payload) => {
  return {
    type: DISPLAY_TAGS,
    payload,
  };
};

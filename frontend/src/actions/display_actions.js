export const DISPLAY_TAGS = "DISPLAY_TAGS";
export const DISPLAY_AA_TEMPS = "DISPLAY_AA_TEMPS";
export const DISPLAY_ALL_TEMPS = "DISPLAY_ALL_TEMPS";

export const displayTags = (payload) => {
  return {
    type: DISPLAY_TAGS,
    payload,
  };
};

export const displayAATemps = (payload) => {
  return {
    type: DISPLAY_AA_TEMPS,
    payload,
  };
};

export const displayAllTemps = (payload) => {
  return {
    type: DISPLAY_ALL_TEMPS,
    payload,
  };
};

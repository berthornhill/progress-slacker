// Create Meme
// Read Meme - get meme from url id
// Delete meme

export const CREATE_MEME_TEMPLATE = "CREATE_MEME_TEMPLATE";
export const FETCH_MEME = "FETCH_MEME";
export const DELETE_MEME = "DELETE_MEME"; // do we need to delete?

export const createMemeTemplate = (memeTemplate) => {
  type: CREATE_MEME_TEMPLATE, memeTemplate;
};

export const fetchMeme = (meme) => {
  type: FETCH_MEME, meme;
};

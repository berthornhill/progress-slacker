import axios from "axios";

// no need to update, whats done is done

// grabs all memes from db (READ)
export const getMemes = () => {
  return axios.get("/api/memes");
};

// grabs single meme to view (READ)
export const getMeme = (memeId) => {
  return axios.get(`/api/memes/${memeId}`);
};

// post meme into db (CREATE)
export const createMeme = (meme) => {
  return axios.post(`/api/memes`, meme);
};

// delete meme (?) (DELETE)
export const deleteMemeFromDb = (memeId) => {
  return axios.delete(`/api/memes/${memeId}`);
};

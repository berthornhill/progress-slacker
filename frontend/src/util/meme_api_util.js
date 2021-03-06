import axios from "axios";

// no need to update, whats done is done

// grabs all memes from db (READ)
export const getMemes = () => {
  return axios.get("/api/memes");
};

// grabs single meme to view (READ)
export const getMeme = (memeId) => {
  return axios.get(`/api/memes/${memeId}`);
  // return axios.get(`/api/memes/banana`);
};

// post meme into db (CREATE)
export const createMeme = (meme) => {
  return axios.post(`/api/memes`, meme);
};

// delete meme (?) (DELETE)
export const deleteMemeFromDb = (memeId) => {
  return axios.delete(`/api/memes/${memeId}`);
};

export const postLike = (like) => {
  return axios.post("/api/likes", like);
};

export const removeLike = (likeId) => {
  return axios.delete("/api/likes", { params: likeId });
  // return axios.post("/api/likes/delete", likeId)
};

export const fetchLikes = (userId) => {
  return axios.get(`/api/likes/${userId}`);
  // return axios.get(`/api/likes`, userId);
};

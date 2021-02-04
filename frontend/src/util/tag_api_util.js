import axios from "axios";

// no need to update, whats done is done

// grabs all memes from db (READ)
export const getTags = () => {
  return axios.get("/api/tags");
};

// grabs single meme to view (READ)
export const getTag = (tagId) => {
  return axios.get(`/api/tags/${tagId}`);
};

// post meme into db (CREATE)
export const createTag = (tag) => {
  return axios.post(`/api/tags`, tag);
};

// delete tag (?) (DELETE)
export const deleteTagFromDb = (tagId) => {
  return axios.delete(`/api/tags/${tagId}`);
};

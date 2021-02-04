import axios from "axios";

// no need to update, whats done is done

// grabs all memes from db (READ)
export const getTemplates = () => {
  return axios.get("/api/templates");
};

// grabs single meme to view (READ)
export const getTemplate = (templateId) => {
  return axios.get(`/api/templates/${templateId}`);
};

// post meme into db (CREATE)
export const createMeme = (template) => {
  return axios.post(`/api/templates`, template);
};

// delete meme (?) (DELETE)
export const deleteMemeFromDb = (templateId) => {
  return axios.delete(`/api/templates/${templateId}`);
};

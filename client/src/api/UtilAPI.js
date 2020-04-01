import axios from "axios";

export default {
  getImagesFromAdobe: (word) => {
    console.log(`Frontend buscar adobe pic ${word}`);
    return axios.get(`/api/adobe/${word}`);
  },

  // Save the quote
  uploadPic: data => {
    return axios.post(`/api/image/upload/${data.id}`, data.imageUploaded);
  },

  // Save the quote
  getPictureById: id => {
    return axios.get(`/api/image/getImage/${id}`);
  }
};

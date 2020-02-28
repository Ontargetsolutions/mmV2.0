import axios from "axios";

export default {
  getImagesFromAdobe: word => {
    console.log(`Frontend buscar adobe pic ${word}`);
    return axios.get(`/api/adobe/${word}`);
  },

  // Save the quote
  uploadPic: image => {
    console.log(
      `lo que llega ala api del frotend pa salvar imagen ${JSON.stringify(
        image
      )}`
    );
    return axios.post(`/api/image/upload`, image);
  }
};

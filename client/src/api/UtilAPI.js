import axios from "axios";

export default {
  //get countries from Battuta
  getCountries: () => {
    // console.log(` Frontend Buscar country`);
    return axios.get("/api/utils/country");
  },

  //get states from Battuta
  getStates: country => {
    //   console.log(`Frontend buscar estados ${country}`)
    return axios.get(`/api/utils/states/${country}`);
  },

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
    return axios.post(`/api/image`, image);
  }
};

import axios from "axios";

export default {
  //Get images from adobe stock
  getImagesFromAdobe: word => {
    return axios.get(`/api/adobe/${word}`);
  },

  // Save the quote
  uploadPic: data => {
    console.log(`en la api frontend para guardar una upload pic`);
    return axios.post(`/api/image/upload/${data.id}`, data.imageUploaded);
  },

  // Save the quote
  getPictureById: id => {
    return axios.get(`/api/image/getImage/${id}`);
  },

  //Get estimated delivery fee from ups api
  getDeliveryFee: data => {
    return axios.post(`/api/utils/ups`, data);
  },

  //charge the credit card
  payment: data =>{
    return axios. post(`/api/utils/payment`, data)
  }
};

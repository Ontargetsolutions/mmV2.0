import axios from "axios";

export default {
  // Gets my quotes
  myQuotes: userID => {
    return axios.get(`/api/quote/client/${userID}`);
  },
  // Save the quote
  saveQuote: quote => {
    console.log(`jeloouuuuu en salvar couta en api frontend`);
    return axios.post(`/api/quote`, quote);
  },
  orderById: Id =>{
    return axios.get(`/api/quote/${Id}`);
  }

  
};

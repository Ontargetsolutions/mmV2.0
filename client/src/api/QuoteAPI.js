import axios from "axios";

export default {
  // Gets my quotes
  myQuotes: userID => {
    // console.log(`lo que llega ala api del frotend pa buscar lista de quotas ${userID}`)
    return axios.get(`/api/quote/client/${userID}`);
  },
  // Save the quote
  saveQuote: quote => {
    console.log(
      `lo que llega ala api del frotend pa buscar lista de quotas ${JSON.stringify(
        quote
      )}`
    );
    return axios.post(`/api/quote`, quote);
  },


  
};

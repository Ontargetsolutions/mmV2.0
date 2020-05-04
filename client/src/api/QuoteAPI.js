import axios from "axios";

export default {
  // Gets my quotes
  myQuotes: userID => {
    return axios.get(`/api/quote/client/${userID}`);
  },
  // Save the quote
  saveQuote: quote => {
    console.log(`lo que llega api frontend reorder ${JSON.stringify(quote)}`)
    return axios.post(`/api/quote`, quote);
  },
  orderById: Id =>{
    return axios.get(`/api/quote/${Id}`);
  },
  invoiceNumber: order =>{
    console.log(`en la api frontend para gerenar invoice orden ${JSON.stringify(order)}`);
    return axios.get(`/api/quote/invoiceNumber`, order);
  },
  getAllQuotesByProduct: product => {
    console.log(`en la api frontend para gerenar invoice orden ${JSON.stringify(product)}`);
    return axios.get(`/api/quote/getAllQuotes/${product}`);
  }
}

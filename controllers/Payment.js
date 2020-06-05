'use strict';

let ApiContracts = require ('authorizenet').APIContracts;
let ApiControllers = require ('authorizenet').APIControllers;
let SDKConstants = require ('authorizenet').Constants;
const request = require ('request-promise');


module.exports = {
  chargeCreditCard: (req, res) => {
    console.log (
      `en el backend lo que llega pa buscar delivery fee ${JSON.stringify (req.body)}`
    );

    const createTransactionRequest = {
      merchantAuthentication: {
        name: '797UHHte9',
        transactionKey: '9m4buNeGD69n634h',
      },

      transactionRequest: {
        transactionType: 'authCaptureTransaction',
        amount: '5',
        payment: {
          creditCard: {
            cardNumber: '5424000000000015',
            expirationDate: '2020-12',
            cardCode: '999',
          },
        },
        billTo: {
          firstName: 'Ellen',
          lastName: 'Johnson',
          company: 'Souveniropolis',
          address: '14 Main Street',
          city: 'Pecan Springs',
          state: 'TX',
          zip: '44628',
          country: 'USA',
        },
        shipTo: {
          firstName: 'China',
          lastName: 'Bayles',
          company: 'Thyme for Tea',
          address: '12 Main Street',
          city: 'Pecan Springs',
          state: 'TX',
          zip: '44628',
          country: 'USA',
        },
        transactionSettings: {
          setting: {
            settingName: 'testRequest',
            settingValue: 'false',
          },
        },
      },
    };

    const options = {
      method: 'POST',
      uri: 'https://apitest.authorize.net/xml/v1/request.api',
      body: {
        createTransactionRequest: createTransactionRequest,
      },
      json: true, // Automatically stringifies the body to JSON
    };

    request (options)
      .then (data => res.send (data))
      .catch (err => res.status (422).json (err));
  },
};

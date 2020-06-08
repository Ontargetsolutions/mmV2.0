'use strict';

let ApiContracts = require ('authorizenet').APIContracts;
let ApiControllers = require ('authorizenet').APIControllers;
let SDKConstants = require ('authorizenet').Constants;
const request = require ('request-promise');


module.exports = {
  chargeCreditCard: (req, res) => {
    console.log (
      `en el backend lo que llega pa cobrar ${JSON.stringify (req.body)}`
    );


    console.log (
      `en el backend lo que llega pa cobrar ${JSON.stringify (req.body.cartPricing.totalPrice)}`
    );


    const createTransactionRequest = {
      merchantAuthentication: {
        name: '797UHHte9',
        transactionKey: '9m4buNeGD69n634h',
      },

      transactionRequest: {
        transactionType: 'authCaptureTransaction',
        amount: req.body.cartPricing.totalPrice,
        payment: {
          creditCard: {
            cardNumber: req.body.cardInfo.number,
            expirationDate: req.body.cardInfo.expiry,
            cardCode: req.body.cardInfo.cvc,
          },
        },
        billTo: {
          firstName: req.body.billingInfo.firstName,
          lastName: req.body.billingInfo.lastName,
          company: '',
          address: req.body.billingInfo.addressLine1 + req.body.billingInfo.addressLine2,
          city: 'Pecan Springs',
          state: req.body.billingInfo.state,
          zip: req.body.billingInfo.zipCode,
          country: req.body.billingInfo.country,
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
      .then (data => 
        // res.send (data)
        console.log(data)
        )
      .catch (err => res.status (422).json (err));
  },
};

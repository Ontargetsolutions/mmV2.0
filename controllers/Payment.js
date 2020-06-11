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
          address: req.body.billingInfo.addressLine1 +
            req.body.billingInfo.addressLine2,
          city: req.body.billingInfo.city,
          state: req.body.billingInfo.state,
          zip: req.body.billingInfo.zipCode,
          country: req.body.billingInfo.country,
        },
        shipTo: {
          firstName: req.body.shipTo.firstName,
          lastName: req.body.shipTo.lastName,
          company: '',
          address: req.body.shipTo.addressLine1 + req.body.shipTo.addressLine2,
          city: req.body.shipTo.city,
          state: req.body.shipTo.state,
          zip: req.body.shipTo.zipCode,
          country: req.body.shipTo.country,
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
        res.send (data)
        // console.log (data)
      )
      .catch (err => res.status (422).json (err));
  },
};

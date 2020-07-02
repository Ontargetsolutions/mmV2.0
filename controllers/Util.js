const db = require ('../models');
const request = require ('request-promise');
const countryAPI = require ('countrystatesjs');
const nodemailer = require ('nodemailer');
const lookup = require('country-code-lookup')

// Defining methods for User Controllers
module.exports = {
  upsDeliveryFee: async (req, res) => {
    let totalDelivery = 0;
    let deliveryFee = 0;
    console.log (
      `en el backend lo que llega pa buscar delivery fee ${JSON.stringify (req.body)}`
    );


    if (req.body.Country) {
      let countryCode = lookup.byCountry(req.body.Country);
      console.log(`---------------------`+ countryCode);
    }

    let country = req.body.user.Country ? req.body.user.Country : req.body.Country;
    let stateS = req.body.user.State ? req.body.user.State: req.body.State;

    const stateCode = countryAPI.state (
      // country,
      // stateS
      req.body.user.Country,
      req.body.user.State
    );
    console.log(`lo que devuelve el codigo del estado`, stateCode);

    let estDelFee = 0;
    let upsRes;

    try {
      for (let i = 0; i < req.body.cart.length; i++) {
        const RateRequest = {
          Request: {
            SubVersion: '1703',
            TransactionReference: {
              CustomerContext: ' ',
            },
          },
          Shipment: {
            ShipmentRatingOptions: {
              UserLevelDiscountIndicator: 'TRUE',
            },
            Shipper: {
              Name: 'Darryl Forgenie',
              ShipperNumber: 'E38Y78',
              Address: {
                AddressLine: '14825 St.Marys Ln Ste 250',
                City: 'Houston',
                StateProvinceCode: 'TX',
                PostalCode: '77079',
                CountryCode: 'US',
              },
            },
            ShipTo: {
              Name: req.body.user.Name,
              Address: {
                AddressLine: req.body.user.Address1 + req.body.user.Address2,
                City: req.body.user.City,
                StateProvinceCode: stateCode.abbreviation,
                PostalCode: req.body.user.Zip,
                CountryCode: req.body.user.Country,
              },
            },
            ShipFrom: {
              Name: 'Darryl Forgenie',
              Address: {
                AddressLine: '14825 St.Marys Ln Ste 250',
                City: 'Houston',
                StateProvinceCode: 'TX',
                PostalCode: '77079',
                CountryCode: 'US',
              },
            },
            Service: {
              Code: '03',
              Description: 'Standard',
            },
            ShipmentTotalWeight: {
              UnitOfMeasurement: {
                Code: 'LBS',
                Description: 'Pounds',
              },
              Weight: req.body.cart[i].weigth,
            },
            Package: {
              PackagingType: {
                Code: '02',
                Description: 'Package',
              },
              Dimensions: {
                UnitOfMeasurement: {
                  Code: 'IN',
                },
                Length: req.body.cart[i].length,
                Width: req.body.cart[i].width,
                Height: req.body.cart[i].height,
              },
              PackageWeight: {
                UnitOfMeasurement: {
                  Code: 'LBS',
                },
                Weight: req.body.cart[i].weigth,
              },
            },
          },
        };

        const options = {
          method: 'POST',
          headers: {
            AccessLicenseNumber: process.env.UPS_LICENSE_NUMBER,
            Password: process.env.UPS_PASSWORD,
            'Content-Type': 'application/json',
            transld: 'Tran123',
            transactionSrc: 'XOLT',
            UserName: process.env.UPS_USERNAME,
          },
          uri: 'https://wwwcie.ups.com/ship/v1/rating/Rate',
          body: {
            RateRequest: RateRequest,
          },
          json: true, // Automatically stringifies the body to JSON
        };

        estDelFee = await request (options)
          .then (data => {
            deliveryFee = parseFloat (
              data.RateResponse.RatedShipment.RatedPackage.TotalCharges
                .MonetaryValue
            );
            totalDelivery += deliveryFee;
            console.log(`%%%%%%%%%%%%%`, totalDelivery )
            return totalDelivery;
          })
          .catch (err => res.status (422).json (err));
      }
      // console.log(`%%%%%%%%%%%%%`, estDelFee )
      res.json (estDelFee);
    } catch (error) {
      console.log (`Error`, error);
    }
  },

  sendEmailWhenShopDone: (req, res) => {
    console.log (
      `esto es lo que llega para mandar el email al backend`,
      req.body
    );

    let orderOnline = {
      ItemInfo: req.body.itemsBought,
      //  {
      //   objectID: req.body.itemsBought.objectID,
      //   name: req.body.itemsBought.name,
      //   image: req.body.itemsBought.image,
      //   price: req.body.itemsBought.price,
      //   material: req.body.itemsBought.material,
      //   dimentions:req.body.itemsBought.dimentions,
      //   productQuantity: req.body.itemsBought.productQuantity,
      //   totalPrice: req.body.itemsBought.totalPrice,
      //   weigth: req.body.itemsBought.weigth,
      //   height: req.body.itemsBought.height,
      //   width: req.body.itemsBought.width,
      //   length: req.body.itemsBought.length
      // },
      UserInfo: {
        Name: req.body.userInfo.Name,
        Phone: req.body.userInfo.Phone,
        AccountType: req.body.userInfo.AccountType,
        Company: req.body.userInfo.Company,
        Email: req.body.userInfo.Email,
        Address1: req.body.userInfo.Address1,
        Address2: req.body.userInfo.Address2,
        City: req.body.userInfo.City,
        Country: req.body.userInfo.Country,
        State: req.body.userInfo.State,
        Zip: req.body.userInfo.Zip,
      },
      ShippingInfo: {
        firstName: req.body.shippingInfo.firstName,
        lastName: req.body.shippingInfo.lastName,
        emailId: req.body.shippingInfo.emailId,
        mobileNumber: req.body.shippingInfo.mobileNumber,
        addressLine1: req.body.shippingInfo.addressLine1,
        addressLine2: req.body.shippingInfo.addressLine2,
        country: req.body.shippingInfo.country,
        zipCode: req.body.shippingInfo.zipCode,
        state: req.body.shippingInfo.state,
        city: req.body.shippingInfo.city,
      },
      PaymentInfo: {
        deliveryFee: req.body.paymentInfo.deliveryFee,
        taxes: req.body.paymentInfo.taxes,
        totalPrice: req.body.paymentInfo.totalPrice,
      },
    };

    let transporter = nodemailer.createTransport ({
      host: 'smtp.ipower.com',
      port: 465,
      auth: {
        user: 'noreply@montagemosaics.com',
        pass: 'N0Reply1234*',
      },
    });

    let mailOptions = {
      from: 'noreply@montagemosaics.com',
      to: 'irina.machado@ontargetech.com',
      // to: 'designstudio@montagemosaics.com',
      subject: 'Order details',
      text: JSON.stringify (orderOnline),
    };

    transporter.sendMail (mailOptions, function (error, info) {
      if (error) {
        console.log (error);
      } else {
        console.log ('Email sent: ' + info.response);
        res.send (info.response);
      }
    });
  },
};

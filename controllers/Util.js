const db = require("../models");
const request = require("request-promise");
const countryAPI = require("countrystatesjs");

// Defining methods for User Controllers
module.exports = {
  upsDeliveryFee: (req, res) => {
    let totalDelivery = 0;
    console.log(
      `en el backend lo que llega pa buscar delivery fee ${JSON.stringify(
        req.body
      )}`
    );

    const stateCode = countryAPI.state(
      req.body.user.Country,
      req.body.user.State
    );
    // console.log(`lo que devuelve el codigo del estado`, stateCode);

    let estDelFee = 0;
    let upsRes;

    for (let i = 0; i < req.body.cart.length; i++) {
      const RateRequest = {
        Request: {
          SubVersion: "1703",
          TransactionReference: {
            CustomerContext: " "
          }
        },
        Shipment: {
          ShipmentRatingOptions: {
            UserLevelDiscountIndicator: "TRUE"
          },
          Shipper: {
            Name: "Darryl Forgenie",
            ShipperNumber: "E38Y78",
            Address: {
              AddressLine: "14825 St.Marys Ln Ste 250",
              City: "Houston",
              StateProvinceCode: "TX",
              PostalCode: "77079",
              CountryCode: "US"
            }
          },
          ShipTo: {
            Name: req.body.user.Name,
            Address: {
              AddressLine: req.body.user.Address1 + req.body.user.Address2,
              City: req.body.user.City,
              StateProvinceCode: stateCode.abbreviation,
              PostalCode: req.body.user.Zip,
              CountryCode: req.body.user.Country
            }
          },
          ShipFrom: {
            Name: "Darryl Forgenie",
            Address: {
              AddressLine: "14825 St.Marys Ln Ste 250",
              City: "Houston",
              StateProvinceCode: "TX",
              PostalCode: "77079",
              CountryCode: "US"
            }
          },
          Service: {
            Code: "03",
            Description: "Standard"
          },
          ShipmentTotalWeight: {
            UnitOfMeasurement: {
              Code: "LBS",
              Description: "Pounds"
            },
            Weight: req.body.cart[i].weigth
          },
          Package: {
            PackagingType: {
              Code: "02",
              Description: "Package"
            },
            Dimensions: {
              UnitOfMeasurement: {
                Code: "IN"
              },
              Length: req.body.cart[i].length,
              Width: req.body.cart[i].width,
              Height: req.body.cart[i].height
            },
            PackageWeight: {
              UnitOfMeasurement: {
                Code: "LBS"
              },
              Weight: req.body.cart[i].weigth
            }
          }
        }
      };

      const options = {
        method: "POST",
        headers: {
          AccessLicenseNumber: process.env.UPS_LICENSE_NUMBER,
          Password: process.env.UPS_PASSWORD,
          "Content-Type": "application/json",
          transld: "Tran123",
          transactionSrc: "XOLT",
          UserName: process.env.UPS_USERNAME
        },
        uri: "https://wwwcie.ups.com/ship/v1/rating/Rate",
        body: {
          RateRequest: RateRequest
        },
        json: true // Automatically stringifies the body to JSON
      };

      estDelFee =  request(options)
        .then(data => {
          console.log(
            `=============>>>>>>>>>>>>>>>>>>>>>`,
            JSON.stringify(data.RateResponse.RatedShipment.RatedPackage.TotalCharges.MonetaryValue)
          );
          return 3366;
        })
        .catch(err => res.status(422).json(err));

      
    }
    console.log(
      `%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%`,
      JSON.stringify(estDelFee)
    );
    res.send(estDelFee);
  },

  alertEmails: (req, res) => {
    console.log(`envie el email`);
  }
};

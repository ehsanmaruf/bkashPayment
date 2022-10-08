const axios = require("axios");
const createAgreement = require("../agreement/createAgreement");
// const grantToken = require("../token/grantToken");

const dotenv = require("dotenv");
const { response } = require("express");
dotenv.config();

const executeAgreement = async (req, res) => {
  const { token, paymentID, bkashURL } = await createAgreement();
  console.log(bkashURL);
  await res.redirect(bkashURL);

  // const response = await axios.post(
  //   "https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/execute",
  //   // '\n{\n     "paymentID": "TR0000701665035085738"\n}\n',
  //   {
  //     paymentID: paymentID,
  //   },
  //   {
  //     headers: {
  //       Authorization: token,
  //       "X-APP-Key": process.env.APP_KEY,
  //       accept: "application/json",
  //       "content-type": "application/json",
  //     },
  //   }
  // );
  setTimeout(async () => {
    const response = await axios.post(
      "https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/execute",
      // '\n{\n     "paymentID": "TR0000701665035085738"\n}\n',
      {
        paymentID: paymentID,
      },
      {
        headers: {
          Authorization: token,
          "X-APP-Key": process.env.APP_KEY,
          accept: "application/json",
          "content-type": "application/json",
        },
      }
    );
    console.log(response.data);
    // const agreementID = response.data.agreementID;
    // return agreementID;
    const credentials = { getToken: token, ID: response.data.agreementID };
    return credentials;
  }, 30000);
  // res.send(response.data);
};

module.exports = executeAgreement;

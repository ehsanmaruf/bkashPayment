const axios = require("axios");
// const refreshToken = require("../token/refreshToken");
const grantToken = require("../token/grantToken");
const dotenv = require("dotenv");
dotenv.config();

// const getToken = async () => {
//   return await grantToken();
// };

const createAgreement = async (req, res) => {
  const getToken = await grantToken();
  const response = await axios.post(
    "https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/create",
    // '\n{\n     "mode": "0000",\n     "callbackURL": "http://localhost:3030/",\n     "payerReference": "01611156651"\n}\n',
    {
      mode: "0000",
      callbackURL: "http://localhost:3030/",
      payerReference: "01611156651",
    },
    {
      headers: {
        Authorization: getToken,
        "X-APP-Key": process.env.APP_KEY,
        accept: "application/json",
        "content-type": "application/json",
      },
    }
  );

  const credentials = {
    token: getToken,
    paymentID: response.data.paymentID,
    bkashURL: response.data.bkashURL,
  };
  console.log(response.data);
  return credentials;
};

module.exports = createAgreement;

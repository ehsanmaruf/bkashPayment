const axios = require("axios");
const createPayment = require("../payment/createPayment");
const dotenv = require("dotenv");
dotenv.config();

const executePayment = async (req, res) => {
  const paymentID = await createPayment();

  const response = await axios.post(
    `https://checkout.sandbox.bka.sh/v1.2.0-beta/checkout/payment/execute/${payment.paymentID}`,
    {
      // headers: {
      //   authorization: getToken,
      //   "x-app-key": process.env.APP_KEY,
      //   accept: "application/json",
      //   "Content-Type": "application/json",
      // },
      paymentID: paymentID,
    }
  );
  console.log(response.data);
};

module.exports = executePayment;

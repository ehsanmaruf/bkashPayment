const axios = require("axios");
const { v4: uuidv4 } = require("uuid");
const dotenv = require("dotenv");
const executeAgreement = require("../agreement/executeAgreement");

dotenv.config();

const createPayment = async (req, res) => {
  const { getToken, ID } = await executeAgreement();
  const response = await axios.post(
    "https://checkout.sandbox.bka.sh/v1.2.0-beta/checkout/payment/create",
    {
      mode: "0001",
      agreementID: ID,
      callbackURL: "http://localhost:3030/",
      payerReference: "01611156651",
      amount: "20",
      currency: "BDT",
      intent: "sale",
      merchantInvoiceNumber: uuidv4(),
    },
    {
      headers: {
        authorization: getToken,
        "x-app-key": process.env.APP_KEY,
        accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  console.log(response.data);
};

module.exports = createPayment;

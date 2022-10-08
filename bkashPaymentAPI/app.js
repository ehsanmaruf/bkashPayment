const express = require("express");
const executeAgreement = require("./agreement/executeAgreement");
const createPayment = require("./payment/createPayment");
const executePayment = require("./payment/executePayment");

const app = express();
const router = express.Router();
app.use(router);

app.use(express.json());

router.get("/execute", executeAgreement);
router.get("/payment", createPayment);
// router.get("/payment", executePayment);

app.listen(3030, () => {
  console.log("Listening on port 3030..");
});

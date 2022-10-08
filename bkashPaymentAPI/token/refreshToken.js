const axios = require("axios");
const grantToken = require("./grantToken");
const dotenv = require("dotenv");
dotenv.config();

const refreshToken = async (req, res) => {
  const response = await axios.post(
    "https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/token/refresh",
    // '\n{\n     "app_key": "4f6o0cjiki2rfm34kfdadl1eqq",\n     "app_secret": "2is7hdktrekvrbljjh44ll3d9l1dtjo4pasmjvs5vl5qr3fug4b",\n     "refresh_token": "1"\n}\n',
    {
      app_key: process.env.APP_KEY,
      app_secret: process.env.APP_SECRET,
      refresh_token: grantToken(),
    },
    {
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        password: process.env.PASSWORD,
        username: process.env.USER_NAME,
      },
    }
  );
  // console.log(response.data.id_token);
  return response.data.id_token;
};

module.exports = refreshToken;

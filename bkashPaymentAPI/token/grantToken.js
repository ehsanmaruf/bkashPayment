const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const grantToken = async (req, res) => {
  try {
    const response = await axios.post(
      "https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/token/grant",
      // '\n{\n     "app_key": "das",\n     "app_secret": "sfsg"\n}\n',
      {
        app_key: process.env.APP_KEY,
        app_secret: process.env.APP_SECRET,
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
    console.log(response.data.id_token);
    return response.data.id_token;
  } catch (err) {
    console.log(err);
  }
};

module.exports = grantToken;

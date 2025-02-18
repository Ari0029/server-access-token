const { GoogleAuth } = require("google-auth-library");
const path = require("path");

async function getAccessToken(req, res) {
  const keyPath = path.join(
    __dirname,
    "../json/project-app-65c58-3304fb741cef.json"
  );

  const auth = new GoogleAuth({
    keyFile: keyPath,
    scopes: "https://www.googleapis.com/auth/firebase.messaging",
  });

  try {
    const client = await auth.getClient();
    const accessToken = await client.getAccessToken();
    console.log("Access Token:", accessToken.token);
    res.json(accessToken.token);
  } catch (error) {
    console.error("Error getting access token:", error);
  }
}
module.exports = { getAccessToken };

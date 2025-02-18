const { GoogleAuth } = require("google-auth-library");
const path = require("path");

async function getAccessToken(req, res) {
  try {
    // Lấy thông tin cấu hình từ biến môi trường
    const projectConfig = JSON.parse(process.env.PROJECT_CONFIG);

    // Tạo đối tượng GoogleAuth với thông tin cấu hình lấy từ biến môi trường
    const auth = new GoogleAuth({
      credentials: projectConfig,  // Sử dụng cấu hình từ biến môi trường
      scopes: "https://www.googleapis.com/auth/firebase.messaging",
    });

    const client = await auth.getClient();
    const accessToken = await client.getAccessToken();
    console.log("Access Token:", accessToken.token);
    res.json(accessToken.token);
  } catch (error) {
    console.error("Error getting access token:", error);
    res.json({status: 500, message: `Null roif ${error}`});
  }
}
module.exports = { getAccessToken };

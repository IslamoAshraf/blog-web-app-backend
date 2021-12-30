const { google } = require("googleapis");
const oauth2Client = new google.auth.OAuth2(
  "28073920180-3nlk6br9ggfh368g3k3j8gltf83btaar.apps.googleusercontent.com",
  "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",
  "http://localhost:3000/google-auth"
);
const scopes = [
  "https://www.googleapis.com/auth/userinfo.email",
  "https://www.googleapis.com/auth/userinfo.profile",
];

const url = oauth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token)
  access_type: "offline",

  // If you only need one scope you can pass it as a string
  scope: scopes,
});

console.log(url);
decodeURIComponent("")
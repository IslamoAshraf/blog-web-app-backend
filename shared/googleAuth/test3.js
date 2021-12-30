const { google } = require("googleapis");
const oauth2Client = new google.auth.OAuth2(
  "28073920180-3nlk6br9ggfh368g3k3j8gltf83btaar.apps.googleusercontent.com",
  "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",
  "http://localhost:3000/google-auth"
);
const req =
  "http://localhost:3000/google-auth?code=4%2F0AX4XfWhhlF8rAAXE7v1Mdq64b1YbFkawUDbg4km5VaharOLznx3cw8N2rA6nKSm1p7qX9g&scope=email+profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+openid&authuser=0&prompt=consent#";
const qs = new URL(req, "http://localhost:3000").searchParams;
// console.log(qs.get("code"));

const code = decodeURIComponent(
  "4%2F0AX4XfWhZ72kcjU9_NM_kbayz0tBwh_l3bUv3MrFYXQqT3tEi2ThTRRGAvIZ3B7NN6iVVkg"
);

async function d() {
  try {
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);
    console.log(tokens);
  } catch (error) {
    console.log(error);
  }
}
d();

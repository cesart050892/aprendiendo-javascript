const { readdirSync, lstatSync } = require("fs");
const { join } = require("path");

module.exports = {
  data: [],
  scan: function (dir) {
    let contents = readdirSync(dir);
    for (const content of contents) {
      let path = join(dir, content);
      let file = lstatSync(path);
      if (file) {
        this.data.push({
          path: path,
          isDirectory: file.isDirectory(),
          length: file.size,
        });
      }
      if (file.isDirectory()) {
        this.scan(path);
      }
    }
  },
};

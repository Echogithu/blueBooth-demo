const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

const name = "aila-wechat";

module.exports = {
  lintOnSave: process.env.NODE_ENV === "development",
  //路径别名
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        "@": resolve(""),
        "@api": resolve("/api"),
        "@components": resolve("/components"),
        "@pages": resolve("/pages"),
        "@static": resolve("/static"),
        "@utils": resolve("/utils"),
        "@utils": resolve("/utils")
      }
    },
	
  }
};

/**
 * 该文件负责连接数据库
 */

const mongoose = require("mongoose");

const {DB_USER_NAME, DB_PASSWORD, DB_HOST, DB_NAME} = process.env;

// 定义链接数据库字符串
const dbURI = `mongodb://${DB_USER_NAME}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

// 连接
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log(`连接失败还是成功？`);
});

// 监听
mongoose.connection.on("connected", function () {
  console.log(`${DB_NAME}数据库已经连接...`);
});

// 这个文件专门用来存放关于列表的所有接口

const Router = require("koa-router");
const list = new Router();

// 写对应的接口
list.get("/", async (ctx) => {
  ctx.body = "列表-首页";
});

list.get("/yinger", async (ctx) => {
  ctx.body = "列表—婴儿";
});

list.get("/wanju", async (ctx) => {
  ctx.body = "列表—玩具";
});

module.exports = list;

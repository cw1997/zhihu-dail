const Koa = require('koa');
const cors = require('koa-cors');
const rp = require('request-promise');
const app = new Koa();
const basrUrl = "http://news-at.zhihu.com";

app.use(cors());
const main = async (ctx, next) => {
    const pathname = ctx.request.path;
    ctx.response.type = 'json';
    ctx.response.body = JSON.parse(await rp(basrUrl + pathname));
    ctx.set('Access-Control-Allow-Origin','*');
};
app.use(main);

app.listen(9999);
console.log('app started at port 9999...');

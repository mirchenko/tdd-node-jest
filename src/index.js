const Koa = require('koa');
const bodyParser = require('koa-body');
const postRouter = require('./routes/posts');

const PORT = process.env.PORT || 8080;

module.exports = new Koa()
  .use(bodyParser())
  .use(postRouter.routes())
  .listen(PORT, () => console.log(`Simple service listening in port: ${PORT}`));
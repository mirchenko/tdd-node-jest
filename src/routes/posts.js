const Router = require('koa-router');
const { List, View, Create, Patch, Delete } = require('../controllers/post');


module.exports = new Router()
  .get('/posts', List)
  .get('/posts/:id', View)
  .post('/posts', Create)
  .patch('/posts/:id', Patch)
  .delete('/posts/:id', Delete);
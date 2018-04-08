const Posts = require('../../models/Posts');

module.exports = async ctx => {
  try {
    const { title, content } = ctx.request.body;

    const post = await Posts.query().insert({title, content});

    ctx.status = 200;
    ctx.body = { data: post };


  } catch(e) {
    const message = 'Internal server error';
    ctx.status = e.statusCode || 500;
    ctx.body = {
      error: e.data || { message }
    };
  }
};
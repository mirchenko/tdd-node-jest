const Posts = require('../../models/Posts');

module.exports = async ctx => {
  try {
    const posts = await Posts.query().select();

    ctx.status = 200;
    ctx.body = {
      data: posts
    };

  } catch (e) {
    const message = 'Internal server error';
    ctx.status = e.statusCode || 500;
    ctx.body = {
      error: e.data || { message }
    };
  }
};
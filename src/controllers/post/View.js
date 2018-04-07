const Posts = require('../../Models/Posts');

module.exports = async ctx => {
  try {
    const { id } = ctx.params;

    const post = await Posts.query().select().where({id});
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
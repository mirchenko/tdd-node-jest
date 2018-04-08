const Posts = require('../../models/Posts');

module.exports = async ctx => {
  try {
    const { id } = ctx.params;
    const { status } = ctx.request.body;

    const affectedRows = await Posts.query().patch({ status }).where({ id });

    if(!affectedRows) {
      ctx.throw(409, { data: { message: 'Conflict patch posts.' } })
    }

    ctx.status = 200;
    ctx.body = {
      data: { status }
    };


  } catch(e) {
    const message = 'Internal server error';
    ctx.status = e.statusCode || 500;
    ctx.body = {
      error: e.data || { message }
    };
  }
};
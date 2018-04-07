const Model = require('./Model');

class Posts extends Model {
  static get tableName() {
    return 'posts';
  };

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['title', 'content'],
      properties: {
        id: { type: 'uuid' },
        title: { type: 'string', minLength: 1, maxLength: 255 },
        text: { type: 'string', minLength: 1, maxLength: 255 }
      }
    };
  }
}

module.exports = Posts;
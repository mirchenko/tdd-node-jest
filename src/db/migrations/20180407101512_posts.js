
exports.up = (knex, Promise) => knex.schema.createTable('posts', t => {
  t.uuid('id').primary();
  t.string('title', 256).unique();
  t.text('content');
  t.boolean('status').notNullable().defaultTo(false);
  t.timestamp('created_at', true).notNullable().defaultTo(knex.fn.now());
  t.timestamp('updated_at', true).notNullable().defaultTo(knex.fn.now());
});

exports.down = (knex, Promise) => knex.schema.dropTable('posts');


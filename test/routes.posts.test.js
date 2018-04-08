process.env.NODE_ENV = 'test';
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../src');
const knex = require('../src/db/config');

describe('Routes: posts', () => {
  beforeEach(() => {
    return knex.migrate.rollback()
      .then(() => knex.migrate.latest())
      .then(() => knex.seed.run())
  });

  afterEach(() => {
    return knex.migrate.rollback();
  });

  describe('GET /posts', () => {
    test('Should return array of posts', async () => {
      const res = await chai.request(server).get('/posts');
      expect(res.status).toEqual(200);
      expect(res.body.data).toBeDefined();
    });
  });


  describe('GET /posts/:id', () => {
    test('Should return single post', async () => {
      const posts = await chai.request(server).get('/posts');
      const [ first ] = posts.body.data;
      const res = await chai.request(server).get(`/posts/${first.id}`);
      expect(res.status).toEqual(200);
      expect(res.body.data.title).toBeDefined();
    });
  });

  describe('POST /posts', () => {
    test('Should return single post after insert', async () => {
      const res = await chai.request(server)
        .post('/posts')
        .send({ title: 'Test title', content: 'Test text' });

      expect(res.status).toEqual(200);
      expect(res.body.data).toBeDefined();
    });

    test('Should return error status, message, when body invalid', async () => {
      const res = await chai.request(server)
        .post('/posts')
        .send({ title: '' });

      expect(res.status).toEqual(400);
      expect(res.body.error).toBeDefined();
    });
  });

  describe('PATCH /posts', () => {
    test('Should return patched entity', async () => {
      const posts = await chai.request(server).get('/posts');
      const [ first ] = posts.body.data;
      const res = await chai.request(server)
        .patch(`/posts/${first.id}`)
        .send({ status: true });

      expect(res.status).toEqual(200);
      expect(res.body.data.status).toEqual(true);
    });
  });


  describe('DELETE /posts', () => {
    test('Should return patched entity', async () => {
      const posts = await chai.request(server).get('/posts');
      const [ first ] = posts.body.data;

      const res = await chai.request(server)
        .delete(`/posts/${first.id}`);

      expect(res.status).toEqual(200);
    });
  });


});

const request = require('supertest');
const app = require('../server');

describe('Health Endpoint', () => {
  it('should return 200 OK for health check', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: 'UP' });
  });

  it('should respond with a json object', async () => {
    const response = await request(app).get('/health');
    expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
  });
});

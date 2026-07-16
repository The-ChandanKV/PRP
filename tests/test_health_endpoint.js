// Import necessary libraries
const request = require('supertest');
const app = require('../src/server');

describe('Health Endpoint', () => {
  it('GET /api/v1/health should return success response', async () => {
    const response = await request(app).get('/api/v1/health');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ success: true, data: { status: 'healthy', uptimeSeconds: expect.any(Number) }});
  });

  // Targeted regression test for uptime being a number
  it('GET /api/v1/health should return uptime as a number', async () => {
    const response = await request(app).get('/api/v1/health');
    expect(response.body.data.uptimeSeconds).toEqual(expect.any(Number));
  });

  // Regression test to ensure endpoint always returns success key
  it('GET /api/v1/health should always return the success key', async () => {
    const response = await request(app).get('/api/v1/health');
    expect(response.body).toHaveProperty('success');
  });
});

const express = require('express');
const { healthCheck } = require('../controllers/healthController');

const router = express.Router();

// Define health check route
router.get('/api/v1/health', healthCheck);

// Define additional health check route for service health
router.get('/api/v1/health/status', (req, res) => {
    res.json({ success: true, status: 'service is up and running' });
});

module.exports = router;
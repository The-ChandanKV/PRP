const express = require('express');
const { healthCheck } = require('../controllers/healthController');

const router = express.Router();

// Define health check route
router.get('/api/v1/health', healthCheck);

module.exports = router;

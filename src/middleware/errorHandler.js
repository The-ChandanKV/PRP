const createError = require('http-errors');

// Error handling middleware
function errorHandler(err, req, res, next) {
    // Set the status code based on the error
    const status = err.status || 500;
    res.status(status);
    res.json({
        success: false,
        error: {
            message: err.message,
            status: status,
        },
    });
}

module.exports = errorHandler;

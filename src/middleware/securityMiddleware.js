// Middleware for security-related tasks

const securityMiddleware = (req, res, next) => {
    // Security headers
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('Strict-Transport-Security', 'max-age=63072000; includeSubDomains');

    // Call next middleware or route handler
    next();
};

module.exports = securityMiddleware;

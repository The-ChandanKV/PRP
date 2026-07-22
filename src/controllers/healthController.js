// Health check controller

exports.healthCheck = (req, res) => {
    const uptimeSeconds = Math.floor(process.uptime());
    // Implement additional business logic for SCRUM-16
    const message = "Health check successful";
    res.json({ success: true, message, data: { status: 'healthy', uptimeSeconds } });
};
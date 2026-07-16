// Health check controller

exports.healthCheck = (req, res) => {
    const uptimeSeconds = Math.floor(process.uptime());
    res.json({ success: true, data: { status: 'healthy', uptimeSeconds } });
};
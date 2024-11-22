const setRateLimit = require("express-rate-limit");

const rateLimitMiddleware = setRateLimit({
    windows: 60*1000,
    max: 5,
    message: "You have exceeded your 5 requests per minute limit",
    headers: true,
});

const rateLimitMiddlewareAdmin = setRateLimit({
    windows: 60*1000,
    max: 10,
    message: "You have exceeded your 10 requests per minute limit",
    headers: true,
});

const rateLimit = {
    rateLimitMiddleware,
    rateLimitMiddlewareAdmin
}

module.exports = rateLimit;
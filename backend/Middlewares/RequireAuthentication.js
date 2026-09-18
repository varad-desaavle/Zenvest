const jwt = require("jsonwebtoken");
const User = require("../model/UserModel");
const { TOKEN_COOKIE } = require("../services/AuthService");

const requireAuthentication = async (req, res, next) => {
    const token = req.cookies[TOKEN_COOKIE];

    if (!token) {
        return res.status(401).json({ success: false, message: "Please sign in to continue" });
    }

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(payload.sub);

        if (!user) {
            return res.status(401).json({ success: false, message: "This account no longer exists" });
        }

        req.authenticatedUser = user;
        return next();
    } catch (error) {
        return res.status(401).json({ success: false, message: "Your session has expired. Please sign in again" });
    }
};

module.exports = { requireAuthentication };
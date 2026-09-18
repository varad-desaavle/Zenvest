const router = require("express").Router();
const User = require("../model/UserModel");
const {
    TOKEN_COOKIE,
    getCookieOptions,
    publicUser,
    createSession,
    hashPassword,
    verifyPassword,
} = require("../services/AuthService");
const { requireAuthentication } = require("../Middlewares/RequireAuthentication");

router.post("/signup", async (req, res) => {
    const email = req.body.email?.trim().toLowerCase();
    const username = req.body.username?.trim();
    const password = req.body.password;

    if (!email || !username || !password) {
        return res.status(400).json({ success: false, message: "Username, email, and password are required" });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ success: false, message: "Enter a valid email address" });
    }
    if (password.length < 8) {
        return res.status(400).json({ success: false, message: "Password must be at least 8 characters" });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ success: false, message: "An account with this email already exists" });
        }

        const user = await User.create({ email, username, password: await hashPassword(password) });
        return res.status(201).json({ success: true, message: "Account created. Please sign in.", user: publicUser(user) });
    } catch (error) {
        console.error("Signup error:", error);
        return res.status(500).json({ success: false, message: "Unable to create your account" });
    }
});

router.post("/signin", async (req, res) => {
    const email = req.body.email?.trim().toLowerCase();
    const password = req.body.password;

    if (!email || !password) {
        return res.status(400).json({ success: false, message: "Email and password are required" });
    }

    try {
        const user = await User.findOne({ email }).select("+password");
        const validPassword = user && await verifyPassword(password, user.password);

        if (!validPassword) {
            return res.status(401).json({ success: false, message: "Incorrect email or password" });
        }

        res.cookie(TOKEN_COOKIE, createSession(user._id), getCookieOptions());
        return res.status(200).json({ success: true, message: "Signed in successfully", user: publicUser(user) });
    } catch (error) {
        console.error("Signin error:", error);
        return res.status(500).json({ success: false, message: "Unable to sign in right now" });
    }
});

router.get("/session", requireAuthentication, (req, res) => {
    res.status(200).json({ success: true, user: publicUser(req.authenticatedUser) });
});

router.post("/signout", (req, res) => {
    res.clearCookie(TOKEN_COOKIE, getCookieOptions());
    res.status(200).json({ success: true, message: "Signed out successfully" });
});

module.exports = router;
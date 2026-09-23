const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const TOKEN_COOKIE = "zerodha_session";
const TOKEN_LIFETIME = 3 * 24 * 60 * 60 * 1000;

const getCookieOptions = () => ({
    httpOnly: true,
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: TOKEN_LIFETIME,
});

const publicUser = (user) => ({
    id: user._id,
    username: user.username,
    email: user.email,
    createdAt: user.createdAt,
});

const createSession = (userId) => jwt.sign(
    { sub: userId.toString() },
    process.env.JWT_SECRET,
    { expiresIn: "3d" }
);

const hashPassword = (password) => bcrypt.hash(password, 12);
const verifyPassword = (password, passwordHash) => bcrypt.compare(password, passwordHash);

module.exports = {
    TOKEN_COOKIE,
    getCookieOptions,
    publicUser,
    createSession,
    hashPassword,
    verifyPassword,
};
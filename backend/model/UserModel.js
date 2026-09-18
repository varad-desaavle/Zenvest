const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Your email address is required"],
        unique: true,
        lowercase: true,
        trim: true,
    },
    username: {
        type: String,
        required: [true, "Your username is required"],
        trim: true,
        minlength: 2,
    },
    password: {
        type: String,
        required: [true, "Your password is required"],
        select: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("User", userSchema);
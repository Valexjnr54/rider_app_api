"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const crypto_1 = __importDefault(require("crypto"));
const models_1 = require("../../models");
const config_1 = require("../../config/config");
const express_validator_1 = require("express-validator");
const cloudinary_1 = __importDefault(require("../../utils/cloudinary"));
const prisma = new models_1.PrismaClient();
async function registerUser(req, res) {
    const { fullname, username, email, password, phone, profile_image } = req.body;
    const error = (0, express_validator_1.validationResult)(req.body);
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }
    try {
        if (email == null) {
            return res.status(400).json({ message: 'Email address Required' });
        }
        else if (fullname == null) {
            return res.status(400).json({ message: 'Full Name Required' });
        }
        else if (username == null) {
            return res.status(400).json({ message: 'Username Required' });
        }
        else if (password == null) {
            return res.status(400).json({ message: 'Password Required' });
        }
        else if (phone == null) {
            return res.status(400).json({ message: 'Password Required' });
        }
        // Check if the email is already registered
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already registered' });
        }
        // Hash the password before storing it
        const salt = crypto_1.default.randomBytes(16).toString('hex'); // Generate a random salt
        const hashedPassword = crypto_1.default
            .pbkdf2Sync(password, salt, 10000, 64, 'sha512')
            .toString('hex');
        let imageUrl = "https://res.cloudinary.com/dx2gbcwhp/image/upload/v1699044872/noimage/uyifdentpdqjeyjnmowa.png"; // Default URL
        if (profile_image != null) {
            const uploadedImageUrl = await (0, cloudinary_1.default)(profile_image, 'rider_app/images/profile_images');
            if (uploadedImageUrl) {
                imageUrl = uploadedImageUrl;
            }
        }
        // Create a new user in the database
        const newUser = await prisma.user.create({
            data: {
                fullname,
                username,
                email,
                phone_number: phone,
                profile_image: imageUrl,
                password: `${hashedPassword}:${salt}`, // Store the salt along with the hash
            },
        });
        // Generate a JWT token for the newly registered user
        const token = jsonwebtoken_1.default.sign({ userId: newUser.id, email: newUser.email, fullname: newUser.fullname, username: newUser.username }, config_1.Config.secret);
        res.status(201).json({ token, newUser });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.registerUser = registerUser;
async function loginUser(req, res) {
    const { email, password } = req.body;
    try {
        // Find the user by email
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        // Verify the password
        const [storedHash, storedSalt] = user.password.split(':');
        const inputHash = crypto_1.default
            .pbkdf2Sync(password, storedSalt, 10000, 64, 'sha512')
            .toString('hex');
        if (storedHash !== inputHash) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        // Generate a JWT token for the user
        const token = jsonwebtoken_1.default.sign({ userId: user.id, email: user.email }, config_1.Config.secret);
        res.status(200).json({ token, user });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.loginUser = loginUser;

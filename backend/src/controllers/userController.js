import User from "../models/userModel.js";
import Holding from "../models/holdingsModel.js";
import Position from "../models/positionsModel.js";
import generateToken from "../utils/secretToken.js";

const signUp = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists",
            });
        }

        const user = await User.create({ username, email, password });
        const token = generateToken(user);
        const isProduction =
            process.env.NODE_ENV === "production" ||
            process.env.RENDER === "true";
        res.cookie("accessToken", token, {
            httpOnly: true,
            secure: isProduction,
            sameSite: isProduction ? "None" : "Lax",
            maxAge: 3600000, // 1 hour
        });

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            user,
        });
    } catch (error) {
        console.error("Error signing up:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password",
            });
        }

        const isPasswordValid = await user.comparePassword(password);

        if (!isPasswordValid) {
            return res.status(401).json({
                message: "Invalid email or password",
            });
        }

        const token = generateToken(user);
        const isProduction =
            process.env.NODE_ENV === "production" ||
            process.env.RENDER === "true";
        res.cookie("accessToken", token, {
            httpOnly: true,
            secure: isProduction,
            sameSite: isProduction ? "None" : "Lax",
            maxAge: 3600000, // 1 hour
        });

        res.status(200).json({
            success: true,
            message: "User logged in successfully",
            user,
        });
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

const generalDetails = async (_, res) => {
    const totalHoldings = await Holding.find({});
    const totalPositions = await Position.find({});

    res.json({ totalHoldings, totalPositions });
};

const logout = (req, res) => {
    const isProduction =
        process.env.NODE_ENV === "production" || process.env.RENDER === "true";
    console.log(`Clearing cookie. Production: ${isProduction}`);
    res.clearCookie("accessToken", {
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction ? "None" : "Lax",
    });

    res.status(200).json({
        success: true,
        message: "User logged out successfully",
    });
};

const userVerification = (req, res) => {
    if (req.user) {
        console.log(`User verified: ${req.user.username}`);
        res.json({ status: true, user: req.user });
    } else {
        console.log("Verification failed: No user in request");
        res.json({ status: false });
    }
};

export { signUp, login, generalDetails, logout, userVerification };

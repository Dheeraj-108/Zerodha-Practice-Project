import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
    const token = req.cookies.accessToken;
    if (!token) {
        return res.json({ status: false });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);
        if (user) {
            req.user = user;
            next();
        } else {
            return res.json({ status: false });
        }
    } catch (error) {
        return res.json({ status: false });
    }
};

export default authMiddleware;

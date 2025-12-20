import Router from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
const router = Router();

import {
    signUp,
    login,
    generalDetails,
    logout,
    userVerification,
} from "../controllers/userController.js";

router.post("/signup", signUp);
router.post("/login", login);
router.post("/logout", logout);
router.post("/verify", authMiddleware, userVerification);
router.get("/details", generalDetails);

export default router;

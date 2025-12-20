import { Router } from "express";
const router = Router();

import { getHolding } from "../controllers/holdingController.js";

router.get("/", getHolding);

export default router;

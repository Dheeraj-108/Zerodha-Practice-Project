import { Router } from "express";
const router = Router();

import { getPosition } from "../controllers/positionController.js";

router.get("/", getPosition);

export default router;

import { Router } from "express";
const router = Router();

import { manageOrder, getOrder } from "../controllers/orderController.js";

router.post("/", manageOrder);

router.get("/", getOrder);

export default router;

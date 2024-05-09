import { Router } from "express";
import { getAllotment } from "../controllers/getAllotment.controller.js";

const router = Router();

router.route('/getAllotment').get(getAllotment);

export default router;
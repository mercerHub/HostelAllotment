import { Router } from "express";
import allotment from "../controllers/allotment.controller.js";

const router = Router();

router.route("/hostel/allotment").get(allotment);

export default router;
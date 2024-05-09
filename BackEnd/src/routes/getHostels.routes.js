import { Router } from "express";
import getHostelData from "../controllers/getHostels.controller.js";

const router = Router();

router.route("/hostels/get").get(getHostelData)

export default router;
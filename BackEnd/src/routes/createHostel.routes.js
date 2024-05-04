import { Router } from "express";
import { createHostel } from "../controllers/createHostel.controller.js";

const router = Router();

router.route('/create/hostel').post(createHostel)

export default router;
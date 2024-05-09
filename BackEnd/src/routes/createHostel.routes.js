import { Router } from "express";
import { createHostel } from "../controllers/createHostel.controller.js";

const router = Router();

router.route('/hostel/create').post(createHostel)

export default router;
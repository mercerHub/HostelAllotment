import { seedStudents } from "../controllers/seedStudents.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { Router } from "express";

const router = Router()

router.route("/upload").post(
    upload.fields([
        {
            name: "Sheet",
            maxCount: 1
        }
    ]),
    seedStudents
)

export default router
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Student } from "../models/student.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import xlsx from "xlsx";
import fs from "fs";

const seedStudents = asyncHandler(async (req, res) => {
    try {
        const workbook = xlsx.readFile(req.files?.Sheet[0].path);
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const data = xlsx.utils.sheet_to_json(sheet);

        for (const d of data) {
            const { ['Name'] :name, ['Branch']:branch, ['Year']:year,["Roll number"]: rollNumber,['CGPA']: cgpa,['Gender']:gender } = d;

            if ([name, branch, year, rollNumber, cgpa, gender].some(field => field === "")) {
                throw new ApiError(400, "Check the sheets for empty fields");
            }

            // Check if the student already exists
            const existedStudent = await Student.findOne({ rollNumber });

            if (existedStudent) {
                throw new ApiError(409, "Redundant data of students in the list");
            }

            // Create the student
            await Student.create({ name, branch, year, rollNumber, cgpa ,gender});
        }

        fs.unlinkSync(req.files?.Sheet[0].path);

        const response = new ApiResponse(200, null, "DATA FED SUCCESSFULLY !!");
        return res.status(201).json(response);
    } catch (error) {
        fs.unlinkSync(req.files?.Sheet[0].path);
        console.log("Failed to parse sheet", error);
        return res.status(error.statusCode || 500).json(new ApiResponse(error.statusCode || 500, null, error.message));
    }
});

export { seedStudents };

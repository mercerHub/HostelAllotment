import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Student } from "../models/student.model.js";

const getAllotment = asyncHandler(async (req,res) => {
    const studentData = await Student.find()
    
    if(!studentData) throw new ApiError(408,"Couldn't fetch allotment data")

    return res.status(201).json(
        new ApiResponse(200, studentData, "User registered successfully")
    )
})

export {getAllotment}
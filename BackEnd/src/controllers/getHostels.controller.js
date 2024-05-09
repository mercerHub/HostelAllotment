import { Hostel } from "../models/hostel.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getHostelData = asyncHandler(async (req, res) => {
    const hostelData = await Hostel.find({});

    if(!hostelData) new ApiError(408,"Couldn't fetch hostel Data")

    return res.status(200).json(
        new ApiResponse(200,hostelData,"Hostel data fetch Sucessful")
    )

})

export default getHostelData;
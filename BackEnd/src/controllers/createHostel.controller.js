import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Hostel } from "../models/hostel.model.js";    

const createHostel = asyncHandler(async (req,res) => {
    const {hostelName,capacity,hostelType,index} = req.body;

    if([hostelName,capacity,hostelType,index].some(field => field === "")){
        throw new ApiError(408,"Hostel name or capacity missing");
    }

    const existedHostel = await Hostel.findOne({$or:[{hostelName},{index}]});

    if(existedHostel) throw new ApiError(409,"Hostel already exists")
    const hostel = await Hostel.create({hostelName,capacity,hostelType,index})
    if(!hostel) {
        throw new ApiError(409,"Couldn't create hostel");
    }
    const response = new ApiResponse(200,hostel,"Success !!!")

    return res.status(200).json(response);
})

export {createHostel}
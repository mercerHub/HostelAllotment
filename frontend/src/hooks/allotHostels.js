import axios from "axios"
import { server } from "../constants";


const allotHostels = async () => {
    const response = await axios.get(`${server}/hostel/allotment`)
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })

    if(response) alert('Alloted Succesfully !!')

    
}

export default allotHostels;
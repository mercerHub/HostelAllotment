import React, { useState } from 'react'
import axios from "axios"

function FileUpload() {
    const [file,setFile] = useState(null);

    const upload = () => {
        const formData = new FormData();
        formData.append('Sheet',file);
        axios.post("http://localhost:8000/api/v1/upload",formData)
        .then(res => {console.log(res)})
        .catch(err => console.log("Error !!",err));
        //console.log(formData.get("Sheet"))
    }
    return (
        <div>
            <input type="file" accept='.xlsx' onChange={(e) => setFile(e.target.files[0])}/>
            <button type='button' onClick={upload}>Upload</button>
        </div>
    )
}

export default FileUpload

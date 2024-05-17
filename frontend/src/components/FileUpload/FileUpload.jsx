import React, { useEffect, useState } from 'react'
import axios from "axios"
import { BsFiletypeXlsx } from "react-icons/bs";
import { server } from '../../constants';
import TableItem from '../TableItems/TableItem';
import allotHostels from '../../hooks/allotHostels';

function FileUpload() {
    const [file,setFile] = useState(null);
    const [studentData,setStudentData] = useState([[]]);
    const [isUploading,setIsUploading] = useState(false);

    const upload = async () => {
        const formData = new FormData();
        formData.append('Sheet',file);
        await axios.post(`${server}/upload`,formData)
        .then(res => {console.log(res)})
        .catch(err => console.log("Error !!",err));
        setIsUploading(true)
    }


    useEffect(() => {
        axios.get(`${server}getAllotment`)
        .then(resonse => {
            setStudentData(resonse.data.data);
            console.log(resonse.data.data)
        })
        .catch(err => {
            console.log(err);
        })
        return setIsUploading(false);
    },[isUploading])
    return (
        <div className='bg-stone-100 w-full ml-1 flex items-center justify-center'>
            <div className='w-2/3 flex flex-col items-center gap-2 border-r-4 h-full p-5 overflow-y-scroll scrollbar-width-thin scrollbar-track-gray-200 scrollbar-thumb-gray-500'>
                <div className='mt-10'>
                    <TableItem data = {
                        { 
                            name:"Name",
                            rollNumber:"Roll Number",
                            branch:"Branch",
                            hostelAlloted:"Hostel"
                        }
                    }
                    />
                </div>
                {studentData.map(student => (
                    <div key={student.id}>
                        <TableItem data = {student}/>
                    </div>
                ))}
                <button 
                className='text-lg font-semibold bg-violet-50 text-violet-700 rounded-xl border-2 w-1/3 p-2 mt-2 hover:bg-violet-200 ease-in-out duration-200'
                onClick={allotHostels}
                >
                    Allot Hostels
                </button>
            </div>
            <div className='flex flex-col items-center justify-center w-1/3 h-1/2 border-stone-900'>
                <div className='flex flex-col border-2 rounded-lg p-5 items-center bg-slate-800 gap-5'>
                <span className='text-slate-400 text-7xl'><BsFiletypeXlsx/></span>
                <input 
                className='w-full text-sm text-slate-300 rounded-lg
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-violet-50 file:text-violet-700
                hover:file:bg-violet-100'
                type="file" accept='.xlsx' onChange={(e) => setFile(e.target.files[0])}/>
                </div>
                <button 

                className='text-lg font-semibold bg-violet-50 text-violet-700 rounded-xl border-2 w-1/3 p-2 mt-2 hover:bg-violet-200 ease-in-out duration-200'
                
                type='button' onClick={upload}>Upload</button>
            </div>
            
            
        </div>
    )
}

export default FileUpload

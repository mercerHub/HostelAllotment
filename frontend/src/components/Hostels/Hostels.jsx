import React, { useEffect, useState } from 'react'
import { server } from '../../constants'
import axios from 'axios';
import Card from '../util/Card';
import { BsPlusLg } from "react-icons/bs";
import { NavLink } from 'react-router-dom';

function Hostels() {
    const [getHostels,setHostels] = useState([]);

    useEffect(() => {
        axios.get(`${server}/hostels/get`)
        .then(response => {
            setHostels(response.data.data)
            console.log(response.data.data);
        })
        .catch(err => {
            console.log(err);
        })
    },[])

    return (
        <div className='bg-stone-100 w-5/6 overflow-auto flex flex-wrap justify-around border-2 p-5'>
            {getHostels.map(element => (
                <Card
                    data = {element}
                />
            ))}
            <div className='bg-slate-300 rounded-xl p-4 flex flex-col m-2 p-5 text-stone-500 text-5xl min-w-80 font-mono items-center h-1/3 gap-3'>
                <div className='font-bold text-violet-900 text-2xl m-4 bg-stone-300 py-2 px-5 accordion-header rounded-xl border-2'>
                    Create Hostel
                </div>
                <div className='rounded-full ease-in-out duration-200 p-2 hover:bg-gray-400 hover:text-stone-700'>
                <NavLink
                    to="/hostels/create"
                >
                <BsPlusLg />
                </NavLink>
                </div>
                
            </div>
            
        </div>
    )
}

export default Hostels

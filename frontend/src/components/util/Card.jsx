import React from 'react'

function Card({data}) {
    const {hostelName,capacity,hostelType,currentOccupancy} = data;
    return (
        <div className='bg-slate-300 rounded-xl p-4 flex flex-col m-2 p-5 text-stone-500 text-xl min-w-80 font-mono items-center h-1/3'>
            <div className='font-bold text-violet-900 text-2xl m-4 bg-stone-300 py-2 px-5 accordion-header rounded-xl border-2'>{hostelName}</div>
            <div>Capacity : {capacity}</div>
            <div>Type : {(hostelType === 'M') ? "Boys Hostel" : "Girls Hostel"}</div>
            <div>Available : {capacity - currentOccupancy}</div>
        </div>
    )
}

export default Card

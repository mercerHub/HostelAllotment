import React from 'react'

function TableItem({data}) {
    const {name,rollNumber,branch,hostelAlloted} = data;
    return (
        <div className='flex items-center gap-2 border-2 font-serif px-5 py-2 rounded-xl font-medium'>
            <div className='w-40 border-r-2'>{name}</div>
            <div className='w-40 border-r-2'>{rollNumber}</div>
            <div className='w-40 border-r-2'>{branch}</div>
            <div className='w-40'>{hostelAlloted}</div>
        </div>
    )
}

export default TableItem

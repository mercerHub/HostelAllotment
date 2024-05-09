import React from 'react'
import { NavLink } from 'react-router-dom'
import NavItems from './NavItems'

function Sidebar() {

    return (
        <div className='h-full mr-1 w-2/12 flex flex-col pt-2 gap-5 bg-stone-100 min-w-24'>
            <div className='flex flex-col gap-5 mt-10 p-2'>
                <NavItems
                    content={"Home"}
                    goto={"/"}
                    type={"home"}
                    
                />
                
                <NavItems
                    content={"Hostels"}
                    goto={"/hostels"}
                    type={"hostel"}
                />
                <NavItems
                    content={"About"}
                    goto={"/about"}
                    type={"about"}
                />
                <NavItems
                    content={"Contact"}
                    goto={"/contact"}
                    type={"contact"}
                />
            </div>
        </div>
        
    )
}

export default Sidebar

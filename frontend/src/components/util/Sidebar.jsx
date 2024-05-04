import React from 'react'
import { NavLink } from 'react-router-dom'
import NavItems from './NavItems.jsx'

function Sidebar() {

    return (
        <div className='h-full w-2/12 flex flex-col pt-2 gap-5 bg-stone-100'>
            <div className='flex flex-col gap-5 mt-10 p-2'>
                <div>
                    <NavItems
                        content={"Home"}
                        goto={"/"}
                        type={"home"}
                        
                    />
                </div>
                
                <NavItems
                    content={"Hostels"}
                    goto={"/"}
                    type={"hostel"}
                />
                <NavItems
                    content={"About"}
                    goto={"/"}
                    type={"about"}
                />
                <NavItems
                    content={"Contacts"}
                    goto={"/"}
                    type={"contact"}
                />
            </div>
        </div>
        
    )
}

export default Sidebar

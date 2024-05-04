import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../util/Sidebar.jsx'

function Layout() {
    return (
        <div className='h-screen bg-stone-300 flex'>
            <Sidebar/>
            <Outlet/>
        </div>
    )
}

export default Layout

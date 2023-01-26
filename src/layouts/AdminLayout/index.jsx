import React from 'react'
import { Outlet } from 'react-router-dom'
import 'react-quill/dist/quill.snow.css'

import Header from './components/Header'
import Navbar from './components/Navbar'

function AdminLayout() {
    return (
        <div className='flex h-screen bg-white-f8'>
            <Navbar />
            <div className='bg-3 flex flex-1 flex-col px-8 pt-4'>
                <Header />
                <div className='h-full flex-1 overflow-auto'>
                    <div className='rounded-lg bg-white p-4 shadow-xl'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLayout

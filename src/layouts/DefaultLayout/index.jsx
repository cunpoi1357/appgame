import { Outlet } from 'react-router-dom'

import Header from './commponets/Header'
import Navbar from './commponets/Navbar'

function DefaultLayout() {
    return (
        <div className='bg-gray-e6'>
            <Header />
            <Navbar />
            <div className='-mt-[50px] border-b-[10px] border-orange-e2 pb-20'>
                <Outlet />
            </div>
            <footer className='bg-brown-6b'>
                <div className='mx-auto h-40 max-w-screen-lg'></div>
            </footer>
        </div>
    )
}

export default DefaultLayout

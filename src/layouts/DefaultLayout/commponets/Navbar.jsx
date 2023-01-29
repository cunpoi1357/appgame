import clsx from 'clsx'
import React from 'react'
import { BiLogIn } from 'react-icons/bi'
import { HiUserAdd } from 'react-icons/hi'
import { IoMdHome } from 'react-icons/io'
import { NavLink } from 'react-router-dom'

function Navbar() {
    const data = [
        {
            icon: <IoMdHome className='text-[28px]' />,
            title: 'Trang chủ',
            path: '/'
        },

        {
            icon: <BiLogIn className='text-[28px]' />,
            title: 'Đăng nhập',
            path: '/login'
        },
        {
            icon: <HiUserAdd className='text-[28px]' />,
            title: 'Đăng ký',
            path: '/register'
        }
    ]

    return (
        <nav className='h-[170px] border-b-[10px] border-white bg-orange-e2'>
            <div className='mx-auto max-w-screen-lg pt-4'>
                <ul className='flex gap-4'>
                    {data.map(item => (
                        <li key={item.path}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    clsx(
                                        'relative flex h-20 w-24 cursor-pointer flex-col items-center justify-center rounded py-[14px] text-white',
                                        {
                                            'border border-orange-cc bg-orange-d5':
                                                !isActive,
                                            'bg-brown-ad': isActive
                                        }
                                    )
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        {item.icon}
                                        <span className='mt-1 text-sm'>
                                            {item.title}
                                        </span>
                                        {isActive && (
                                            <span className='absolute bottom-0 left-1/2 h-4 w-4 -translate-x-1/2 translate-y-1/2 rotate-45 bg-brown-ad' />
                                        )}
                                    </>
                                )}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar

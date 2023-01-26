import React from 'react'
import { FiHome } from 'react-icons/fi'
import { AiOutlineAppstore, AiOutlineSetting } from 'react-icons/ai'
import { BsPlay, BsSquare } from 'react-icons/bs'

import Button from '~/components/Button'
import Menu, { MenuItem } from './Menu'

const manageMenu = [
    {
        name: 'Người dùng',
        icon: <AiOutlineAppstore className='text-gray-58' />,
        children: [
            {
                name: 'DS.Nguời dùng',
                icon: <BsSquare className='h-3 w-3' />,
                path: '/admin/nguoi-dung/danh-sach'
            },
            {
                name: 'LS.Thay đổi SD',
                icon: <BsSquare className='h-3 w-3' />,
                path: '/admin/nguoi-dung/lich-su'
            },
            {
                name: 'Người dùng (Game)',
                icon: <BsSquare className='h-3 w-3' />,
                path: '/admin/nguoi-dung/game'
            }
        ]
    },
    {
        name: 'Lịch sử rút xu',
        icon: <AiOutlineAppstore className='text-gray-58' />,
        path: '/admin/lich-su-rut-xu'
    },
    {
        name: 'Chẵn lẻ',
        icon: <AiOutlineAppstore className='text-gray-58' />,
        children: [
            {
                name: 'Phiên chẳn lẻ',
                icon: <BsSquare className='h-3 w-3' />,
                path: '/admin/chan-le'
            },
            {
                name: 'Người chơi',
                icon: <BsSquare className='h-3 w-3' />,
                path: '/admin/chan-le/nguoi-choi'
            },
            {
                name: 'TOP người chơi',
                icon: <BsSquare className='h-3 w-3' />,
                path: '/admin/chan-le/top'
            }
        ]
    },
    {
        name: 'Bot tự động',
        icon: <AiOutlineAppstore className='text-gray-58' />,
        path: '/admin/bot-tu-dong'
    }
]

const configMenu = [
    {
        name: 'Tỉ lệ thưởng',
        icon: <AiOutlineSetting />,
        path: '/admin/ti-le-thuong'
    },
    {
        name: 'Nạp/Rút xu',
        icon: <AiOutlineSetting />,
        path: '/admin/nap-rut-xu'
    },
    {
        name: 'Máy chủ game',
        icon: <AiOutlineSetting />,
        path: '/admin/quan-li-may-chu'
    },
    {
        name: 'Website',
        icon: <AiOutlineSetting />,
        path: '/admin/cau-hinh-website'
    },
    {
        name: 'Chatbox',
        icon: <AiOutlineSetting />,
        path: '/admin/chat-box'
    },
    {
        name: <span className='text-green-400'>Mở hệ thống</span>,
        icon: <BsPlay className='text-green-400' />
    },
    {
        name: <span className='text-green-400'>Mở nhận đơn</span>,
        icon: <BsPlay className='text-green-400' />
    }
]

function Navbar() {
    return (
        <nav className='h-screen w-72 overflow-auto bg-white px-4'>
            <h1 className='py-4 text-center text-2xl font-semibold uppercase text-violet'>
                Admin panel
            </h1>
            <MenuItem
                data={{
                    path: '/admin',
                    name: 'Bảng điều khiển',
                    icon: <FiHome className='mr-2' />
                }}
            />
            <div className='mt-4'>
                <h3 className='py-2 pl-4 text-gray-a9'>Quản lí</h3>
                <Menu data={manageMenu} />

                <h3 className='py-2 pl-4 text-gray-a9'>Cấu hình</h3>
                <Menu data={configMenu} />
            </div>
        </nav>
    )
}

export default Navbar

import { createBrowserRouter } from 'react-router-dom'

import DefaultLayout from './layouts/DefaultLayout'
import AdminLayout from './layouts/AdminLayout'

import Home from './Page/Home'
import Dashboard from './Page/Dashboard'
import NguoiChoi from './Page/ChanLe/NguoiChoi'
import Top from './Page/ChanLe/Top'
import PhienChanLe from './Page/ChanLe/PhienChanLe'
import TiLeThuong from './Page/TiLeThuong'
import CauHinhWebsite from './Page/CauHinhWebsite'
import DSNguoiDung from './Page/NguoiDung/DSNguoiDung'
import NapRutXu from './Page/NapRutXu'
import QuanLiMayChu from './Page/QuanLiMayChu'
import LichSuRutXu from './Page/LichSuRutXu'
import ChinhSuaNguoiDung from './Page/NguoiDung/ChinhSua'
import LSThayDoiSD from './Page/NguoiDung/LSThayDoiSD'
import Game from './Page/NguoiDung/Game'
import BotTuDong from './Page/BotTuDong'
import ChatBox from './Page/ChatBox'

const router = createBrowserRouter([
    {
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    },
    {
        path: 'admin',
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: 'nguoi-dung',
                children: [
                    {
                        path: 'danh-sach',
                        element: <DSNguoiDung />
                    },
                    {
                        path: 'chinh-sua',
                        element: <ChinhSuaNguoiDung />
                    },
                    {
                        path: 'lich-su',
                        element: <LSThayDoiSD />
                    },
                    {
                        path: 'game',
                        element: <Game />
                    }
                ]
            },
            {
                path: 'lich-su-rut-xu',
                element: <LichSuRutXu />
            },
            {
                path: 'chan-le',
                children: [
                    { path: '', element: <PhienChanLe /> },
                    {
                        path: 'nguoi-choi',
                        element: <NguoiChoi />
                    },
                    {
                        path: 'top',
                        element: <Top />
                    }
                ]
            },
            {
                path: 'bot-tu-dong',
                element: <BotTuDong />
            },
            {
                path: 'ti-le-thuong',
                element: <TiLeThuong />
            },
            {
                path: 'nap-rut-xu',
                element: <NapRutXu />
            },
            {
                path: 'quan-li-may-chu',
                element: <QuanLiMayChu />
            },
            {
                path: 'cau-hinh-website',
                element: <CauHinhWebsite />
            },
            {
                path: 'chat-box',
                element: <ChatBox />
            }
        ]
    }
])

export default router

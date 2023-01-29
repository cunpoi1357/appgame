import { useState } from 'react'
import { TbCurrencyDollar } from 'react-icons/tb'
import { IoMdExit, IoMdSettings } from 'react-icons/io'

import Button from '~/components/Button'
import Input from '~/components/Input'
import Label from '~/components/Label'
import Select from '~/components/Select'
import Table from '~/components/Table'
import Modal from '~/components/Modal'
import server from '~/constants/server'
import { Link } from 'react-router-dom'
import Pagination from '~/components/Pagination'

function Action({ id }) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
        <div className='flex gap-2'>
            <button
                title='Xem thông tin lượt chơi'
                className='rounded-full border border-green-400 p-3 text-green-400 transition-colors hover:border-white hover:bg-green-400 hover:text-white'
                onClick={() => setIsModalOpen(true)}
            >
                <TbCurrencyDollar />
            </button>
            <Link
                to='/admin/nguoi-dung/chinh-sua'
                title='Chỉnh sửa'
                className='rounded-full border border-orange-400 p-3 text-orange-400 transition-colors hover:border-white hover:bg-orange-400 hover:text-white'
            >
                <IoMdSettings />
            </Link>
            <button
                title='Xóa'
                className='rounded-full border border-violet p-3 text-violet transition-colors hover:border-white hover:bg-violet hover:text-white'
            >
                <IoMdExit />
            </button>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                title='Thay đổi số dư'
                className='w-[500px]'
            >
                <div className='px-4 pt-2'>
                    {server.map(item => (
                        <div
                            key={item}
                            className='grid grid-cols-2 border-t-white-f8 p-2'
                        >
                            <div className='col-span-1 text-gray-81'>
                                <strong>{item}</strong>
                            </div>
                            <div className='col-span-1 text-center'>
                                <Label className='bg-red-400'>1.000 xu</Label>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='mb-6 grid gap-3'>
                    <div className='grid grid-cols-3'>
                        <label
                            htmlFor='username'
                            className='col-span-1 text-gray-81'
                        >
                            Người dùng:
                        </label>
                        <Input id='username' className='col-span-2' disabled />
                    </div>
                    <div className='grid grid-cols-3'>
                        <label
                            htmlFor='name'
                            className='col-span-1 text-gray-81'
                        >
                            Tên:
                        </label>
                        <Input id='name' className='col-span-2' disabled />
                    </div>
                    <div className='grid grid-cols-3'>
                        <label className='col-span-1 text-gray-81'>
                            Thay đổi:
                        </label>
                        <div className='col-span-2'>
                            <div>
                                <Input
                                    id='cong_tien'
                                    name='change'
                                    type='radio'
                                    className='mr-2'
                                />
                                <label htmlFor='cong_tien'>Cộng tiền</label>
                            </div>
                            <div>
                                <Input
                                    id='tru_tien'
                                    name='change'
                                    type='radio'
                                    className='mr-2'
                                />
                                <label htmlFor='tru_tien'>Trừ tiền</label>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-3'>
                        <label
                            htmlFor='server'
                            className='col-span-1 text-gray-81'
                        >
                            Máy chủ:
                        </label>
                        <Select id='server' className='col-span-2'>
                            <option>--- Máy chủ ---</option>
                        </Select>
                    </div>
                    <div className='grid grid-cols-3'>
                        <label
                            htmlFor='so_tien'
                            className='col-span-1 text-gray-81'
                        >
                            Số tiền:
                        </label>
                        <Input id='so_tien' className='col-span-2' />
                    </div>
                    <div className='grid grid-cols-3'>
                        <label
                            htmlFor='note'
                            className='col-span-1 text-gray-81'
                        >
                            Ghi chú (mặc định):
                        </label>
                        <Input id='note' className='col-span-2' />
                    </div>
                </div>
                <div className='flex justify-end gap-2 border-t border-gray-f6 pt-4'>
                    <Button
                        className='bg-red-400 px-8 text-white'
                        onClick={() => setIsModalOpen(false)}
                    >
                        Đóng
                    </Button>
                    <Button className='bg-violet px-8 text-white'>
                        Đồng ý
                    </Button>
                </div>
            </Modal>
        </div>
    )
}

function DSNguoiDung() {
    const header = [
        '#',
        'Loại tài khoản',
        'Tài khoản',
        'Họ tên',
        'Email',
        'số dư',
        'Ngày đăng kí',
        'Hành động'
    ]
    const data = [
        {
            id: '1',
            type: <Label className='bg-cyan-400'>Facebook</Label>,
            username: 'cunpoi',
            name: 'Nguyễn Văn A',
            email: 'nnheo@example.com',
            overbalance: '22036416 xèng',
            createAt: '01/23/2023',
            action: <Action id='1' />
        }
    ]
    return (
        <div className='flex flex-col gap-10'>
            <h3 className='text-2xl text-gray-54'>Quản lí người dùng</h3>

            <div className='grid grid-cols-4 gap-x-10 gap-y-8'>
                <Select name='account_type'>
                    <option value=''>-- Loại tài khoản --</option>
                </Select>
                <Select name='account_role'>
                    <option value=''>-- Quyền hạn --</option>
                </Select>
                <Select name='locked_status'>
                    <option value=''>-- Tình trạng khóa --</option>
                </Select>
                <Select name='locked_status'>
                    <option value=''>-- Sắp xếp số dư --</option>
                </Select>
                <div className='col-span-4 flex gap-1'>
                    <Input
                        type='text'
                        placeholder='Từ khóa tìm kiếm mã,họ tên, email,..'
                        className='mr-10 w-[500px]'
                    />
                    <Button className='bg-cyan-400 px-6 text-white'>
                        Tìm kiếm
                    </Button>
                    <Button className='bg-red-500 px-6 text-white'>
                        Tất cả
                    </Button>
                </div>
            </div>
            <div className='flex justify-between'>
                <p>Hiện thị 20 kết quả trên tổng số 69</p>
                <Select name='view' className='w-64'>
                    <option>--- Hiện thị ---</option>
                </Select>
            </div>
            <Table header={header} data={data} />
            <div className='-m-4 rounded-b-lg bg-white-f8 p-4'>
                <Pagination onChange={data => console.log(data)} />
            </div>
        </div>
    )
}

export default DSNguoiDung

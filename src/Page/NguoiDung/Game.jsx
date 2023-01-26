import React from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import { BiEdit } from 'react-icons/bi'
import { FaTrashAlt } from 'react-icons/fa'
import { HiLockOpen } from 'react-icons/hi'
import Button from '~/components/Button'
import Input from '~/components/Input'
import Label from '~/components/Label'
import Select from '~/components/Select'
import ServerSelect from '~/components/ServerSelect'
import Table from '~/components/Table'

function Game() {
    const header = [
        '#',
        'Máy chủ',
        'Nhận vật',
        'TK nạp lần cuối',
        'Loại TK',
        'Hành động'
    ]

    const data = [
        {
            index: '1',
            server: <Label className='bg-orange-400'>sensha</Label>,
            username: 'vuichoi07',
            lastDonate: 'Chưa cập nhật',
            accountType: <Label className='bg-orange-400'>thường</Label>,
            action: (
                <div className='flex gap-2'>
                    <button
                        title='Khóa'
                        className='rounded-full border border-green-400 p-3 text-green-400 transition-colors hover:border-white hover:bg-green-400 hover:text-white'
                    >
                        <HiLockOpen />
                    </button>
                    <button
                        title='Chỉnh sửa'
                        className='rounded-full border border-orange-400 p-3 text-orange-400 transition-colors hover:border-white hover:bg-orange-400 hover:text-white'
                    >
                        <BiEdit />
                    </button>
                    <button
                        title='Xóa'
                        className='rounded-full border border-red-400 p-3 text-red-400 transition-colors hover:border-white hover:bg-red-400 hover:text-white'
                    >
                        <FaTrashAlt />
                    </button>
                </div>
            )
        }
    ]

    return (
        <div className='flex flex-col gap-10'>
            <div className='flex justify-between'>
                <h3 className='text-2xl text-gray-54'>Quản lý máy chủ game</h3>
                <Button
                    className='border border-violet text-violet transition-colors hover:bg-violet hover:text-white'
                    leftIcon={<AiFillPlusCircle />}
                >
                    Thêm nhân vật
                </Button>
            </div>

            <div className='grid grid-cols-4 gap-x-10 gap-y-8'>
                <ServerSelect />
                <Input
                    type='text'
                    placeholder='Từ khóa tìm kiếm mã,họ tên, email,..'
                />
                <Select>
                    <option value=''>-- Loại TK --</option>
                    <option value=''>Thường</option>
                    <option value=''>Cộng tác viên</option>
                </Select>
                <div className='flex gap-1'>
                    <Button className='bg-cyan-400 px-6 text-white'>
                        Tìm kiếm
                    </Button>
                    <Button className='bg-red-500 px-6 text-white'>
                        Tất cả
                    </Button>
                </div>
            </div>
            <div className='grid gap-4'>
                <div className='flex justify-between'>
                    <p>Hiện thị 20 kết quả trên tổng số 69</p>
                    <Select name='view' className='w-64'>
                        <option>--- Hiện thị ---</option>
                    </Select>
                </div>
                <Table header={header} data={data} />
            </div>
        </div>
    )
}

export default Game

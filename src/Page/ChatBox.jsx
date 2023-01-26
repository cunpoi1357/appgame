import React from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import Button from '~/components/Button'
import Select from '~/components/Select'
import ServerSelect from '~/components/ServerSelect'
import Table from '~/components/Table'

function ChatBox() {
    const header = [
        '#',
        'Vị trí',
        'Máy chủ',
        'Tài khoản',
        'Nhân vật',
        'Xu',
        'Lượng',
        'Trạng thái game',
        'Trạng thái',
        'Hiện thị',
        'Hành động'
    ]
    return (
        <div className='flex flex-col gap-10'>
            <div className='flex justify-between'>
                <h3 className='text-2xl text-gray-54'>Quản lý bot game</h3>
                <Button
                    className='border border-violet text-violet transition-colors hover:bg-violet hover:text-white'
                    leftIcon={<AiFillPlusCircle />}
                >
                    Thêm máy chủ
                </Button>
            </div>
            <div className='flex gap-10'>
                <ServerSelect className='w-80' />
                <div className='col-span-4 flex gap-1'>
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
            <Table header={header} data={[]} />
        </div>
    )
}

export default ChatBox

import React from 'react'
import Button from '~/components/Button'
import Input from '~/components/Input'
import Label from '~/components/Label'
import Select from '~/components/Select'
import ServerSelect from '~/components/ServerSelect'
import Table from '~/components/Table'

function LSThayDoiSD() {
    const header = [
        '#',
        'Người dùng',
        'Máy chủ',
        'Loại',
        'SD. Thay đổi',
        'Trước',
        'Sau',
        'Ghi chú',
        'TG. Tạo'
    ]
    const data = [
        {
            id: '3225152',
            user: '(#21201) chopper',
            server: <Label className='bg-orange-400'>KUNAI</Label>,
            type: <Label className='bg-cyan-400'>cộng tiền</Label>,
            change: '+150.000',
            truoc: '0',
            sau: '150.000',
            note: 'Thưởng top tháng',
            date: '2021-01-01'
        }
    ]
    return (
        <div className='flex flex-col gap-10'>
            <h3 className='text-2xl text-gray-54'>Danh sách biến động số dư</h3>

            <div className='grid grid-cols-3 gap-x-10 gap-y-8'>
                <ServerSelect />
                <Input type='text' placeholder='Mã người dùng' />
                <Input
                    type='text'
                    placeholder='Từ khóa tìm kiếm mã,họ tên, email,..'
                />
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

export default LSThayDoiSD

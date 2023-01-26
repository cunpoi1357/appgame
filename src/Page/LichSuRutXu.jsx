import React from 'react'
import Button from '~/components/Button'
import Input from '~/components/Input'
import Select from '~/components/Select'
import ServerSelect from '~/components/ServerSelect'
import Table from '~/components/Table'

function LichSuRutXu() {
    const header = [
        '#',
        'Người rút',
        'Máy chủ',
        'Nhân vật',
        'Số tiền rút',
        'Số xu',
        'Trạng thái',
        'Bot trả xu',
        'Ngày tạo đơn',
        'Hành động'
    ]
    const data = []
    return (
        <div className='flex flex-col gap-10'>
            <h3 className='text-2xl text-gray-54'>Lịch sử rút xu</h3>

            <div className='grid grid-cols-3 gap-x-10 gap-y-8'>
                <ServerSelect />
                <Select>
                    <option value=''>-- Trạng thái --</option>
                </Select>
                <Input
                    type='text'
                    placeholder='Từ khóa tìm kiếm mã,họ tên, email,..'
                />
                <Input
                    type='text'
                    placeholder='Khoảng bắt đầu'
                    onFocus={e => (e.target.type = 'date')}
                    onBlur={e => (e.target.type = 'text')}
                />
                <Input
                    type='date'
                    placeholder='Khoảng kết thúc'
                    onFocus={e => (e.target.type = 'date')}
                    onBlur={e => (e.target.type = 'text')}
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

export default LichSuRutXu

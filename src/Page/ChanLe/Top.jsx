import React from 'react'
import Button from '~/components/Button'
import Input from '~/components/Input'
import Select from '~/components/Select'
import Table from '~/components/Table'

function Top() {
    const header = [
        'TOP',
        'Tên nhân vật',
        'Máy chủ',
        'Số đã chơi',
        'Số đã thắng',
        'Lãi xu',
        'Hành động'
    ]
    return (
        <div className='flex flex-col gap-10'>
            <div className='flex justify-between'>
                <h3 className='text-2xl text-gray-54'>TOP chẳn lẻ (Ngày)</h3>
            </div>
            <div className='grid grid-cols-4 gap-x-10 gap-y-8'>
                <Input type='text' placeholder='Tên nhân vật' name='ingame' />
                <Select name='top'>
                    <option value=''>TOP ngày</option>
                </Select>
                <Input
                    type='text'
                    placeholder='Thời gian'
                    onFocus={e => (e.target.type = 'date')}
                    onBlur={e => (e.target.type = 'text')}
                />
                <Select name='lay'>
                    <option value=''>Lấy 5</option>
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
            <Table header={header} data={[]} />
        </div>
    )
}

export default Top

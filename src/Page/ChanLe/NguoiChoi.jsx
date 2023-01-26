import clsx from 'clsx'
import React from 'react'
import { AiFillPlusCircle, AiOutlineDown } from 'react-icons/ai'
import Button from '~/components/Button'
import Input from '~/components/Input'
import Label from '~/components/Label'
import Select from '~/components/Select'
import ServerSelect from '~/components/ServerSelect'
import Table from '~/components/Table'

function NguoiChoi() {
    const header = [
        '#',
        'Máy chủ',
        'Tên nhân vật',
        'Xu đặt',
        'Đặt',
        'Kết quả CL',
        'Kết quả TX',
        'Xu nhận',
        'Trạng thái',
        'BOT đặt',
        'BOT nhận',
        'TG. tạo',
        'Tùy chọn'
    ]

    const data = [
        {
            id: 1,
            mayChu: <Label className='bg-orange-400'>SENSHA</Label>,
            tenNhanVat: 'vaoviec',
            XuDat: '0 xu',
            dat: <Label className='bg-red-400'>không đặt</Label>,
            kqCL: <Label className='bg-red-400'>chưa có</Label>,
            kqTX: <Label className='bg-red-400'>chưa có</Label>,
            xuNhan: '50.000 xu',
            trangThai: <Label className='bg-green-400'>thắng</Label>,
            botDat: '',
            botNhan: '',
            tgTao: '',
            tuyChon: (
                <Button
                    className='border border-violet text-violet transition-colors hover:bg-violet hover:text-white'
                    rightIcon={<AiOutlineDown />}
                >
                    Tùy chọn
                </Button>
            )
        },
        {
            id: 1,
            mayChu: <Label className='bg-orange-400'>SENSHA</Label>,
            tenNhanVat: 'vaoviec',
            XuDat: '0 xu',
            dat: <Label className='bg-red-400'>không đặt</Label>,
            kqCL: <Label className='bg-red-400'>chưa có</Label>,
            kqTX: <Label className='bg-red-400'>chưa có</Label>,
            xuNhan: '50.000 xu',
            trangThai: <Label className='bg-green-400'>thắng</Label>,
            botDat: '',
            botNhan: '',
            tgTao: '',
            tuyChon: (
                <Button
                    className='border border-violet text-violet transition-colors hover:bg-violet hover:text-white'
                    rightIcon={<AiOutlineDown />}
                >
                    Tùy chọn
                </Button>
            )
        }
    ]

    return (
        <div className='flex flex-col gap-10'>
            <div className='flex justify-between'>
                <h3 className='text-2xl text-gray-54'>Danh sách người chơi</h3>
                <Button
                    className='border border-violet text-violet transition-colors hover:bg-violet hover:text-white'
                    leftIcon={<AiFillPlusCircle />}
                >
                    Tạo đơn nhận xu
                </Button>
            </div>
            <div className='grid grid-cols-4 gap-x-10 gap-y-8'>
                <Select name='local'>
                    <option value=''>-- Tất cả --</option>
                </Select>
                <Input placeholder='Tên nhân vật' type='text' name='ingame' />
                <ServerSelect />
                <Select name='result'>
                    <option value=''>-- Kết quả --</option>
                </Select>
                <Select name='status'>
                    <option value=''>-- Trạng thái --</option>
                </Select>
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
            <Table header={header} data={data} />
        </div>
    )
}

export default NguoiChoi

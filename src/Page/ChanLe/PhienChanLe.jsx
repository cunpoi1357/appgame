import React, { useState } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import Button from '~/components/Button'
import Input from '~/components/Input'
import Select from '~/components/Select'
import Table from '~/components/Table'

import { ImEye } from 'react-icons/im'
import Modal from '~/components/Modal'
import Label from '~/components/Label'
import ServerSelect from '~/components/ServerSelect'

const ViewAction = props => (
    <button
        title='Xem thông tin lượt chơi'
        className='my-4 rounded-full border border-violet p-3 text-violet transition-colors hover:border-white hover:bg-violet hover:text-white'
        {...props}
    >
        <ImEye />
    </button>
)

function PhienChanLe() {
    const [isModalOpen, setIsModalOpen] = useState()

    const header = [
        '#',
        'Máy chủ',
        'Số người chơi',
        'Số ngườI thắng',
        'Kết quả CL',
        'Kết quả TX',
        'TG. Bắt đầu',
        'Hành động'
    ]

    const data = [
        {
            id: '15212641',
            mayChu: <Label className='bg-orange-400'>booken</Label>,
            soNguoiChoi: 0,
            soNguoiThang: 0,
            kqCL: <Label className='bg-red-400'>chưa có</Label>,
            kqTX: <Label className='bg-red-400'>chưa có</Label>,
            tgBatDau: '012223',
            hanhDong: (
                <ViewAction
                    title='Xem thông tin lượt chơi'
                    onClick={() => setIsModalOpen(true)}
                >
                    <ImEye />
                </ViewAction>
            )
        },
        {
            id: '15212641',
            mayChu: <Label className='bg-orange-400'>booken</Label>,
            soNguoiChoi: 0,
            soNguoiThang: 0,
            kqCL: <Label className='bg-red-400'>chưa có</Label>,
            kqTX: <Label className='bg-red-400'>chưa có</Label>,
            tgBatDau: '012223',
            hanhDong: (
                <ViewAction
                    title='Xem thông tin lượt chơi'
                    onClick={() => setIsModalOpen(true)}
                >
                    <ImEye />
                </ViewAction>
            )
        }
    ]

    return (
        <div className='flex flex-col gap-10'>
            <div className='flex justify-between'>
                <h3 className='text-2xl text-gray-54'>Danh sách lượt VXMM</h3>
                <Button
                    className='border border-violet text-violet transition-colors hover:bg-violet hover:text-white'
                    leftIcon={<AiFillPlusCircle />}
                >
                    Tạo đơn nhận xu
                </Button>
            </div>
            <div className='grid grid-cols-4 gap-x-10 gap-y-8'>
                <Input placeholder='Tên nhân vật' type='text' name='ingame' />
                <ServerSelect />
                <Select name='result'>
                    <option value=''>-- Kết quả --</option>
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
            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                title='Thông tin lượt chơi'
                className='flex min-w-[800px] flex-col gap-8'
            >
                <div className='rounded-xl border border-violet p-4'>
                    <p>
                        <strong>Mã phiên: </strong>
                        <span>2213</span>
                    </p>
                    <p>
                        <strong>Mã phiên: </strong> <span>2213</span>
                    </p>
                </div>
                <div>
                    <table className='w-full table-auto text-left'>
                        <thead>
                            <tr className='bg-violet text-center text-white'>
                                <th className='border-r p-4'>Nhân vật</th>
                                <th className='border-r p-4'>Xu đặt</th>
                                <th className='border-r p-4'>Đặt</th>
                                <th className='border-r p-4'>Trạng thái</th>
                                <th className='p-4'>Xu ăn</th>
                            </tr>
                        </thead>
                        <tbody className='text-gray-aa'>
                            {/* <tr>
                                    <td></td>
                                </tr> */}
                        </tbody>
                    </table>
                    <p className='w-full bg-gray-f4 p-4 text-center text-sm text-gray-91'>
                        Chưa có kếT quả người chơi
                    </p>
                </div>
                <div
                    className='flex justify-end gap-2 border-t border-gray-f6'
                    onClick={() => setIsModalOpen(false)}
                >
                    <Button className='bg-red-400 px-8 text-white'>Đóng</Button>
                </div>
            </Modal>
        </div>
    )
}

export default PhienChanLe

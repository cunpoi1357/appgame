import { useState } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import Button from '~/components/Button'
import { v4 as uuidv4 } from 'uuid'
import Table from '~/components/Table'
import Select from '~/components/Select'
import Label from '~/components/Label'
import SwitchButton from '~/components/SwitchButton'
import { FaTrashAlt } from 'react-icons/fa'
import { BiEdit } from 'react-icons/bi'
import Modal from '~/components/Modal'
import Input from '~/components/Input'

function QuanLiMayChu() {
    const [radios, setRadios] = useState([
        {
            id: uuidv4()
        }
    ])
    const [isModalShow, setIsModalShow] = useState(false)
    const header = ['#', 'Id máy chủ', 'Tên máy chủ', 'Trạng thái', 'Hành động']

    const data = [
        {
            id: '1',
            serverId: '1',
            serverName: <Label className='bg-orange-400'>Bokken</Label>,
            status: <SwitchButton />,
            action: (
                <div className='flex gap-2'>
                    <button
                        title='Chỉnh sửa'
                        className='rounded-full border border-orange-400 p-3 text-orange-400 transition-colors hover:border-white hover:bg-orange-400 hover:text-white'
                        onClick={() => setIsModalShow(true)}
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

    const handleAddRadio = () => {
        setRadios([...radios, { id: uuidv4() }])
    }
    return (
        <div className='flex flex-col gap-10'>
            <div className='flex justify-between'>
                <h3 className='text-2xl text-gray-54'>Quản lý máy chủ game</h3>
                <Button
                    className='border border-violet text-violet transition-colors hover:bg-violet hover:text-white'
                    leftIcon={<AiFillPlusCircle />}
                    onClick={handleAddRadio}
                >
                    Thêm máy chủ
                </Button>
            </div>
            <div className='flex justify-between'>
                <p>Hiện thị 20 kết quả trên tổng số 69</p>
                <Select name='view' className='w-64'>
                    <option>--- Hiện thị ---</option>
                </Select>
            </div>
            <Table header={header} data={data} />
            <Modal
                title='Sửa máy chủ'
                isOpen={isModalShow}
                onRequestClose={() => setIsModalShow(false)}
                className='w-[800px]'
            >
                <div className='grid gap-4 py-2'>
                    <div className='grid grid-cols-3 gap-8'>
                        <label
                            htmlFor='serverId'
                            className='my-auto text-gray-81'
                        >
                            Mã máy chủ:
                        </label>
                        <Input id='serverId' className='col-span-2 w-full' />
                    </div>
                    <div className='grid grid-cols-3 gap-8'>
                        <label
                            htmlFor='serverName'
                            className='my-auto text-gray-81'
                        >
                            Tên máy chủ:
                        </label>
                        <Input id='serverName' className='col-span-2 w-full' />
                    </div>
                    <div className='grid grid-cols-3 gap-8'>
                        <label
                            htmlFor='tiLeXuNap'
                            className='my-auto text-gray-81'
                        >
                            Tỉ lệ xu nạp:
                        </label>
                        <Input id='tiLeXuNap' className='col-span-2 w-full' />
                    </div>
                    <div className='grid grid-cols-3 gap-8'>
                        <label
                            htmlFor='tiLeXuRut'
                            className='my-auto text-gray-81'
                        >
                            Tỉ lệ xu rút:
                        </label>
                        <Input id='tiLeXuRut' className='col-span-2 w-full' />
                    </div>
                    <div className='grid grid-cols-3 gap-8'>
                        <label
                            htmlFor='tiLeXuNapMomo'
                            className='my-auto text-gray-81'
                        >
                            Tỉ lệ xu nạp Momo & ATM:
                        </label>
                        <Input
                            id='tiLeXuNapMomo'
                            className='col-span-2 w-full'
                        />
                    </div>
                </div>
                <div
                    className='flex justify-end gap-2 border-t border-gray-f6 py-1'
                    onClick={() => setIsModalShow(false)}
                >
                    <Button className='bg-red-400 px-8 text-white'>Đóng</Button>
                    <Button className='bg-violet px-8 text-white'>
                        Lưu thay đổi
                    </Button>
                </div>
            </Modal>
        </div>
    )
}

export default QuanLiMayChu

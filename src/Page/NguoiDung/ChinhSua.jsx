import clsx from 'clsx'
import React, { useState } from 'react'
import Button from '~/components/Button'
import Select from '~/components/Select'
import Table from '~/components/Table'
import server from '~/constants/server'

function ChinhSua() {
    const [serverSelected, setServerSelected] = useState('Bokken')
    return (
        <div className='flex flex-col gap-10'>
            <h3 className='text-2xl text-gray-54'>Tài khoản #1</h3>
            <div className='w-full'>
                <table className='w-full border-collapse border-white-f8'>
                    <tbody className='text-gray-58'>
                        <tr className='grid grid-cols-3'>
                            <td className='col-span-1 border-r border-l border-b border-t p-4'>
                                Người dùng:
                            </td>
                            <td className='col-span-2 border-r border-b border-t p-4'>
                                #1
                            </td>
                        </tr>
                        <tr className='grid grid-cols-3'>
                            <td className='col-span-1 border-r border-l border-b p-4'>
                                Họ tên:
                            </td>
                            <td className='col-span-2 border-r border-b p-4'>
                                Nguyễn Văn A
                            </td>
                        </tr>
                        <tr className='grid grid-cols-3'>
                            <td className='col-span-1 border-r border-l border-b p-4'>
                                Email:
                            </td>
                            <td className='col-span-2 border-r border-b p-3'></td>
                        </tr>
                        <tr className='grid grid-cols-3'>
                            <td className='col-span-1 border-r border-l border-b p-3'>
                                Số điện thoại:
                            </td>
                            <td className='col-span-2 border-r border-b p-3'></td>
                        </tr>
                        <tr className='grid grid-cols-3'>
                            <td className='col-span-1 border-r border-l border-b p-3'>
                                Số dư:
                            </td>
                            <td className='col-span-2 border-r border-b p-3'></td>
                        </tr>
                        <tr className='grid grid-cols-3'>
                            <td className='col-span-1 border-r border-l border-b p-3'>
                                Ngày tạo tài khoản:
                            </td>
                            <td className='col-span-2 border-r border-b p-4'></td>
                        </tr>
                        <tr className='grid grid-cols-3'>
                            <td className='col-span-1 border-r border-l border-b p-4'>
                                Chat cộng đồng:
                            </td>
                            <td className='col-span-2 border-r border-b p-2'>
                                <Select className='w-64'>
                                    <option>Mở</option>
                                    <option>Tắt</option>
                                </Select>
                            </td>
                        </tr>
                        <tr className='grid grid-cols-3'>
                            <td className='col-span-1 border-r border-l border-b p-4'>
                                Loại tài khoản:
                            </td>
                            <td className='col-span-2 border-r border-b p-2'>
                                <Select className='w-64'>
                                    <option>Công tác viên</option>
                                </Select>
                            </td>
                        </tr>
                        <tr className='grid grid-cols-3'>
                            <td className='col-span-1 border-r border-l border-b p-4'>
                                Khóa tài khoản:
                            </td>
                            <td className='col-span-2 border-r border-b p-2'>
                                <Select className='w-64'>
                                    <option>Mở</option>
                                    <option>Tắt</option>
                                </Select>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Button className='mt-4 border border-green-400 text-green-400 transition-colors hover:bg-green-400 hover:text-white'>
                    Lưu thay đổi
                </Button>
                <div className='mt-6 grid grid-cols-8'>
                    {server.map(item => (
                        <Button
                            key={item}
                            className={clsx(
                                'col-span-1 py-1 transition-colors',
                                {
                                    'bg-violet text-white':
                                        item === serverSelected
                                }
                            )}
                            onClick={() => setServerSelected(item)}
                        >
                            {item}
                        </Button>
                    ))}
                    <Table
                        className='col-span-8 mt-8 border-t-white-f8'
                        header={[
                            '#',
                            'Loại',
                            'SD thay đổi',
                            'Trước',
                            'Sau',
                            'Ghi chú',
                            'Thời gian'
                        ]}
                        data={[]}
                    />
                </div>
            </div>
        </div>
    )
}

export default ChinhSua

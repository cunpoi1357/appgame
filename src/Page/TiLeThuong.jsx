import { useState } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs'
import { v4 as uuidv4 } from 'uuid'

import Input from '~/components/Input'
import Button from '~/components/Button'

function TiLeThuong() {
    const [radios, setRadios] = useState([
        {
            id: uuidv4()
        }
    ])

    const handleAddRadio = () => {
        setRadios([...radios, { id: uuidv4() }])
    }

    const handleRemoveRadio = id => {
        setRadios(radios.filter(item => item.id !== id))
    }

    return (
        <div className='flex flex-col gap-10'>
            <div className='flex justify-between'>
                <h3 className='text-2xl text-gray-54'>Cấu hình tỉ lệ thưởng</h3>
                <Button
                    className='border border-violet text-violet transition-colors hover:bg-violet hover:text-white'
                    leftIcon={<AiFillPlusCircle />}
                    onClick={handleAddRadio}
                >
                    Thêm mức độ
                </Button>
            </div>
            <div>
                <div className='flex'>
                    <div className='flex flex-1 flex-col gap-8'>
                        {radios.map(item => (
                            <div
                                key={item.id}
                                className='flex items-center justify-between gap-10'
                            >
                                <label htmlFor='input1' className='block'>
                                    Mức đặt:
                                </label>
                                <Input
                                    type='text'
                                    name='input1'
                                    id='input1'
                                    className='w-[300px]'
                                />
                                <div className='inline-block'>
                                    <label htmlFor='input2'>Tỉ lệ:</label>
                                    <Input
                                        type='text'
                                        name='input2'
                                        id='input2'
                                        className='ml-8 w-[300px]'
                                    />
                                </div>
                                <Button className='bg-red-400 text-white'>
                                    <BsFillTrashFill
                                        className='h-3'
                                        onClick={() =>
                                            handleRemoveRadio(item.id)
                                        }
                                    />
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='-m-4 rounded-b-lg bg-white-f8 p-4'>
                <Button className='border border-green-400 text-green-400 transition-colors hover:bg-green-400 hover:text-white'>
                    Lưu thay đổi
                </Button>
            </div>
        </div>
    )
}

export default TiLeThuong

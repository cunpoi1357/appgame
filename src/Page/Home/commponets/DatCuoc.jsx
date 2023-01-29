import clsx from 'clsx'
import { useState } from 'react'

import BangChanLe from './BangChanLe'

function DatCuoc() {
    const data = ['Bokken', 'Shuriken', 'Kunai', 'Katana', 'Sensha', 'Xổ số']
    const [select, setSelect] = useState('Bokken')
    return (
        <div className='flex flex-col'>
            <div className='inline-flex justify-center'>
                <div className='flex gap-[-2px] overflow-hidden rounded'>
                    {data.map(item => (
                        <button
                            key={item}
                            className={clsx(
                                'inline-block border border-gray-cc bg-white px-4 py-2 outline-none transition-colors first:rounded-l last:rounded-r',
                                {
                                    'bg-orange-e2 text-white hover:bg-brown-ad':
                                        select === item,
                                    'text-gray-58 hover:bg-gray-eb':
                                        select !== item
                                }
                            )}
                            onClick={() => setSelect(item)}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>
            <div className='mt-3 grid grid-cols-2 gap-8'>
                <div className='col-span-1'>
                    <BangChanLe />
                </div>
                <div className='col-span-1 overflow-hidden rounded border border-brown-6b'>
                    <div className='grid grid-cols-2 bg-brown-ad py-2 text-sm text-white'>
                        <div className='col-span-1 text-center'>
                            <span className='uppercase'>Chẵn lẻ web</span>
                        </div>
                        <div className='col-span-1 text-center'>
                            <span>Số dư: 0 xèng</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DatCuoc

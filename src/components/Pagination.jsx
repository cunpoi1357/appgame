import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

function Pagination({ onChange }) {
    const [page, setPage] = useState(1)
    const [list, setList] = useState([])
    const totalPages = 100

    useEffect(() => {
        if (totalPages <= 13) setList(Array(totalPages).fill(null))
        if (page < 8)
            setList([
                ...Array.apply(null, Array(10)).map((_, index) => index + 1),
                '...',
                totalPages
            ])
        if (page >= 8)
            setList([
                1,
                2,
                '...',
                ...Array.apply(null, Array(7)).map(
                    (_, index) => index + page - 3
                ),
                '...',
                totalPages - 1,
                totalPages
            ])
        if (totalPages - page < 7)
            setList([
                1,
                2,
                '...',
                ...Array.apply(null, Array(8)).map(
                    (_, index) => index + totalPages - 7
                )
            ])
        onChange && onChange(page)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])

    return (
        <ul className='inline-flex items-center rounded-full bg-white-f0'>
            <li
                className='inline p-3'
                onClick={() => setPage(item => item - 1)}
            >
                <IoIosArrowBack className='inline cursor-pointer' />
            </li>
            {list.map((item, index) => (
                <li
                    key={index}
                    className={clsx(
                        'inline-block cursor-pointer rounded-full p-3 font-semibold  transition-colors',
                        {
                            'bg-violet text-white': item === page,
                            'text-gray-81 hover:text-violet': item !== page
                        }
                    )}
                    onClick={() => item !== '...' && setPage(item)}
                >
                    {item}
                </li>
            ))}
            <li
                className='inline p-3'
                onClick={() => setPage(item => item + 1)}
            >
                <IoIosArrowForward className='inline cursor-pointer' />
            </li>
        </ul>
    )
}

export default Pagination

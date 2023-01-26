import clsx from 'clsx'
import React from 'react'

function Table({ header, data, className }) {
    return (
        <div className={className}>
            <table className='w-full table-auto text-left'>
                <thead>
                    <tr className='text-gray-81'>
                        {header.map((item, index) => (
                            <th
                                key={index}
                                className={clsx({
                                    'pl-4': index === 0
                                })}
                            >
                                {item}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className='text-gray-aa'>
                    {data.map((row, index) => (
                        <tr
                            key={index}
                            className={clsx({ 'bg-gray-f4': index % 2 === 0 })}
                        >
                            {Object.values(row).map((col, index) => (
                                <td
                                    key={index}
                                    className={clsx(
                                        {
                                            'pl-4': index === 0
                                        },
                                        'py-4'
                                    )}
                                >
                                    {col}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            {data.length === 0 && (
                <p className='w-full bg-gray-f4 p-4 text-center text-sm text-gray-91'>
                    Không có kếT quả
                </p>
            )}
        </div>
    )
}

export default Table

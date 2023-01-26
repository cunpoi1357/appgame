import clsx from 'clsx'
import React from 'react'

function Input({ name, placeholder, type, className, ...props }) {
    return (
        <input
            className={clsx(
                'rounded border-2 border-gray-ec py-1 px-2 text-gray-8c',
                className
            )}
            placeholder={placeholder}
            type={type}
            name={name}
            {...props}
        />
    )
}

export default Input

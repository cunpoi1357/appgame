import clsx from 'clsx'
import React from 'react'

function Button({ leftIcon, rightIcon, className, children, ...props }) {
    return (
        <button
            className={clsx(
                'flex items-center gap-2 rounded-lg py-2 px-4 transition-colors hover:opacity-90',
                className
            )}
            {...props}
        >
            {leftIcon}
            <span className='flex-1'>{children}</span>
            {rightIcon}
        </button>
    )
}

export default Button

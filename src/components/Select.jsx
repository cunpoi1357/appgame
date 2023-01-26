import clsx from 'clsx'

function Select({ name, children, className }) {
    return (
        <select
            name={name}
            className={clsx(
                'rounded border-2 border-gray-ec py-1 px-2 text-gray-8c',
                className
            )}
        >
            {children}
        </select>
    )
}

export default Select

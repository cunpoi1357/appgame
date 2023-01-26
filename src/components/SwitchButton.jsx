import clsx from 'clsx'
import React, { useEffect, useState } from 'react'

function SwitchButton({ onChange }) {
    const [checked, setChecked] = useState(false)
    return (
        <label className='relative flex w-max cursor-pointer select-none items-center'>
            <input
                type='checkbox'
                className={clsx(
                    'h-7 w-14 cursor-pointer appearance-none rounded-full outline-none transition-colors focus:outline-none',
                    {
                        'bg-gray-e2': !checked,
                        'bg-violet': checked
                    }
                )}
                onChange={e => {
                    setChecked(e.target.checked)
                    onChange && onChange(e.target.checked)
                }}
                value={checked}
            />
            <span className='absolute right-1 text-xs font-medium uppercase text-white'>
                {' '}
                Tắt{' '}
            </span>
            <span className='absolute right-8 text-xs font-medium uppercase text-white'>
                {' '}
                Mở{' '}
            </span>
            <span
                className={clsx(
                    'absolute right-7 h-7 w-7 transform rounded-full bg-white transition-transform',
                    {
                        'translate-x-7': checked
                    }
                )}
            />
        </label>
    )
}

export default SwitchButton

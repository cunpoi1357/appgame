import clsx from 'clsx'
import React from 'react'
import { useState } from 'react'
import { AiOutlineDown, AiOutlineRight } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

import Button from '~/components/Button'

export function MenuItem({ data }) {
    if (data.path)
        return (
            <NavLink to={data.path} end>
                {({ isActive }) => (
                    <Button
                        leftIcon={data.icon}
                        className={clsx(
                            'w-full text-left text-xl transition-all hover:pl-7',
                            {
                                'text-gray-91': !isActive,
                                'bg-violet text-white': isActive
                            }
                        )}
                    >
                        {data.name}
                    </Button>
                )}
            </NavLink>
        )
    else
        return (
            <Button
                leftIcon={data.icon}
                className='w-full text-left text-xl text-gray-91 transition-all hover:pl-7'
            >
                {data.name}
            </Button>
        )
}

function MenuParent({ data }) {
    const [toggle, setToggle] = useState(false)

    return (
        <>
            <Button
                leftIcon={data.icon}
                className='w-full text-left text-xl text-gray-91 transition-all hover:pl-7'
                rightIcon={toggle ? <AiOutlineDown /> : <AiOutlineRight />}
                onClick={() => setToggle(!toggle)}
            >
                {data.name}
            </Button>
            {toggle &&
                data.children.map((child, index) => (
                    <MenuItem key={index} data={child} />
                ))}
        </>
    )
}

function Menu({ data }) {
    return (
        <>
            {data.map((item, index) =>
                item.children ? (
                    <MenuParent key={index} data={item} />
                ) : (
                    <MenuItem key={index} data={item} />
                )
            )}
        </>
    )
}

export default Menu

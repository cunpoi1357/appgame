import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

function Label({ className, children }) {
    return (
        <span
            className={clsx(
                'rounded py-[2px] px-[3px] text-xs font-semibold uppercase text-white',
                className
            )}
        >
            {children}
        </span>
    )
}

Label.prototype = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired
}

export default Label

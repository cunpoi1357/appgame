import React from 'react'
import server from '~/constants/server'
import Select from './Select'

function ServerSelect({ className }) {
    return (
        <Select name='server' className={className}>
            <option value=''>-- Chọn máy chủ --</option>
            {server.map(item => (
                <option key={item} value={item}>
                    {item}
                </option>
            ))}
        </Select>
    )
}

export default ServerSelect

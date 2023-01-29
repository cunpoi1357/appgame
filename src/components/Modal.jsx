import React from 'react'
import ReactModal from 'react-modal'
import { GrClose } from 'react-icons/gr'
import clsx from 'clsx'

function Modal({ isOpen, onRequestClose, title, className, children }) {
    if (!isOpen) return null
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            appElement={document.getElementById('root')}
            shouldCloseOnOverlayClick
            className='block rounded-lg bg-white p-4 outline-none'
            overlayClassName='fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-30'
        >
            <div className={clsx('relative', className)}>
                <h2 className='-m-4 mb-0 rounded-t-lg bg-white-f8 p-4 text-xl'>
                    {title}
                </h2>
                <button
                    className='text-green absolute -top-2 -right-6 rounded bg-white p-1 transition-all hover:scale-105 hover:text-gray-50'
                    onClick={onRequestClose}
                >
                    <GrClose />
                </button>
                {children}
            </div>
        </ReactModal>
    )
}

export default Modal

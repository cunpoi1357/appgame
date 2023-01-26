import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import Button from '~/components/Button'
import Input from '~/components/Input'

function CauHinhWebsite() {
    const [notification, setNotification] = useState('')
    const [modal, setModal] = useState('')
    const [tutorial, setTutorial] = useState('')
    const [top, setTop] = useState('')
    const [momo, setMomo] = useState('')
    const [atm, setATM] = useState('')
    const [boardCast, setBoardCast] = useState('')

    const toolbar = [
        [{ font: [] }], // custom dropdown
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike'], // toggled buttons
        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
        [{ header: 1 }, { header: 2 }], // custom button values
        ['blockquote', 'code-block'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ indent: '-1' }, { indent: '+1' }], // outdent/indent

        [{ direction: 'rtl' }], // text direction

        [{ align: [] }],

        ['clean'], // remove formatting button,
        ['link', 'image', 'video']
    ]

    return (
        <div className='flex flex-col gap-10'>
            <h1 className='text-2xl text-gray-54'>Cấu hình Website</h1>
            <div className='mb-10 flex flex-col gap-8'>
                <div className='mb-10'>
                    <h3 className='text-gray-54'>Thông báo trang chủ</h3>
                    <ReactQuill
                        theme='snow'
                        value={notification}
                        onChange={setNotification}
                        className='h-[300px]'
                        modules={{
                            toolbar: toolbar
                        }}
                    />
                </div>
                <div className='mb-10'>
                    <h3 className='text-gray-54'>Modal thông báo</h3>
                    <ReactQuill
                        theme='snow'
                        value={modal}
                        onChange={setModal}
                        className='h-[300px]'
                        modules={{
                            toolbar: toolbar
                        }}
                    />
                </div>
                <div className='mb-10'>
                    <h3 className='text-gray-54'>Hướng dẫn chơi</h3>
                    <ReactQuill
                        theme='snow'
                        value={tutorial}
                        onChange={setTutorial}
                        className='h-[300px]'
                        modules={{
                            toolbar: toolbar
                        }}
                    />
                </div>
                <div className='mb-10'>
                    <h3 className='text-gray-54'>Phần thưởng top</h3>
                    <ReactQuill
                        theme='snow'
                        value={top}
                        onChange={setTop}
                        className='h-[300px]'
                        modules={{
                            toolbar: toolbar
                        }}
                    />
                </div>
                <div>
                    <h3 className='text-gray-54'>Mô tả Website</h3>
                    <Input className='w-full' />
                </div>
                <div>
                    <h3 className='text-gray-54'>Mô tả Website</h3>
                    <Input className='w-full' />
                </div>
                <div className='mb-10'>
                    <h3 className='text-gray-54'>Hướng dẫn nạp Momo</h3>
                    <ReactQuill
                        theme='snow'
                        value={momo}
                        onChange={setMomo}
                        className='h-[300px]'
                        modules={{
                            toolbar: toolbar
                        }}
                    />
                </div>
                <div className='mb-10'>
                    <h3 className='text-gray-54'>Hướng dẫn nạp ATM</h3>
                    <ReactQuill
                        theme='snow'
                        value={atm}
                        onChange={setATM}
                        className='h-[300px]'
                        modules={{
                            toolbar: toolbar
                        }}
                    />
                </div>
                <div>
                    <h3 className='text-gray-54'>Server link</h3>
                    <Input className='w-full' />
                </div>
                <div className='mb-10'>
                    <h3 className='text-gray-54'>Thông báo từ trang chủ</h3>
                    <ReactQuill
                        theme='snow'
                        value={boardCast}
                        onChange={setBoardCast}
                        className='h-[300px]'
                        modules={{
                            toolbar: toolbar
                        }}
                    />
                </div>
            </div>
            <div className='-m-4 rounded-b-lg bg-white-f8 p-4'>
                <Button className='border border-green-400 text-green-400 transition-colors hover:bg-green-400 hover:text-white'>
                    Lưu thay đổi
                </Button>
            </div>
        </div>
    )
}

export default CauHinhWebsite

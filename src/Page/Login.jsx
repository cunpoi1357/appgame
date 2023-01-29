import React from 'react'
import { FaFacebookF, FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Button from '~/components/Button'
import Input from '~/components/Input'

function Login() {
    return (
        <div className='mx-auto flex max-w-screen-md flex-col justify-center rounded-lg bg-white py-8 px-10'>
            <h2 className='border-b border-white-f8 pb-4 text-center text-2xl font-semibold text-blue-500'>
                Đăng nhập người dùng
            </h2>
            <div className='mt-10 flex justify-center gap-2'>
                <button className='flex items-center rounded bg-blue-3b p-2 text-white'>
                    <FaFacebookF className='mr-2 h-6 w-6' /> Đăng nhập với
                    Facebook
                </button>
                <button className='flex items-center rounded bg-red-600 p-2 text-white'>
                    <FaGoogle className='mr-2 h-6 w-6' />
                    Đăng nhập với Google
                </button>
            </div>

            <p className='p-8 text-center'>hoặc sử dụng tài khoản</p>
            <form className='flex flex-col items-center gap-4'>
                <Input
                    placeholder='Tên tài khoản'
                    className='w-full'
                    required
                />
                <Input placeholder='Mật khẩu' className='w-full' required />
                <div className=' text-center'>
                    <input
                        type='checkbox'
                        id='remember'
                        className='mr-2 cursor-pointer'
                    />
                    <label htmlFor='remember' className='cursor-pointer'>
                        Ghi nhớ tài khoản
                    </label>
                </div>
                <Button className='bg-cyan-400 text-white'>Đăng nhập</Button>
            </form>
            <p className='p-8 text-center'>--- hoặc ---</p>
            <div className='flex justify-center gap-1'>
                <Link to='/register'>
                    <Button className='bg-red-600 text-white'>
                        Tạo tài khoản
                    </Button>
                </Link>
                <Button className='bg-orange-400 text-white'>
                    Quên mật khẩu?
                </Button>
            </div>
        </div>
    )
}

export default Login

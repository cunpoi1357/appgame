import { BiLogIn } from 'react-icons/bi'
import { HiUserAdd } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import Button from '~/components/Button'

function Header() {
    return (
        <header className='h-[60px] bg-brown-6b'>
            <div className='mx-auto flex h-full max-w-screen-lg items-center justify-between'>
                <div>logo</div>
                <div className='flex'>
                    <Link to='/login'>
                        <Button className='text-white' leftIcon={<BiLogIn />}>
                            <span className='text-sm'>Đăng nhập</span>
                        </Button>
                    </Link>
                    <Link to='/register'>
                        <Button className='text-white' leftIcon={<HiUserAdd />}>
                            <span className='text-sm'>Đăng ký</span>
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header

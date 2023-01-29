import clsx from 'clsx'
import Label from '~/components/Label'

function Letter({ children, className }) {
    return (
        <span
            className={clsx(
                'inline-block h-5 w-5 rounded-full text-center text-sm font-semibold leading-5 text-white',
                className
            )}
        >
            {children}
        </span>
    )
}

function BangChanLe() {
    return (
        <div className='overflow-hidden rounded border border-brown-6b'>
            <h3 className='flex-auto bg-brown-ad py-2 text-center text-sm text-white'>
                Chẵn lẻ
            </h3>
            <div className='p-4'>
                <div className='grid grid-cols-3 border-b border-gray-cc py-1'>
                    <div className='col-span-1'>
                        <strong className='text-gray-54'>Mã phiên:</strong>
                    </div>
                    <div className='col-span-2 text-center'>
                        <span className='text-gray-54'>1233</span>
                    </div>
                </div>
                <div className='grid grid-cols-3 border-b border-gray-cc py-1'>
                    <div className='col-span-1'>
                        <strong className='text-gray-54'>Thời gian:</strong>
                    </div>
                    <div className='col-span-2 text-center'>
                        <span className='text-gray-54'></span>
                    </div>
                </div>
                <div className='grid grid-cols-3 border-b border-gray-cc py-1'>
                    <div className='col-span-1'>
                        <strong className='text-gray-54'>Số xu thắng:</strong>
                    </div>
                    <div className='col-span-2 text-center'>
                        <span className='text-gray-54'></span>
                    </div>
                </div>
                <div className='grid grid-cols-3 border-b border-gray-cc py-1'>
                    <div className='col-span-1'>
                        <strong className='text-gray-54'>
                            Số xu tham gia:
                        </strong>
                    </div>
                    <div className='col-span-2 text-center'>
                        <span className='text-gray-54'></span>
                    </div>
                </div>
                <div className='grid grid-cols-3 border-b border-gray-cc py-1'>
                    <div className='col-span-1'>
                        <strong className='text-gray-54'>Người chơi:</strong>
                    </div>
                    <div className='col-span-2 text-center'>
                        <span className='text-gray-54'></span>
                    </div>
                </div>
                <div className='grid grid-cols-3 border-b border-gray-cc py-1'>
                    <div className='col-span-1'>
                        <strong className='text-gray-54'>Số ngẫu nhiên:</strong>
                    </div>
                    <div className='col-span-2 text-center'>
                        <span className='text-gray-54'></span>
                    </div>
                </div>
                <div className='grid grid-cols-3 border-b border-gray-cc py-1'>
                    <div className='col-span-1'>
                        <strong className='text-gray-54'>Tổng:</strong>
                    </div>
                    <div className='col-span-2 text-center'>
                        <span className='text-gray-54'></span>
                    </div>
                </div>
                <div className='grid grid-cols-3 border-b border-gray-cc py-1'>
                    <div className='col-span-1'>
                        <strong className='text-gray-54'>Kết quả cộng:</strong>
                    </div>
                    <div className='col-span-2 text-center'>
                        <span className='text-gray-54'></span>
                    </div>
                </div>
                <div className='grid grid-cols-3 border-b border-gray-cc py-1'>
                    <div className='col-span-1'>
                        <strong className='text-gray-54'>Kết quả:</strong>
                    </div>
                    <div className='col-span-2 text-center'>
                        <div className='flex justify-center gap-3'>
                            <Label className='bg-cyan-500 px-[10px]'>Lẻ</Label>
                            <Label className='bg-red-500 px-[10px]'>Xỉu</Label>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-3 border-b border-gray-cc py-1'>
                    <div className='col-span-1'>
                        <strong className='text-gray-54'>CL:</strong>
                    </div>
                    <div className='col-span-2'>
                        <div className='flex gap-1'>
                            <Letter className='bg-cyan-400'>L</Letter>
                            <Letter className='bg-cyan-400'>L</Letter>
                            <Letter className='bg-orange-400'>G</Letter>
                            <Letter className='bg-cyan-400'>L</Letter>
                            <Letter className='bg-cyan-400'>L</Letter>
                            <Letter className='bg-orange-400'>G</Letter>
                            <Letter className='bg-orange-400'>G</Letter>
                            <Letter className='bg-orange-400'>G</Letter>
                            <Letter className='bg-orange-400'>G</Letter>
                            <Letter className='bg-orange-400'>G</Letter>
                            <Letter className='bg-cyan-400'>L</Letter>
                            <Letter className='bg-cyan-400'>L</Letter>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-3 pt-1'>
                    <div className='col-span-1'>
                        <strong className='text-gray-54'>TX:</strong>
                    </div>
                    <div className='col-span-2'>
                        <div className='flex gap-1'>
                            <Letter className='bg-red-400'>X</Letter>
                            <Letter className='bg-green-400'>T</Letter>
                            <Letter className='bg-green-400'>T</Letter>
                            <Letter className='bg-red-400'>X</Letter>
                            <Letter className='bg-green-400'>T</Letter>
                            <Letter className='bg-red-400'>X</Letter>
                            <Letter className='bg-red-400'>X</Letter>
                            <Letter className='bg-red-400'>X</Letter>
                            <Letter className='bg-red-400'>X</Letter>
                            <Letter className='bg-red-400'>X</Letter>
                            <Letter className='bg-red-400'>X</Letter>
                            <Letter className='bg-green-400'>T</Letter>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BangChanLe

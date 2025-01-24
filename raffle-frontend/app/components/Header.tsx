import React from 'react'
import NavButton from './NavButton'
import Image from 'next/image'
import { Bars3BottomRightIcon } from '@heroicons/react/16/solid'

function Header() {
    return (
        <header>
            <div className='grid grid-cols-2 md:grid-cols-5 justify-between items-center py-2 md:p-4 w-[90%] mx-auto'>
                <div className='flex space-x-2 items-center'>
                    <Image src='/vercel.svg'
                        alt='logo'
                        width={40}
                        height={40}
                        className='rounded-full'
                    />
                    <div>
                        <h1 className='text-white font-bold text-lg '>Raffle</h1>
                        <p className='text-emerald-500 text-xs truncate'>User:...</p>
                    </div>
                </div>

                <div className='space-x-4 hidden md:flex items-center justify-center col-span-3'>
                    {/* buttons */}
                    <NavButton title="Buy Ticket" isActive />
                    <NavButton title="Logout" />
                </div>

                <div className='flex flex-col items-end space-y-2'>
                    <Bars3BottomRightIcon className='text-white h-8 w-8 cursor-pointer' />

                    <div className='md:hidden flex items-end'>
                        <NavButton title="Logout" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
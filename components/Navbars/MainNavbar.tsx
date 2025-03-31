
import Link from 'next/link'
import React from 'react'
import Search from '../Search'

const MainNavbar = () => {
  return (
    <nav className='flex sticky top-0 w-full'>
          <div className='flex w-full'> 
                <Link href='/' className='text-5xl mr-20'>trendyol</Link>
                <Search/>
                <div className='flex items-center ml-20 justify-between w-full'>
                  <Link href='/' className='text-sm  font-medium'>Hesabım</Link>
                  <Link href='/' className='text-sm  font-medium'>Favorilerim</Link>
                  <Link href='/' className='text-sm  font-medium'>Sepetim</Link>
                </div>
          </div>
    </nav>
  )
}

export default MainNavbar;
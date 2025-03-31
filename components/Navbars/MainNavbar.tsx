
import Link from 'next/link'
import React from 'react'
import Search from '../Search'

const MainNavbar = () => {
  return (
    <nav className='sticky top-0'>
          <div className='flex h-full'> 
                <Link href='/' className='text-5xl mr-15 '>trendyol</Link>
                <Search/>
                <div className='flex items-center'>
                  <Link href='/' className='text-sm ml-15 font-medium'>Hesabım</Link>
                  <Link href='/' className='text-sm ml-15 font-medium'>Favorilerim</Link>
                  <Link href='/' className='text-sm ml-15 font-medium'>Sepetim</Link>
                </div>
          </div>
    </nav>
  )
}

export default MainNavbar;
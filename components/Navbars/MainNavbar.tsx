
import Link from 'next/link'
import React from 'react'
import Search from '../Search'
import { AiFillHeart } from "react-icons/ai";
import { TbShoppingCartFilled } from "react-icons/tb";
import { GoPersonFill } from "react-icons/go";





const MainNavbar = () => {
  
  return (
    <nav className='flex sticky top-0 w-full'>
          <div className='flex w-full'>
                <Link href='/' className='text-5xl mr-20'>trendyol</Link>
                <Search/>
                <div className='flex items-center ml-20 justify-between w-full'>
                  <div className='flex group items-center hover:cursor-pointer'>
                    <GoPersonFill style={{strokeWidth: "1.5"}} className='text-xl group-hover:text-orange-400 group-hover:stroke-orange-400 mr-1 text-white stroke-black'/>
                    <Link href='/' className='group-hover:text-orange-400 text-sm font-medium'>Hesabım</Link>

                  </div>

                  <div className='flex group items-center hover:cursor-pointer'>
                    <AiFillHeart style={{strokeWidth: "60"}} className='text-xl group-hover:text-orange-400 group-hover:stroke-orange-400 mr-1 text-white stroke-black'/>
                    <Link href='/' className='group-hover:text-orange-400 text-sm font-medium'>Favorilerim</Link>
                  </div>
                  <div className='flex group items-center hover:cursor-pointer'>
                    <TbShoppingCartFilled style={{strokeWidth: "1.3"}} className='text-xl group-hover:text-orange-400 group-hover:stroke-orange-400 mr-1 text-white stroke-black'/>
                    <Link href='/' className='text-sm  font-medium group-hover:text-orange-400'>Sepetim</Link>
                  </div>
                </div>
          </div>
    </nav>
  )
}

export default MainNavbar;
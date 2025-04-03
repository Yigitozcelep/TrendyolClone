"use client"

import Link from 'next/link'
import React, { forwardRef, useEffect, useRef, useState } from 'react'
import Search from '../Search'
import { AiFillHeart } from "react-icons/ai";
import { TbShoppingCartFilled } from "react-icons/tb";
import { GoPersonFill } from "react-icons/go";
import { isUserLoggedIn } from '@/app/utils/auth';


const AccountOptionsBar = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div ref={ref} className='absolute w-45 pt-5 left-212 top-8 cursor-pointer bg-white'>
        <div className='relative border-1 border-gray-300 p-5 rounded-md '>
        <div className='w-0 border-transparent left-27 border-b-gray-300  h-0 absolute bottom-[100%] border-12'/>
        <div className='w-0 border-transparent left-27.5 border-b-white  h-0 absolute bottom-[100%] border-10'/>

        {isUserLoggedIn()
          ? 
          (<div>xx</div>)  

          : (<>
          <Link href={"/LogIn"} className='flex items-center justify-center cursor-pointer text-md font-bold text-center bg-orange-400 w-full rounded-md h-9 text-white'>Giriş Yap</Link>
          <Link href={"/SignIn"} className='flex items-center justify-center cursor-pointer text-center w-full outline-1 rounded-md mt-3 h-9'>Üye ol</Link>
            </>)
      }
      </div>
    </div>
  )
})

const Account = () => {
    const [isMounOn, setMouseOn] = useState(false);
    const accountDiv        = useRef<HTMLDivElement>(null);
    const accountOptionsDiv = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
      document.addEventListener("mousemove", (e) => {
        if (!accountDiv.current?.contains(e.target as Node) && !accountOptionsDiv.current?.contains(e.target as Node)) {
            setMouseOn(false);
        }
    })
    },)
    return (
      <>
        <div ref={accountDiv} className='flex group items-center hover:cursor-pointer' onMouseEnter={() => setMouseOn(true)}>
          <GoPersonFill style={{strokeWidth: "1.5"}} className='text-xl group-hover:text-orange-400 group-hover:stroke-orange-400 mr-1 text-white stroke-black'/>
          <Link href={isUserLoggedIn() ? "/Account" : "/Login"} className='group-hover:text-orange-400 text-sm font-medium'>{isUserLoggedIn() ? "Hesabım" : "Giriş Yap"}</Link>
      </div>
      {isMounOn && <AccountOptionsBar ref={accountOptionsDiv}/> }
      </>
    )
}



const MainNavbar = () => {
  return (
    <nav className='flex sticky top-0 w-full'>
          <div className='flex w-full'>
                <Link href='/' className='text-5xl mr-20'>trendyol</Link>
                <Search/>
                <div className='flex items-center ml-20 justify-between w-full'>
                  <Account/>
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
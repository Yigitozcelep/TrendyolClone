"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import React from 'react'
import AllCategoriesbutton from '../AllCategoriesbutton'
import Link from 'next/link'
import { usePathname } from "next/navigation";
import { IoFlash } from "react-icons/io5";
import { PiMedalFill } from "react-icons/pi";


type Props = {}

const CategoriesNavBar = (props: Props) => {
    const navLinks = [
        {"link": "/Kadin", "value": "Kadın"},
        {"link": "/Erkek", "value": "Erkek"},
        {"link": "/AnneCocuk", "value": "Anne & Çocuk"},
        {"link": "/EvYasam", "value": "Ev & Yaşam"},
        {"link": "/SuperMarket", "value": "Süpermarket"},
        {"link": "/Kozmetik", "value": "Kozmetik"},
        {"link": "/AyakkabiCanta", "value": "Ayakkabı & Çanta"},
        {"link": "/Elektronik", "value": "Elektronik"},
    ];
    const pathname = usePathname();
    return (
        <div className='pt-6 font-medium h-14'>
            <div className='flex w-full h-full'>
                <AllCategoriesbutton/>
                <div className='flex w-full'>
                    <div>

                    </div>
                    {navLinks.map((e, index) => (
                        (pathname === e.link) 
                        ? <Link key={index} href={e.link} className='flex justify-center grow-1 text-sm text-orange-400 border-b-3 border-orange-400'>{e.value}</Link>
                        : <Link key={index} href={e.link} className='hover:text-orange-400 flex justify-center grow-1 text-sm'>{e.value}</Link>
                    ))}
                    
                    <Link href={"/CokSatanlar"} className={`group flex grow-1 ${pathname === "/CokSatanlar" ? "border-b-3 border-orange-400" : ""} justify-center`}>
                        <PiMedalFill style={{strokeWidth: "5"}} className='text-xl mr-1 text-orange-400 stroke-orange-400'/>
                        <p className='group-hover:text-orange-400 flex justify-center text-sm'>Cok Satanlar</p>
                    </Link>

                    <Link href={"/FlashUrunler"} className={`group flex grow-1 ${pathname === "/FlashUrunler" ? "border-b-3 border-red-400" : ""} justify-center`}>
                        <IoFlash style={{strokeWidth: "10"}} className='text-xl mr-1 text-red-400 stroke-red-400'/>
                        <p  className='group-hover:text-red-400 flex justify-center text-sm'>Flash Urunler</p>
                    </Link>
               
                </div>
            </div>
        </div>
    )
}

export default CategoriesNavBar
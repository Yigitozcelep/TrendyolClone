"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import React from 'react'
import AllCategoriesbutton from '../AllCategoriesbutton'
import Link from 'next/link'
import { usePathname } from "next/navigation";

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
        {"link": "/CokSatanlar", "value": "Çok satanlar"},
        {"link": "/FlashUrunler", "value": "Flaş ürünler"},
    ];
    const pathname = usePathname();
    return (
        <div className='pt-6 font-medium h-14'>
            <div className='flex w-full h-full'>
                <AllCategoriesbutton/>
                <div className='flex w-full'>
                    {navLinks.map((e, index) => (
                        (pathname === e.link) 
                        ? <Link key={index} href={e.link} className='flex justify-center grow-1 text-sm text-orange-400 border-b-3 border-orange-400'>{e.value}</Link>
                        : <Link key={index} href={e.link} className='hover:text-orange-400 flex justify-center grow-1 text-sm'>{e.value}</Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CategoriesNavBar
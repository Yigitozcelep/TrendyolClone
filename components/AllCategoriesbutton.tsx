import React, { useState } from 'react'
import { GiHamburgerMenu, GiLips } from "react-icons/gi";

import { IoWomanOutline, IoManOutline } from "react-icons/io5";
import { FaBabyCarriage } from "react-icons/fa6";
import { RiArmchairLine } from "react-icons/ri";
import { SlHandbag } from "react-icons/sl";
import { GiLipstick } from "react-icons/gi";
import { IoBagHandleSharp } from "react-icons/io5";
import { FaTv } from "react-icons/fa";
import { GiRunningShoe } from "react-icons/gi";
import { TfiRulerPencil } from "react-icons/tfi";
import { IoIosArrowForward } from "react-icons/io";


type Props = {}

const AllCategoriesbutton = (props: Props) => {
    const [isClicked, setClicked] = useState(false);
    const categoryItems = [
        {"name": "Kadın", "icon": IoWomanOutline},
        {"name": "Erkek", "icon": IoManOutline},
        {"name": "Anne & Çocuk", "icon": FaBabyCarriage},
        {"name": "Ev & Mobilya", "icon": RiArmchairLine},
        {"name": "Süpermarket", "icon": SlHandbag},
        {"name": "Kozmetik", "icon": GiLipstick},
        {"name": "Ayakkabı Çanta", "icon": IoBagHandleSharp},
        {"name": "Elektronik", "icon": FaTv},
        {"name": "Spor & Outdoor", "icon": GiRunningShoe},
        {"name": "Kitap & Kırtasiye & Hobi", "icon": TfiRulerPencil},
    ]
    return (
            <div className='group w-70'>
                <div className='flex hover:cursor-pointer inline-flex' onClick={() => setClicked(true)}>
                    <GiHamburgerMenu className='text-2xl'/>
                    <p className='ml-2 font-medium'>Tüm Kategoriler</p>
                </div>
             
             {
                isClicked && (
                    <>
                        <div className='absolute w-full h-full left-0 bg-black opacity-10'/>

                        <div className='flex absolute  top-35 h-150'> 
                            <div className='flex flex-col h-full bg-gray-300 pb-5'>
                            {categoryItems.map((e,index) => (
                                <div className='grow-1 w-45 flex items-center hover:bg-white hover:cursor-pointer justify-between'>
                                    <div className='flex'>
                                        <e.icon className="ml-2 mr-2 text-lg" /> 
                                        <div key={index} className=''>{e.name}</div>
                                    </div>
                                    <IoIosArrowForward className='justify-self-end'/>
                                </div>
                            ))}
                            </div>
                            <div className='bg-white'>
                                bm
                            </div>
                            
                        </div>
                    </>
                )
                
             }

            </div>
    )
}

export default AllCategoriesbutton
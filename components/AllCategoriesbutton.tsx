import React, { forwardRef, useEffect, useRef, useState } from 'react'
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
import { IconType } from 'react-icons';
import Link from 'next/link';
import categoryResults from "../app/data/data.js";

type Props = {}

const Categories = ({ name, MyIcon, onClickAction, isChosenCategory }: { name: string; MyIcon: IconType, onClickAction: () => void, isChosenCategory: Boolean}) =>  {
    return (
        <div onMouseEnter={() => onClickAction()} className={`group grow-1 w-45 flex items-center bg-[rgb(245,245,245)] hover:cursor-pointer justify-between ${isChosenCategory ? "bg-white" : ""}`}>
            <div className='flex items-center'>
                <MyIcon  className={`${isChosenCategory ? "text-orange-400" : ""} ml-2 mr-2 text-lg`} /> 
                <div className={`${isChosenCategory ? "text-orange-400" : ""}`}>{name}</div>
            </div>
            <IoIosArrowForward className='justify-self-end'/>
        </div>
    )
}


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


interface HamburgerMenuDivProps { onClickAction: () => void; }

const HamburgerMenuDiv = forwardRef<HTMLDivElement, HamburgerMenuDivProps>( ({ onClickAction }, ref) => {
    return (
        <div ref={ref} className='h-full flex hover:cursor-pointer' onClick={onClickAction} >
            <GiHamburgerMenu className='text-2xl'/>
            <p className='ml-2 font-medium'>Tüm Kategoriler</p>
        </div>
      );
    }
);

const GrayBackGround = () => { return (<div className='absolute w-full min-w-[1240] h-full left-0 bg-[rgb(34,34,34)] opacity-30'/>) }

const CategoryResultLink = (data: {link: string, name: string, myType: string}) => {
    return ( 
        (<div className='group flex items-center mt-1'>
            <Link href={data.link} className={`pl-4 text-[14px] font-[Source_Sans_Pro,sans-serif] font-[400] group-hover:text-orange-400 group-hover:underline ${
                data.myType === "Category" ? 'text-orange-400 font-bold' : ''
            }`}>
                {data.name}
            </Link>
            {data.myType === "Category" && <IoIosArrowForward className='ml-2 text-orange-400'/> }
        </div>)
    )
}

const AllCategoriesbutton = () => {
    const [isClicked, setClicked]               = useState(false);
    const [clickedCategory, setClickedCategory] = useState(0);
    const mainContainer = useRef<HTMLDivElement>(null);
    const hamburgerMenu = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.addEventListener("mousemove", (e) => {
            if (!mainContainer.current?.contains(e.target as Node) && !hamburgerMenu.current?.contains(e.target as Node)) {
                setClicked(false);
            }
        })
    }, [])

    return (
            <div className='w-70'>
                <HamburgerMenuDiv ref={hamburgerMenu} onClickAction={() => {setClicked(true)}}/>
             {
                isClicked && (
                    <>
                        <GrayBackGround/>
                        <div  ref={mainContainer} className='flex absolute top-35 h-155 z-10 bg-[rgb(245,245,245)] hover:cursor-pointer rounded-b-md'> 
                            <div className='flex flex-col h-full pb-5'>
                            {categoryItems.map((e,index) => (
                                <Categories isChosenCategory={index == clickedCategory} onClickAction={() => setClickedCategory(index)} key={index} name={e.name} MyIcon={e.icon} />
                            ))}
                            </div>
                            <div className='bg-white flex w-[1060] rounded-br-md'>
                                {categoryResults[clickedCategory].map((part, index) => 
                                    <div className='flex flex-col w-1/6 mt-2' key={index}>
                                        {part.map(data => 
                                            <CategoryResultLink link={data.link} name={data.name} myType={data.type}  />
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </>
                )
             }
            </div>
    )
}
export default AllCategoriesbutton
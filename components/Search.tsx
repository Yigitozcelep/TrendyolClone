'use client'

import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { useState } from "react";
import categoryResults from '@/app/data/data';
import { GoSearch } from "react-icons/go";
import { FaFireAlt } from "react-icons/fa";

interface SearchItem {
    component: React.ReactNode;
    name: string;
}

type PreviousSearch = {
    name: string;
    link: string;
};

const searchItems: SearchItem[] = [ ];


const EmptySearch = () => {
    return (
        <div>
            <div>
                Geçmiş Aramalar
            </div>

            <div>
                Popüler Aramalar
            </div>
        </div>
    )
}

const data = categoryResults.flat(5);
const previousSearchKey = "previousSearchesKey"

const getLocalPreviousSearches = (): PreviousSearch[] => {
    const item = localStorage.getItem(previousSearchKey);
    return item ? JSON.parse(item) : [];
}

const deleteSearchResults = () => { localStorage.setItem(previousSearchKey, "[]"); }

const PreviousSearches = () => {
    const [searchResults, setSearchResults] = useState<PreviousSearch[]>([]);
    useEffect(() => {
        const previousSearches = getLocalPreviousSearches();
        setSearchResults(previousSearches);
    }, [])
    return (
        searchResults.length > 0 && 
        <>
        <div className='flex justify-between items-center'>
            <div className='font-medium p-2 pl-6  text-lg'>
                Geçmiş Aramalar
            </div>
            <button onClick={() => {setSearchResults([]); deleteSearchResults()}} className='mr-4 hover:cursor-pointer hover:bg-gray-100 rounded-md text-sm h-5 p-2 flex items-center'>
                Temizle
            </button>
        </div>
        {(searchResults.map((el, index) => (
            <Link key={index} className='block p-2 pl-6 border-b-[1] border-gray-100 hover:bg-gray-200 text-sm font-medium' href={el.link}>
                {el.name}
            </Link>
        )))}
        </>
    )
}

const PopulerSearches = () => {
    const data = [
        {"name": "pantalon", "link": "/pantalon", "icon": true},
        {"name": "takım elbise", "link": "/takimElbise", "icon": true},
        {"name": "blazer ceket", "link": "/blazerCeketer", "icon": false},
        {"name": "makyaj çantası", "link": "/makyajCantasi", "icon": false},
        {"name": "fon perde", "link": "/fonPerde", "icon": false},
        {"name": "akıllı çocuk saati", "link": "/akilliCocukSaati", "icon": false},
        {"name": "fon oysho", "link": "/oysho", "icon": false},
        {"name": "çocuk bisikleti", "link": "/cocukBisikleti", "icon": false},
        {"name": "marjin", "link": "/marjin", "icon": false},
        {"name": "kedi maması", "link": "/kediMamasi", "icon": false},
    ]
    return (
        <>
            <div className='font-medium p-2 pl-6  text-lg'>
                Popüler Aramalar
            </div>
            <div className='flex flex-wrap pb-3 pl-3 pr-3 gap-3'>
                {data.map((e, index) => (
                    <Link className={`flex items-center p-2 text-sm rounded-md ${e.icon ? "bg-orange-200 hover:outline-2 hover:outline-orange-300" : "border-1 hover:text-orange-500"} hover:border-orange-500`} href={e.link}>
                        {e.icon && <FaFireAlt className='mr-1 text-orange-500'/>}
                        {e.name}
                    </Link>
                ))}
            </div>
        </>
    )
}


const textOfSearchLink = (name: string, value: string) => {
    const data = name.toLowerCase().replace(value.toLowerCase(), "\0").split("");
    let count = -1;
    return (
        <>
            {data.map((el, index) => {
                count++;
                if (el == "\0") {
                    count += value.length;
                    return <strong key={index}>{name.slice(count - value.length, count)}</strong>
                }
                else {
                    return el
                }
            }
        )}
        </>
    )
}

const saveSearch = (name: string, link: string) => {
    const data = getLocalPreviousSearches()
    if (!data.map(el => el.name).includes(name)) data.push({name: name, link: link})
    localStorage.setItem(previousSearchKey, JSON.stringify(data));
}

const Search = () => {
    const [value, setValue] = useState('')
    const searchDiv        = useRef<HTMLInputElement>(null);
    const searchResultsDiv = useRef<HTMLInputElement>(null);

    useEffect(() => {
        document.addEventListener("mousedown", (e) => {
            if (!searchResultsDiv.current || !searchDiv.current) return;
            if (searchDiv.current.contains(e.target as Node) || searchResultsDiv.current.contains(e.target as Node)) {
                searchResultsDiv.current!.style.display = "block";
            }
            else {
                searchResultsDiv.current!.style.display = "none";
            }
        });
    }, [])
    const searchResults = data.filter((e) => e.name.toLowerCase().includes(value.toLowerCase()));

    return (
        <div ref={searchDiv} className='flex shrink-0 outline-0 focus-within:outline-2 rounded-t-sm focus-within:outline-orange-400 h-full z-10 items-center w-[600]'>
            <div className='w-full h-full bg-gray-200 focus-within:bg-white flex items-center rounded-md'>
                <input className='outline-0 h-full w-full pl-5'  placeholder='Aradığınız ürün, kategori veya markayı yazınız' onChange={(e) => setValue(e.target.value)}/>
                <GoSearch className='mr-2 text-2xl text-orange-400 stroke-1'/>

                <div ref={searchResultsDiv} className='hidden absolute top-11 pt-3 pb-3 left-[245px] outline-orange-400 bg-white outline-2 rounded-bl-sm rounded-br-sm z-2 w-[600]'>
                    {(value.length <= 2 || searchResults.length == 0) && <> <PreviousSearches/> <PopulerSearches/> </> }           
                    {value && (value.length > 2) && searchResults.map((e, index) => (
                        <Link className='block p-2 pl-6 hover:bg-gray-200 text-sm font-medium  border-b-[1] border-gray-100' href={e.link} key={index} onClick={() => saveSearch(e.name, e.link)}>
                            {textOfSearchLink(e.name, value)}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
        
    )
}


export default Search;
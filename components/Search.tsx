'use client'

import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { useState } from "react";
import categoryResults from '@/app/data/data';
import { GoSearch } from "react-icons/go";

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
const previousSearchKey = "previousSearches"

const getLocalPreviousSearches = (): PreviousSearch[] => {
    const item = localStorage.getItem(previousSearchKey);
    return item ? JSON.parse(item) : [];
}

const PreviousSearches = () => {
    const [searchResults, setSearchResults] = useState<PreviousSearch[]>([]);
    useEffect(() => {
        const previousSearches = getLocalPreviousSearches();
        setSearchResults(previousSearches);
    }, [])
    return (
        searchResults.length > 0 && (searchResults.map((el, index) => (
            <Link key={index} className='block p-2 hover:bg-gray-200 text-sm font-medium' href={el.link}>
                {el.name}
            </Link>
        )))
    )
}

const PopulerSearches = () => {
    return (
        true && <div></div>
    )
}

const textOfSearchLink = (name: string, value: string) => {
    const data = name.toLowerCase().replace(value.toLowerCase(), "~").split("");
    return (
        <>
            {data.map((el, index) => (
                el == "~"
                ? <strong key={index}>{value}</strong>
                : el
            ))}
        </>
    )
}

const saveSearch = (name: string, link: string) => {
    const data = getLocalPreviousSearches()
    data.push({name: name, link: link});
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
    
    return (
        <div ref={searchDiv} className='flex shrink-0 outline-0 focus-within:outline-2 rounded-t-sm focus-within:outline-orange-400 h-full z-10 items-center w-[600]'>
            <div className='w-full h-full bg-gray-200 focus-within:bg-white flex items-center rounded-md'>
                <input className='outline-0 h-full w-full pl-5'  placeholder='Aradığınız ürün, kategori veya markayı yazınız' onChange={(e) => setValue(e.target.value)}/>
                <GoSearch className='mr-2 text-2xl text-orange-400 stroke-1'/>

                <div ref={searchResultsDiv} className='hidden p-3 absolute top-11 left-[245px] outline-orange-400 bg-white outline-2 rounded-bl-sm rounded-br-sm z-2 w-[600]'>
                    {value.length <= 2 && <> <PreviousSearches/> <PopulerSearches/> </> }           
                    {value && (value.length > 2) && data.filter((e) => e.name.toLowerCase().includes(value.toLowerCase())).map((e, index) => (
                        <Link className='block p-2 hover:bg-gray-200 text-sm font-medium' href={e.link} key={index} onClick={() => saveSearch(e.name, e.link)}>
                            {textOfSearchLink(e.name, value)}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
        
    )
}


export default Search;
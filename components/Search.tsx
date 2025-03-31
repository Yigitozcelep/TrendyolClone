'use client'
import { Command, CommandEmpty, CommandInput, CommandList, CommandItem } from './ui/command'

import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { useState } from "react";

interface SearchItem {
    component: React.ReactNode;
    name: string;
}

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


const Search = () => {
    const [value, setValue] = useState('')
    const searchDiv        = useRef<HTMLInputElement>(null);
    const searchResultsDiv = useRef<HTMLInputElement>(null);

    useEffect(() => {
        document.addEventListener("mousedown", (e) => {
            if (!searchDiv.current?.contains(e.target as Node) && !searchResultsDiv.current?.contains(e.target as Node)) {
                searchResultsDiv.current!.style.visibility = "hidden";
            } else searchResultsDiv.current!.style.visibility = "visible";
        });
    }, [])

    return (
        <div ref={searchDiv} className='flex shrink-0 outline-0 focus-within:outline-2 rounded-tl-sm rounded-tr-sm focus-within:outline-orange-400 h-full z-10 items-center w-[600]'>
            <Command className='w-full h-full bg-gray-200 focus-within:bg-white'>
            <CommandInput className='outline-0 h-full w-full pl-5'  placeholder='Aradığınız ürün, kategori veya markayı yazınız' value={value} onValueChange={e => setValue(e)}/>
                {
                    value && (
                        <CommandList ref={searchResultsDiv} className='pl-3 absolute top-11 left-[245px] outline-orange-400 bg-white outline-2 rounded-bl-sm rounded-br-sm z-2 w-[600]'>
                        <CommandEmpty className=''>
                            <EmptySearch/>
                        </CommandEmpty> 
                        {searchItems.map(e => (
                            <CommandItem key={e.name} >
                                {e.component}
                            </CommandItem>
                        ))}
                        </CommandList>
                    )
                }
            </Command>
        </div>
        
    )
}


export default Search;
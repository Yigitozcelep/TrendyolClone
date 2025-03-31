'use client'
import { Command, CommandEmpty, CommandInput, CommandList, CommandItem } from './ui/command'
import { IoIosSearch } from "react-icons/io";

import Link from 'next/link'
import React from 'react'
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
    
    return (
        
        <div className='flex shrink-0 outline-0 focus-within:border-2 rounded-tl-sm rounded-tr-sm focus-within:border-orange-400 h-full z-10 items-center w-[600]'>
            <Command className='w-full h-full'>
            <CommandInput className='outline-0 h-full w-full pl-5'  placeholder='Aradığınız ürün, kategori veya markayı yazınız' value={value} onValueChange={e => setValue(e)}/>
                {
                    value && (
                        <CommandList className='pl-3 absolute top-11 left-[245px] border-orange-400 bg-white border-2 rounded-bl-sm rounded-br-sm z-2 w-[600]'>
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
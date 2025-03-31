'use client'
import { Command, CommandEmpty, CommandInput, CommandList, CommandItem } from 'cmdk'
import Link from 'next/link'
import React from 'react'
import { useState } from "react";

interface SearchItem {
    component: React.ReactNode;
    name: string;
}

const searchItems: SearchItem[] = [ ];

const Search = () => {
    const [value, setValue] = useState('')

    return (
        <div className='flex focus-within:outline-2 rounded-sm focus-within:outline-orange-400 h-full z-10 items-center w-[600px]'>
            <Command className='w-full h-full'>
            <CommandInput className='h-full w-full bg-gray-200 rounded-sm pl-5  focus:bg-white focus-within:outline-2 focus-within:outline-orange-400'  placeholder='Aradığınız ürün, kategori veya markayı yazınız' value={value} onValueChange={e => setValue(e)}/>
                {
                    value && (
                        <CommandList>
                         <CommandEmpty className='pl-2'>No results found</CommandEmpty> 
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
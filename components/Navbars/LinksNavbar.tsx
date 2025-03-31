import React from 'react'
import Link from 'next/link'

type Props = {}

const LinksNavbar = (props: Props) => {
  return (
    <div className='h-8 flex mt-1 justify-end'>
        <Link className="opacity-50 hover:opacity-80 mr-6 text-xs" href={"./"}>İndirim Kuponlarım</Link>
        <Link className="opacity-50 hover:opacity-80 mr-6 text-xs" href={"./"}>Trendyol'da Satış Yap</Link>
        <Link className="opacity-50 hover:opacity-80 mr-6 text-xs" href={"./"}>Hakkımzıda</Link>
        <Link className="opacity-50 hover:opacity-80 text-xs" href={"./"}>Yardım & Destek</Link>
    </div>
  )
}

export default LinksNavbar;
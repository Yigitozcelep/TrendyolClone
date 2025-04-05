import LogInOrSignIn from '@/components/LogInOrSignIn'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <p className='flex items-center justify-center mt-3 text-xl font-medium'>Merhaba,</p>
      <p className='flex items-center justify-center '>Trendyol’a giriş yap veya hesap oluştur, indirimleri kaçırma!</p>
      <LogInOrSignIn/>
    </div>
  )
}

export default page
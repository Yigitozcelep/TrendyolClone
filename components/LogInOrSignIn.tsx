'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { IconType } from 'react-icons';
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'


type Props = {}

type MyComponentProps = { className?: string; children?: React.ReactNode; };

const Input = ({className = ""}) => {
    return (
        <input className={"bg-gray-200 rounded-sm w-85 p-5 " + className}/>
    )
}

interface EnterWithAppProps {
    className?: string;
    Icon: React.ReactNode;
    companyName: string;
}

const EnterWithApp: React.FC<EnterWithAppProps> = ({className="", Icon, companyName}) => {
    const pathname = usePathname();
    return (
        <div className='flex p-2 border-1 rounded-md w-40 items-center hover:cursor-pointer'>
            {Icon}
            <div>
                <p className='text-sm font-medium'>{companyName}</p>
                <p className='text-xs text-gray-500'>ile giriş yap</p>
            </div>
        </div>
    )
}

const Label: React.FC<MyComponentProps> = ({className = "", children}) => {
    return (
        <div className={" " + className}>
            {children}
        </div>
    )
}

const FormName = ({name="", isActive=false, href=""}) => {
    console.log(isActive);
    return ( 
        <Link href={href} className={`${isActive ? "bg-wihte text-orange-400" : "bg-gray-100"} border-1 border-b-white w-49 flex justify-center items-center p-2`}> {name} </Link>
    )
}

const FormNames = ({className=""}) => {
    const pathname = usePathname();
    console.log(pathname, pathname === "/SignIn");
    return (
        <div className={'flex justify-between z-0 ' + className}>
            <FormName name="Giriş yap" href={"/LogIn"} isActive={pathname==="/LogIn"}/>
            <FormName name="Üye ol" href={"/SignIn"} isActive={pathname==="/SignIn"}/>
        </div>
    )
}

const GenderButtons = () => {
    const [isClicked, setClicked] = useState(-1);
    return (
        <div className='flex mt-2'>
        { isClicked == 0 
        ?  <button onClick={() => setClicked(0)} className='cursor-pointer rounded-md border-orange-400 text-orange-400 grow-1 border-1 p-2'>Kadın</button>
        :  <button onClick={() => setClicked(0)} className='cursor-pointer rounded-md grow-1 border-1 p-2'>Kadın</button>
        }
        {
            isClicked == 1
        ?  <button onClick={() => setClicked(1)} className='cursor-pointer border-orange-400 text-orange-400 rounded-md grow-1 border-1 p-2'>Erkek</button>
        :  <button onClick={() => setClicked(1)} className='cursor-pointer rounded-md grow-1 border-1 p-2'>Erkek</button>
        }
        
        </div>
    )

}

const SignUpAddtionalDiv = () => {
    return (
        <div>
            <div className='text-xs text-gray-500 mt-1'>
                <p>Şifreniz <strong>en a 10 karakter</strong> olmalı, <strong>1 büyük harf, 1 küçük harf</strong></p>
                ve <strong>rakam</strong> içermelidir
            </div>
            <div className='mt-4'>
                Cinsiyet(Opsiyonel)
            </div>
            <GenderButtons/>
            <Aggrements/>
        </div>
    )
}

const Aggrements = () => {
    return (
        <div>
            <Aggrement aggrement='Tarafıma avantajlı tekliflerin sunulabilmesi amacıyla kişisel verilerimin işlenmesine ve paylaşılmasına'/>
            <Aggrement aggrement='Tarafıma elektronik ileti gönderilmesini kabul ediyorum.'/>
            <Aggrement aggrement='Kişisel verilerimin işlenmesine yönelik aydınlatma metnini okudum ve anladım.'/>
        </div>
    )
}

const Aggrement = ({aggrement = ""}) => {
    return (
        <div className='flex w-full gap-4 mt-3'>
            <input type='checkbox' className='w-5 accent-orange-400 text-white'/>
            <p className='w-full text-xs text-gray-500'>{aggrement}</p>
        </div>
    )
}

const LogInOrSignIn = (props: Props) => {
    const pathname = usePathname();
    return (
        <div className='w-full flex justify-center mt-10'>
            <div>
            <FormNames className='relative top-[1px]'/>
            <div className='border-1 p-7 w-100'>
                <Label className='mb-1'><p className='font-medium'>E-posta</p></Label>
                <Input className='h-10'/>
                <Label className='mt-5 mb-1'><p className='font-medium'>Şifre</p></Label>
                <Input className='h-10'/>
                {pathname === "/LogIn" && <Link className='block text-end underline mt-3 text-sm' href={"/"}>Şifremi unuttum</Link>}
                {pathname === "/SignIn" && <SignUpAddtionalDiv/>}
                <Link href={"/"} className='bg-orange-400 mt-3 hover:bg-orange-300 flex justify-center items-center h-10 text-white rounded-md text-lg' >{pathname === "/LogIn" ? "Giriş Yap" : "Kayıt Ol"}</Link>
                <div className='flex mt-5 justify-between'>
                    <EnterWithApp Icon={<FaFacebook className='text-3xl text-blue-500 mr-3'/>} companyName='Facebook'/>
                    <EnterWithApp Icon={<FaGoogle className='text-3xl text-red-400 mr-3'/>} companyName='Google'/>
                </div>
                <div className='text-[11px] flex justify-center mt-4 text-gray-600'>
                    Üye olmadan verilen siparişlerin takibi için&nbsp;
                    <Link href={"/"} className='underline font-medium cursor-pointer'>tıklayınız</Link>
                </div>
            </div>
            </div>
        </div>
    )
}

export default LogInOrSignIn
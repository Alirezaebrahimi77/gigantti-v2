import React, {useState} from 'react'
import Image from "next/image"
import palautusoikeus from "../public/footer/palautusoikeus.svg"
import pickup from "../public/footer/footer-click-collect.svg"
import asennuspalvelut from "../public/footer/footer-asennuspalvelut.svg"
import samaHinta from "../public/footer/footer-sama-hinta.svg"
import Link from "next/link"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const footerData = [
    {
        id: 4321445,
        image: palautusoikeus,
        text: "50 päivän palautusoikeus"
    },
    {
        id: 414321445,
        image: pickup,
        text: "Varaa netistä, nouda myymälästä"
    },
    {
        id: 532445,
        image: asennuspalvelut,
        text: "Toimitus ja asennuspalvelut"
    },
    {
        id: 4532445,
        image: samaHinta,
        text: "Sama hinta netissä ja myymälöissä"
    },

]

function Footer() {
  return (
    <footer className='bg-giganttiFooterBlue w-full pt-16 relative'>
        <div className='bg-[#1A276C] w-full flex p-12 justify-between 2xl:px-60 lg:px-20 flex-wrap flex-col md:flex-row'>
            {footerData && footerData.map(item => (
                <SingleFooterItem key={item.id} item={item}/>
            ))}
        </div>

        <div className='flex flex-col-reverse md:flex-row w-full px-12 md:px-20 py-10 justify-between'>
            {/* Logo place */}
            <div className='flex flex-row md:flex-col w-full md:w-[30%] md:[40%] md:mr-10 items-end md:items-start justify-center'>
                <div className='relative w-[120px] h-[70px] md:w-[165px] md:h-[70px] hidden md:block'>
                    
                       
                        <Image
                        src="/footerLogo.svg"
                        alt="Gigantti logo"
                        layout="fill"
                        objectFit="contain"
                        />
                      
                    

                </div>
                <div className='relative w-[60px] h-[60px] md:hidden mr-5 md:mr-0'>
                    
                     
                        <Image
                        src="/footerMiniLogo.svg"
                        alt="Gigantti Mini logo"
                        layout="fill"
                        objectFit="contain"
                        />
                       
                    

                </div>
                <div className='flex flex-col justify-center'>
                    <div className='mt-20'>
                        <p className='text-gray-500 break-normal text-sm md:text-md'>©2022 Gigantti Oy | Sanomatalo, Töölönlahdenkatu 2, 00100 Helsinki | Kaikki oikeudet pidätetään.</p>
                    </div>
                    <div className='flex space-x-4 text-white mt-2 text-sm lg:text-md'>
                        <Link href="/"><a className="underline text-white hover:no-underline cursor-pointer">Ostoehdot</a></Link>
                        <Link href="/"><a className="underline text-white hover:no-underline cursor-pointer">Tuoteryhmät</a></Link>
                        <Link href="/"><a className="underline text-white hover:no-underline cursor-pointer">Tuotemerkit</a></Link>

                    </div>

                </div>


            </div>

            <FooterMenus />
            <FooterMenus />



        </div>




    </footer>
  )
}

export default Footer

const SingleFooterItem = ({item}) => {
    return (
        <div className='flex flex-row md:flex-col items-center justify-center mb-4'>
            <div className='w-[30px] h-[40px] md:h-auto lg:w-[40px] lg:h-autoflex items-center'>
                <Image src={item.image} alt="" className="w-full h-full" objectFit="contain"/>
            </div>
            <div className='w-full h-[40px] md:w-full flex items-center ml-4 md:ml-0'>
                <p className='text-md md:text-lg text-white'>{item.text}</p>

            </div>
        </div>

    )
}

const FooterMenus = ({header, menus}) => {
    return (
        <div className='text-white md:mr-10'>
            <div className='text-2xl font-customBodyTextDemiBold flex justify-between items-center'>
                <h3>Asiakaspalvelu</h3>
            </div>
            <div className={`grid grid-cols-1 xl:grid-cols-2 xl:grid-rows-5 mt-5 text-xs lg:text-sm font-customOpenSansRegular gap-y-2 mb-5 md:mb-0 relative z-0 h-full opacity-100 md:h-full md:opacity-100 transition duration-300 `}>
                <Link href="/"><a className='cursor-pointer'>Asiakaspalvelu</a></Link>
                <Link href="/"><a className='cursor-pointer'>Ota yhteyttä</a></Link>
                <Link href="/"><a className='cursor-pointer'>Usein kysyttyä</a></Link>
                <Link href="/"><a className='cursor-pointer'>Kaikkeen löytyy ratkaisu – <br/> Artikkeleita ja inspiraatiota</a></Link>
                <Link href="/"><a className='cursor-pointer'>Maksutavat</a></Link>
                <Link href="/"><a className='cursor-pointer'>Myymälät</a></Link>
                <Link href="/"><a className='cursor-pointer'>Näin aloitat yritysasiakkuuden</a></Link>
            </div>
        </div>

    )
}
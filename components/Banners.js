import React from 'react';
import Image from "next/image";
import paasiainenLarge from "../public/homePageBanners/paasiainenLarge.webp";
import paasiainenSmall from "../public/homePageBanners/paasiainenSmall.jpg";
import free_delivery from "../public/homePageBanners/free_delivery.png"
import kodinkoneet from "../public/homePageBanners/kodinkoneetAlennus.webp";
import phonesAlennus from "../public/homePageBanners/phonesAlennus.png";
import openHours from "../public/homePageBanners/openHours.webp";
function Banners() {
  return (
    <div className='w-full flex flex-col 2xl:flex-row mb-10'>
        <div className='relative flex w-full 2xl:w-3/5'>
            <Image src={paasiainenLarge} alt="Pääsiäisen alennukset" objectFit='contain' className='w-full h-full'/>
        </div>
        <div className='flex flex-1 flex-wrap flex-row 2xl:ml-6 2xl:flex-col xl:space-x-6 2xl:space-x-0 lg:space-x-3 md:space-x-3 md:mt-4 mt-4'>

            <div className='flex flex-1 justify-between items-start'>
                <BannerItem image={free_delivery}/>
                <BannerItem image={openHours}/>

            </div>
            <div className='flex flex-1 justify-between items-end'>

                <BannerItem image={kodinkoneet}/>
                <BannerItem image={phonesAlennus}/>

            </div>


        </div>
     

    </div>  
  )
}

export default Banners


const BannerItem = ({image}) => {
    return (
        <div className='flex relative w-[180px] h-[120px] sm:w-[300px] sm:h-[180px] md:w-[180px] md:h-[100px] md:mb-4 lg:w-[250px] lg:h-[140px] xl:w-[300px] xl:h-[160px] 2xl:w-[360px] 2xl:h-[180px]'>

            <Image src={image} alt="Pääsiäisen alennukset" objectFit='contain' className='w-full h-full'/>
        </div>

    )
}
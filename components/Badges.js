import React from 'react'
import Image from "next/image"
function Badges({badges}) {
  return (
    <div className='w-full flex justify-around 2xl:py-10 2xl:px-12 2xl:space-x-2 flex-wrap'>
        {badges?.map(badge => (
            <Badge key={badge.id} badge={badge}/>
        ))}

    </div>
  )
}

export default Badges

const Badge = ({badge}) => {
    return(
        <div className='w-1/2 md:w-1/3 lg:w-[250px] my-0 p-8 md:p-10 md:my-1 xl:w-[200px] xl:p-4 xl:my-10 2xl:p-0 2xl:my-10'>
            <Image src={badge.image} objectFit='contain' alt={badge.text} className="w-full h-full"/>

        </div>
    )
}
import React from "react";
import Link from "next/link";
import Image from "next/image";


function CategoryItem({id, image, title}) {
  return (
    <Link href={`/category/${id}`}>
      <div className="flex flex-col items-center cursor-pointer">
        <div className="relative h-[40px] w-[40px] md:h-[80px] md:w-[80px]">
          <Image src={image} layout="fill" objectFit="contain" alt={title}/>
        </div>
        <p className="text-giganttiCategoryText font-semibold text-sm md:text-md md:mt-3 uppercase">
          {title}
        </p>
      </div>
    </Link>
  );
}

export default CategoryItem;

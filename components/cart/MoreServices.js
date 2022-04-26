import React from "react";
import elcare from "../../public/cart/elcare.webp";
import Image from "next/image"
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
function MoreServices({backHandler}) {
  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-2">
        Hyödyllisiä lisätarvikkeita ja palveluita ostamallesi tuotteelle
      </h2>
      <p>
        Palveluiden ja tarvikkeiden avulla saat kaiken irti ostamastasi
        tuotteesta
      </p>
      <div className="py-4 flex w-full overflow-x-auto lg:flex-col noScrollBar">
        <SingleService />
        <SingleService />
        <SingleService />
        <SingleService />
        <SingleService />
      </div>
      <h3 className="mt-10 text-4xl font-bold font-customBodyTextDemiBold mb-2">Suositellut lisävarusteet</h3>
      <p className="text-gray-700 text-lg mb-10">Muiden asiakkaiden suosikit</p>
      <div className="flex w-full overflow-x-auto lg:flex-col noScrollBar">
        
        <SingleService />
        <SingleService />
        <SingleService />

      </div>

      <div className="flex justify-center items-center  text-lg py-12">
        <ArrowBackIosNewOutlinedIcon className="text-gray-500 text-sm mr-2" />
        <p className="underline hover:no-underline cursor-pointer" onClick={backHandler}>Jatka ostoksia</p>
      </div>
    </div>
  );
}

export default MoreServices;

const SingleService = () => {
  return (
    <div className="flex flex-col lg:flex-row min-w-[300px] items-center p-10 lg:p-4 border border-gray-300 mb-4 mr-6 shadow-xl lg:shadow-none">
      <div className="flex justify-center items-center relative p-2 mr-2 lg:w-[15%]">
          {/* <Image src={} /> */}
          <Image src={elcare} alt="ELCARE" width={100} height={100} objectFit="contain"/>

      </div>
      <div className="my-4 lg:my-0 lg:w-[60%]">
          <h3 className="text-xl font-semibold text-black mb-1">Tietoturva pölynimuri 3 vuotta</h3>
          <p> Tuoteturvalla vältyt odottamattomilta kuluilta.  Korjaamme tai vaihdamme tuotteesi onnettomuuden sattuessa. Turvasopimus kattaa kaikki äkilliset tapaturmaiset vauriot, kuten tuotteen putamisen putoamisen tai kastumisen. </p>

      </div>
      <div className="flex flex-col items-center justify-end lg:w-[25%] lg:flex-row space-y-2 lg:space-y-0">
          <p className="text-5xl font-customHeadlineRegular mr-4 2xl:mr-8">29€</p>
          <button className="text-giganttiGreenIcon font-bold py-2 px-4 rounded-3xl border border-giganttiGreenIcon hover:border hover:border-giganttiCartBgRight">Lisää ostoskoriin</button>
      </div>
    </div>
  );
};

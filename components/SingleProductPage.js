import React, { useState, useEffect, } from "react";
import { useRouter } from 'next/router'
import absoluteUrl from 'next-absolute-url'
import Rating from "react-star-review";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import Link from "next/link";
import bosch from "../public/singleProduct/bosch.webp"
import bosch1 from "../public/singleProduct/bosch1.jpg"
import bosch2 from "../public/singleProduct/bosch2.webp"
import Image from "next/image"
function SingleProductPage({req}) {
  const [orderType, setOrderType] = useState("net");
  const router = useRouter()

  useEffect(() => {
      const { origin } = absoluteUrl(req)
  },[])

  const handleCart = () => {
    router.push(`${origin + router.asPath}/extra`)
    console.log(req)
  }

  return (
    <div className="w-full">
      <div className="w-full max-w-[90%] m-auto py-10">
        {/* product Title and reviews*/}
        <div className="w-full border-b border-gray-100 pb-5 mb-5">
          <h1 className="text-xl md:text-2xl 2xl:text-3xl font-bold mb-2">
            Philips kahvikone EP2222010
          </h1>

          <div className="flex items-center justify-between">
            <div className="flex flex-col md:flex-row">
              <div className="flex items-center">
                <p className="text-sm text-black">Tuotenumero:</p>
                <span className="text-sm text-gray-400 ml-1">324666</span>
              </div>
              <div className="flex items-center mt-2 md:mt-0 md:ml-3">
                <div className="flex">
                  <Rating rating={4} size={15} />
                  <span className="text-sm font-bold ml-1">4.8</span>
                </div>
                <p className="text-gray-400 ml-2 underline hover:no-underline cursor-pointer">
                  (4 Arvostelua)
                </p>
              </div>
            </div>
            <div className="flex items-center text-md group cursor-pointer">
              <CompareArrowsOutlinedIcon className="text-gray-400 mr-2 group-hover:text-blue-400" />
              <p className="hidden md:block">Vertaile</p>
            </div>
          </div>
        </div>

        {/* Product Images and price section */}
        <div className="w-full flex flex-col md:flex-row 2xl:flex-row">
          {/* Image section + description */}
          <div className="flex flex-col w-full md:w-[60%] 2xl:w-[80%] px-2 2xl:px-12">
            {/* Image section */}
            <div className="w-full h-[70%]">

            {/* <Carousel  autoPlay="true" emulateTouch="true" showThumbs="true" thumbWidth="80">
                <div>
                    <Image src={bosch} alt="bosch"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <Image src={bosch1} alt="bosch"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <Image src={bosch2} alt="bosch"/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel> */}


            </div>


            {/* Price section */}
          <PriceComponent handleCart={handleCart} orderType={orderType} setOrderType={setOrderType} className="w-full md:w-[40%] 2xl:w-[20%] h-[500px] bg-[#f5f5f5] border border-gray-100 flex md:hidden mb-10"/>
            {/* Short description */}
            <div className="flex w-full h-[30%] flex-col md:flex-row">
              <div className="flex flex-col w-full md:w-1/2 2xl:w-[80%] pr-12 mb-6 md:mb-0">
                <h3 className="text-2xl font-bold">Tuotteen perustiedot</h3>
                <p className="text-md my-10">
                  Bosch Serie 6 -pölynimurissa on pestävä HEPA 13 -suodatin,
                  tilava pölypussi ja tarkka imutehon säätö, jonka ansiosta
                  imuroit vaivatta kaikenlaiset pinnat.
                </p>

                
                  <p className="underline cursor-pointer text-gray-700 hover:no-underline">
                    Tutustu ominaisuuksiin
                  </p>
                
              </div>
              <div className="flex flex-col w-full md:w-1/2 2xl:w-[20%] mb-6 md:mb-0">
                <h3 className="text-2xl font-bold">
                  Tuotteen perustiedot
                </h3>
                <div className="flex flex-col items-start py-6 space-y-2">
                  <p className="text-md pb-2 border-b border-gray-200 inline-block">
                    12 m kantama
                  </p>
                  <p className="text-md pb-2 border-b border-gray-200 inline-block">
                    Pestävä HEPA 13 -suodatin
                  </p>
                  <p className="text-md pb-2 border-b border-gray-200 inline-block">
                    10 vuoden moottoritakuu
                  </p>
                </div>

                <Link href="/product/:id">
                  <p className="underline cursor-pointer text-gray-700 hover:no-underline">
                    Katso tekniset tiedot
                  </p>
                </Link>
              </div>
            </div>
          </div>

          {/* Price section */}
          <PriceComponent handleCart={handleCart} orderType={orderType} setOrderType={setOrderType} className="sticky top-10 w-full md:w-[40%] 2xl:w-[20%] h-[500px] bg-[#f5f5f5] border border-gray-100 hidden md:flex"/>

        </div>
      </div>
    </div>
  );
}

export default SingleProductPage;


const PriceComponent = ({orderType, setOrderType, handleCart, ...className}) => {
    return(
        <div {...className}>
        <div className="w-full flex flex-col">
          <div className="flex max-w-1/2 items-center p-10">
            <div className="text-5xl text-black font-customHeadlineRegular justify-center items-center mr-2">
              249€
            </div>
            <div className="flex flex-col text-sm">
              <p className=" p-[2px] bg-yellow-400 text-black font-bold uppercase">
                Säästä 200
              </p>
              <p className="text-gray-400">Norm 449€</p>
            </div>
          </div>

          <div className="flex">
            <div
              className={`flex w-1/2 justify-center items-center h-[120px] border-t-2 border-transparent text-gray-400  text-lg lg:text-xl font-bold cursor-pointer ${
                orderType === "net" &&
                "bg-white border-green-900 text-blue-black"
              }`}
              onClick={(e) => setOrderType("net")}
            >
              <p className="text-black">Tilaa netistä</p>
            </div>
            <div
              className={`flex flex-col w-1/2 justify-center items-center h-[120px] border-t-2 border-transparent text-lg lg:text-xl font-bold text-black cursor-pointer ${
                orderType === "pickUp" && "bg-white border-green-900"
              }`}
              onClick={(e) => setOrderType("pickUp")}
            >
              <p>Nouda</p>
              <p>myymälässä</p>
              <span className="text-sm text-gray-400 mt-1">
                Ei saatavilla
              </span>
            </div>
          </div>

          {/* Render 2 different section based on state */}

          {orderType === "net" ? (
            <div className="bg-white flex flex-col p-5 flex-1">
              <div className="flex flex-col justify-center items-center mt-2">
                <p className="text-lg font-bold">
                  Arvioitu toimitusaika 6 päivää
                </p>
                <p className="underline text-gray-500">
                  Syötä postinumero ja katso tarkempi toimitusaika
                </p>
              </div>
              <div className="flex justify-center items-center mt-10">
                <button  onClick={handleCart} className="py-3 px-20 text-white font-bold  text-lg bg-giganttiCartBgLeft hover:bg-giganttiCartBgRight rounded-3xl">
                  Lisää ostoskoriin
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white flex flex-col p-5 flex-1">
              <div className="flex flex-col justify-center items-center mt-2">
                <p className="text-lg font-bold">
                  Nouto päivänä 29.4.2022 lähellä Kokkola 67100
                </p>
                <p className="underline text-gray-500">
                  Avaa myymälät kartalla
                </p>
              </div>

              <div className="flex flex-col justify-center items-center mt-10 border border-gray-200 rounded-md p-3">
                <div className="flex justify-start items-center mb-5">
                  <p className="text-md text-black inline-block font-bold">
                    Gigantti Kokkola:
                  </p>
                  <span className="ml-1 text-sm"> 1.5 km päässä</span>
                </div>

                <button  onClick={handleCart} className="py-3 px-20 text-white font-bold  text-lg bg-giganttiCartBgLeft hover:bg-giganttiCartBgRight rounded-3xl">
                  Lisää ostoskoriin
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

    )
}

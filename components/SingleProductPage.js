import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import absoluteUrl from "next-absolute-url";
import Rating from "react-star-review";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import Link from "next/link";
import bosch from "../public/singleProduct/bosch.webp";
import bosch1 from "../public/singleProduct/bosch1.jpg";
import bosch2 from "../public/singleProduct/bosch2.webp";
import Image from "next/image";
import { addToCart } from "../redux/actions/cartActions";
import { useDispatch } from "react-redux";

function SingleProductPage({ req, product }) {
  const [orderType, setOrderType] = useState("net");
  const [originState, setOriginState] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const { origin } = absoluteUrl(req);
    setOriginState(origin)
  }, [originState]);

  const handleCart = (id, origin) => {
    dispatch(addToCart(id, origin));
    router.push(`${origin + router.asPath}/extra`);
  };

  return (
    <div className="w-full">
      <div className="w-full max-w-[90%] m-auto py-10">
        {/* product Title and reviews*/}
        <div className="w-full border-b border-gray-100 pb-5 mb-5">
          <h1 className="text-xl md:text-2xl 2xl:text-3xl font-bold mb-2">
            {product?.name}
          </h1>

          <div className="flex items-center justify-between">
            <div className="flex flex-col md:flex-row">
              <div className="flex items-center">
                <p className="text-sm text-black">Tuotenumero:</p>
                <span className="text-sm text-gray-400 ml-1">
                  {product?.productNro}
                </span>
              </div>
              <div className="flex items-center mt-2 md:mt-0 md:ml-3">
                <div className="flex">
                  <Rating rating={product?.ratings} size={15} />
                  <span className="text-sm font-bold ml-1">
                    {product?.ratings}
                  </span>
                </div>
                <p className="text-gray-400 ml-2 underline hover:no-underline cursor-pointer">
                  ({product?.numOfReviews} Arvostelua)
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
            <div className="w-full flex justify-center mb-10 h-[70%]">

              <div className="relative w-[700px] h-[300px] xl:h-[500px]">
                {Object.keys(product).length > 0 && product.images.map(image => (
                  <Image key={image._id} src={image.url} alt="Bosch" className="w-full h-auto object-contain" layout="fill"/>
            
                ))}
              </div>

    
            </div>

            {/* Price section in mobile*/}
            <PriceComponent
              handleCart={handleCart}
              origin={originState.length !== 0 && originState}
              orderType={orderType}
              setOrderType={setOrderType}
              product_id={product?._id}
              price={product?.price}
              normalPrice={product?.normalPrice}
              savePrice={product?.savePrice}
              className="w-full md:w-[40%] 2xl:w-[20%] h-[500px] bg-[#f5f5f5] border border-gray-100 flex md:hidden mb-10"
            />
            {/* Short description */}
            <div className="flex w-full h-[30%] flex-col md:flex-row">
              <div className="flex flex-col w-full md:w-1/2 2xl:w-[80%] pr-12 mb-6 md:mb-0">
                <h3 className="text-2xl font-bold">Tuotteen perustiedot</h3>
                <p className="text-md my-10">{product?.longDescription}</p>

                <p className="underline cursor-pointer text-gray-700 hover:no-underline">
                  Tutustu ominaisuuksiin
                </p>
              </div>
              <div className="flex flex-col w-full md:w-1/2 2xl:w-[20%] mb-6 md:mb-0">
                <h3 className="text-2xl font-bold">Tuotteen perustiedot</h3>
                <div className="flex flex-col items-start py-6 space-y-2">
                  {product?.shortDescription?.map((desc) => (
                    <p
                      key={desc._id}
                      className="text-md pb-2 border-b border-gray-200 inline-block"
                    >
                      {desc.desc}
                    </p>
                  ))}
                </div>
                <Link href="/product/:id">
                  <a className="underline cursor-pointer text-gray-700 hover:no-underline">
                    Katso tekniset tiedot
                  </a>
                </Link>
              </div>
            </div>
          </div>

          {/* Price section in desktop*/}
          <PriceComponent
            handleCart={handleCart}
            origin={originState.length !== 0 && originState}
            orderType={orderType}
            setOrderType={setOrderType}
            product_id={product?._id}
            price={product?.price}
            normalPrice={product?.normalPrice}
            savePrice={product?.savePrice}
            className="sticky top-10 w-full md:w-[40%] 2xl:w-[20%] h-[500px] bg-[#f5f5f5] border border-gray-100 hidden md:flex"
          />
        </div>
      </div>
    </div>
  );
}

export default SingleProductPage;

const PriceComponent = ({
  orderType,
  setOrderType,
  handleCart,
  price,
  normalPrice,
  savePrice,
  product_id,
  origin,
  ...className
}) => {
  return (
    <div {...className}>
      <div className="w-full flex flex-col">
        <div className="flex max-w-1/2 items-center p-10">
          <div className="text-5xl text-black font-customHeadlineRegular justify-center items-center mr-2">
            {price}???
          </div>
          <div className="flex flex-col text-sm">
            <p className=" p-[2px] bg-yellow-400 text-black font-bold uppercase">
              S????st?? {` ${savePrice}`}
            </p>
            <p className="text-gray-400">Norm {normalPrice}???</p>
          </div>
        </div>

        <div className="flex">
          <div
            className={`flex w-1/2 justify-center items-center h-[120px] border-t-2 border-transparent text-gray-400  text-lg lg:text-xl font-bold cursor-pointer ${
              orderType === "net" && "bg-white border-green-900 text-blue-black"
            }`}
            onClick={(e) => setOrderType("net")}
          >
            <p className="text-black">Tilaa netist??</p>
          </div>
          <div
            className={`flex flex-col w-1/2 justify-center items-center h-[120px] border-t-2 border-transparent text-lg lg:text-xl font-bold text-black cursor-pointer ${
              orderType === "pickUp" && "bg-white border-green-900"
            }`}
            onClick={(e) => setOrderType("pickUp")}
          >
            <p>Nouda</p>
            <p>myym??l??st??</p>
            <span className="text-sm text-gray-400 mt-1">Ei saatavilla</span>
          </div>
        </div>

        {/* Render 2 different section based on state */}

        {orderType === "net" ? (
          <div className="bg-white flex flex-col p-5 flex-1">
            <div className="flex flex-col justify-center items-center mt-2">
              <p className="text-lg font-bold">
                Arvioitu toimitusaika 6 p??iv????
              </p>
              <p className="underline text-gray-500">
                Sy??t?? postinumero ja katso tarkempi toimitusaika
              </p>
            </div>
            <div className="flex justify-center items-center mt-10">
              <button
                onClick={() => handleCart(product_id, origin)}
                className="w-72 py-3 text-white font-bold text-lg bg-giganttiCartBgLeft hover:bg-giganttiCartBgRight rounded-3xl"
              >
                Lis???? ostoskoriin
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white flex flex-col p-5 flex-1">
            <div className="flex flex-col justify-center items-center mt-2">
              <p className="text-lg font-bold">
                Nouto p??iv??n?? 29.4.2022 l??hell?? Kokkola 67100
              </p>
              <p className="underline text-gray-500">Avaa myym??l??t kartalla</p>
            </div>

            <div className="flex flex-col justify-center items-center mt-10 border border-gray-200 rounded-md p-3">
              <div className="flex justify-start items-center mb-5">
                <p className="text-md text-black inline-block font-bold">
                  Gigantti Kokkola:
                </p>
                <span className="ml-1 text-sm"> 1.5 km p????ss??</span>
              </div>

              <button
                onClick={() => handleCart(product_id, origin)}
                className="w-72 py-3 text-white font-bold  text-lg bg-giganttiCartBgLeft hover:bg-giganttiCartBgRight rounded-3xl"
              >
                Lis???? ostoskoriin
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

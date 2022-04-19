import React,{useState, useRef} from "react";
import Link from "next/link"
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import Image from "next/image";
import Rating from "react-star-review";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
function Products({productsData}) {
  const productsRef = useRef();
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  const scrollHandler = (scrollOffset) => {

    if (productsRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = productsRef.current;

      // If reaches to the end
      if (scrollLeft + + scrollOffset + clientWidth >= scrollWidth) {
        setShowRightArrow(false);
        setShowLeftArrow(true);
      }

      if(scrollLeft + scrollOffset + clientWidth < scrollWidth){
        setShowRightArrow(true);
      }

      if(scrollLeft === 0 && scrollLeft + clientWidth < scrollWidth){
        setShowLeftArrow(true);
      }

      if(scrollLeft + scrollOffset <= 0){
        setShowLeftArrow(false);
      }

    }
    productsRef.current.scrollLeft += scrollOffset;

  };


  return (
    <div style={{backgroundImage: `url(${productsData.backgroundUrl.src})`}} className={`w-full relative bg-contain md:bg-cover bg-no-repeat overflow-hidden py-5 md:py-10`}>
      <div className="px-4 py-2 md:px-12 2xl:px-20 2xl:py-14 mb-2 md:mb-10 flex">
        <h1 style={{color: `${productsData.sectionTitleColor}`}} className="text-3xl md:text-3xl lg:text-4xl 2xl:text-5xl uppercase md:whitespace-nowrap font-customHeadlineRegular">
          {productsData.sectionTitle}
        </h1>
      </div>

      <div className="flex flex-col md:flex-row w-full h-full">
        <div className="flex 2xl:w-1/5 xl:w-1/5 lg:w-2/5 md:w-2/5 justify-start md:justify-center items-center 2xl:mr-10">
        <Link href={productsData.buttonLink}>
          <div className="py-2 px-4 text-md rounded-3xl border-2 border-transparent bg-white text-gary-600 font-semibold hover:border-2 hover:border-black whitespace-nowrap ml-4 md:ml-12 2xl:ml-20 mb-3 cursor-pointer">
            {productsData.buttonText}
            </div>
        </Link>
        </div>
        <div className="flex relative w-full h-full flex-1 mt-5 border-2 overflow-hidden z-10">
          <div className="flex scroll-smooth noScrollBar overflow-x-auto" ref={productsRef}>
            {productsData.products.map(product => (
              <SingleProductItem key={product.productNro} product={product}/>
            ))}

          </div>
          {showRightArrow && (
              <ArrowComponent scrollHandler={scrollHandler} direction={"right"} />
            )}
            {showLeftArrow && (
              <ArrowComponent scrollHandler={scrollHandler} direction={"left"} />
            )}
        </div>
      </div>
    </div>
  );
}

export default Products;

const SingleProductItem = ({product}) => {
  return (
    <div className="relative bg-[#f3f3f3] min-w-[300px] cursor-pointer group overflow-hidden h-[520px] xl:hover:bg-white ">
      <p className="opacity-0 group-hover:opacity-100 transition-all duration-75 text-xs text-gray-500 py-1 px-2">
        {product.productNro}
      </p>
      {/* Container */}
      <div className="flex flex-col h-full py-0 px-5">

        {/* Vertaile */}
        <div className="text-gray-600 group">
          <CompareArrowsIcon className="transition duration-100" />
          <span className="ml-2">Vertaile</span>
        </div>

        {/* Image  */}
        <div className="relative h-[240px] w-[100%] p-10 flex items-center justify-center xl:group-hover:h-[180px] xl:group-hover:w-[100%] xl:group-hover:p-16 transition-all duration-150">
          <Image
            src={product.imageSrc}
            alt={product.productTitle}
            objectFit="contain"
            className="object-contain w-full h-full"
          />
        </div>


        {/* Title */}
        <div>
          <p className="font-extrabold text-sm md:text-md text-gray-900 font-customOpenSans">
          {product.productTitle}
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center py-2 font-customOpenSans font-normal">
          <Rating rating={product.rating} size={15} />
          <span className="inline text-xs text-gray-400 ml-2">
            ({product.numOfReviews} Arvostelua)
          </span>
        </div>


        {/* last part */}
        <div className="flex flex-col h-full justify-end">
          <div className="relative h-[0px] transition-all duration-150 xl:group-hover:h-[65px] overflow-hidden">
            {product.description.map(desc => (
                  <div className="flex items-center" key={desc.descId}>
                  <ArrowForwardIosIcon className="mr-2 text-xs text-gray-400" />
                  <p className="inline text-sm text-gray-600">
                    {desc.desc}
                  </p>
                </div>

            ))}

            {/* <div className="flex items-center">
              <ArrowForwardIosIcon className="mr-2 text-xs text-gray-400" />
              <p className="inline text-sm text-gray-600">
                Imprint Smart Mapping -Tek
              </p>
            </div>
            <div className="flex items-center">
              <ArrowForwardIosIcon className="mr-2 text-xs text-gray-400" />
              <p className="inline text-sm text-gray-900">
                iRobot HOME -sovellus
              </p>
            </div> */}
          </div>

          <div className="flex flex-col pb-10">
            <div className="flex flex-1 mt-2">
              <div>
                <p className="text-5xl font-customHeadlineRegular">{product.price}€</p>
              </div>
              <div className="flex flex-col ml-3 text-xs justify-between w-full items-start font-customBodyTextRegular py-1">
                <div className="inline-block">
                  <p className="bg-[#FFDD00] py-[2px] px-[4px] font-bold text-[12px]">
                    SÄÄSTÄ {product.savePrice}
                  </p>
                </div>

                <div className="flex items-center">
                  <p className="text-[11px] text-gray-500 ml-[3px] mr-3">
                    Norm {product.normalPrice}
                  </p>
                  <InfoOutlinedIcon className="text-xs text-gray-500" />
                </div>
              </div>
            </div>
            <p className="text-gray-600 uppercase ">
              {product.offerText}
            </p>

            <div className="flex flex-1 my-4">
              <p className="text-green-600 text-sm font-semibold">
                {product.offerDetails}
              </p>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

const ArrowComponent = ({ direction = "right", scrollHandler }) => {
  return (
    <div
      className={`hidden absolute md:w-[60px] md:h-[60px] bg-giganttiCartBgRight z-100 ${
        direction === "right"
          ? "right-0 bottom-[50%] -rotate-3"
          : "-left-3 bottom-[50%] rotate-3"
      } md:flex md:justify-center md:items-center md:translate-x-2 cursor-pointer hover:bg-green-700`}
      onClick={() => scrollHandler(direction === "right" ? 500 : -500)}
    >
      {direction === "right" ? (
        <ArrowForwardIosOutlinedIcon className="text-white text-4xl" />
      ) : (
        <ArrowBackIosOutlinedIcon className="text-white text-4xl" />
      )}
    </div>
  );
};
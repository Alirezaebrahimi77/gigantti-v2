import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Search from "./Search";
import { useSelector } from "react-redux";
import Cart from "./cart/Cart";
import SingleCartItem from "./cart/SingleCartItem";
function Header() {
  const [showBar, setShowBar] = useState(true);
  const [showCart, setShowCart] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);

  const cartHandler = () => {
    setShowCart((prevState) => !prevState);
    document.body.style.overflow = "hidden";
  };

  return (
    <header className="overflow-hidden w-full">
      {showBar && (
        <div className="relative w-full h-[40px] bg-giganttiBlue flex justify-center items-center">
          <p className="text-white text-md md:text-lg">
            Ilmainen toimitus kaikkiin nettitilauksiin! Klikkaa tarjouksiin.
          </p>
          <CloseIcon
            className="text-white absolute right-2 cursor-pointer bg-giganttiBlue"
            onClick={() => setShowBar(!showBar)}
          />
        </div>
      )}

      <div className="hidden w-full xl:flex xl:space-x-4 xl:py-2 xl:pl-12">
        <Link href="/asiakaspalvelu">
          <p className="text-gray-400 cursor-pointer hover:underline">
            Asiakaspalvelu
          </p>
        </Link>
        <Link href="/yksityisasiakas">
          <p className="text-giganttiCategoryText cursor-pointer">
            Yksityisasiakas
          </p>
        </Link>
        <Link href="yritysasiakas">
          <p className="text-gray-400 cursor-pointer hover:underline">
            Yritysasiakas
          </p>
        </Link>
      </div>
      <div className="flex items-center border border-t-gray-300 border-b-gray-300 h-[72px] xl:h-[100px] xl:pl-6">
        <div className="flex justify-between items-center w-full py-2 px-2 xl:px-6">
          <div className="flex items-center flex-row-reverse xl:flex-row mr-4">
            <div className="relative w-[120px] h-[70px] md:w-[165px] md:h-[70px] transition duration-150 hover:scale-105 cursor-pointer">
              <Link href="/">
                <Image
                  src="/gigantti_logo.svg"
                  alt="Gigantti logo"
                  layout="fill"
                  objectFit="contain"
                />
              </Link>
            </div>
            <div className="flex px-4 items-center group cursor-pointer text-giganttiBlue 2xl:mr-20 lg:border-l lg:border-gray-300 2xl:ml-4">
              <MenuIcon className="transition duration-150 group-hover:scale-110 text-2xl" />
              <p className="hidden xl:block pl-2 text-2xl font-semibold">
                Valikko
              </p>
            </div>
          </div>
          <Search className="hidden md:flex 2xl:mr-5" />

          <div className="hidden xl:flex items-center group cursor-pointer pr-2 border-r border-gray-300 text-giganttiBlue">
            <LocationOnOutlinedIcon className="text-giganttiGreenIcon transition duration-150 group-hover:scale-110" />
            <p className="ml-2 font-semibold text-sm 2xl:text-md">
              Etsi lähin myymälä
            </p>
          </div>

          <div className="flex items-center group cursor-pointer ml-4 text-giganttiBlue">
            <AccountCircleOutlinedIcon className="text-3xl md:text-2xl text-giganttiGreenIcon transition duration-150 group-hover:scale-110" />
            <p className="hidden md:block ml-2 font-semibold text-sm 2xl:text-md">
              Kirjaudu
            </p>
          </div>
        </div>

        <div
          className={`relative w-[110px] h-[72px] xl:h-[100px] cart after:border-t-[36px] after:border-t-transparent after:border-b-[36px] after:border-b-transparent xl:after:border-t-[50px] xl:after:border-t-transparent xl:after:border-b-[50px] xl:after:border-b-transparent`}
        >
          <div className="relative">
            <ShoppingCartOutlinedIcon
              onClick={cartHandler}
              className="text-white text-md ml-6 cursor-pointer transition duration-150 hover:scale-110"
            />
            <span className="absolute -top-4 -right-2 text-white font-bold text-md font-customOpenSans">
              {cartItems &&
                cartItems.reduce((acc, item) => acc + Number(item.quantity), 0)}
            </span>
          </div>
        </div>
      </div>
      <div className="py-3 px-5 md:hidden">
        <Search />
      </div>

      {/* CartSlider */}
      <div
        className={`w-full h-full absolute top-0 right-0 z-50 translate-x-full ${
          showCart && "translate-x-0 cartSliderBg"
        } transition duration-50 flex justify-end`}
      >
        <div className="w-full md:w-[50%] lg:w-[40%] xl:w-[28%] shadow-xl bg-white tansition duration-500 py-10 px-8 flex flex-col">
          <div className="flex justify-between border-b border-gray-200 pb-10">
            <div>
              {cartItems.length > 0 ? (
                <React.Fragment>
                  <h3 className="text-[1.8rem] font-bold">
                    Ostoskorissasi on (
                    {cartItems.reduce(
                      (acc, item) => acc + Number(item.quantity),
                      0
                    )}{" "}
                    tuotetta)
                  </h3>
                  <p className="text-md text-gray-500">ID: 1005753555</p>
                </React.Fragment>
              ) : (
                <h3 className="text-[1.8rem] font-bold">
                  Ostoskorisi on tyhjä.
                </h3>
              )}
            </div>
            <CloseRoundedIcon
              className="text-3xl text-gray-500 mt-1 cursor-pointer"
              onClick={() => setShowCart(false)}
            />
          </div>

          {cartItems.length > 0 ? (
            <React.Fragment>
              <div className="flex flex-1 overflow-y-scroll noScrollBar flex-col">
                {cartItems.map((cartItem) => (
                  <SingleCartItem key={cartItem.id} cartItem={cartItem} />
                ))}
              </div>
              <div className="w-full">
                <div className="flex justify-between items-center py-10 px-2 text-2xl">
                  <p className="font-semibold">Summa EUR</p>
                  <p className="font-customHeadlineRegular text-5xl">
                    {cartItems.reduce(
                      (acc, item) => acc + item.quantity * item.price,
                      0
                    )}
                    €
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <button className="w-72 py-3 text-white font-bold text-lg bg-giganttiCartBgLeft hover:bg-giganttiCartBgRight rounded-3xl">
                    Lisää ostoskoriin
                  </button>
                </div>
              </div>
            </React.Fragment>
          ) : (
            <div>
              <div className="py-12 text-center font-customBodyTextRegular text-lg border-b-2 border-black">
                <p>Aloita täyttämällä ostoskorisi</p>
                <p>valitsemillasi tuotteilla.</p>
              </div>
              <div className="py-12 text-center font-customBodyTextRegular text-2xl font-bold">
                <p>Tarvitsetko inspiraatiota</p>
                <p>oikean tuotteen</p>
                <p>löytämiseen?</p>
              </div>
              <button className="w-full rounded-2xl bg-[#6aa334] flex justify-center items-center text-white py-3 text-lg mb-6">
                Tutustu tämän viikon tarjouksiin
              </button>
              <button className="w-full rounded-2xl bg-white flex justify-center items-center text-[#6aa334] py-3 text-lg border border-[#6aa334]">
                Jtaka ostosten tekemistä
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;

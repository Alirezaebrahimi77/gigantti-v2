import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Search from "./Search";
import { useSelector } from "react-redux";
import Cart from "./cart/Cart";
import SingleCartItem from "./cart/SingleCartItem";
import {useEffect, useRef} from "react"

// Import Images
import computers from "../public/menu/computers.webp"
import phones from "../public/menu/phones.webp"
import tvSound from "../public/menu/tv-sound.webp"
import gaming from "../public/menu/gaming.webp"
import epoq from "../public/menu/epoq.webp"
import whiteGoods from "../public/menu/white-goods.webp"
import home from "../public/menu/home.webp"
import health from "../public/menu/health.webp"
import sports from "../public/menu/sports.webp"
import services from "../public/menu/services.webp"
import outlet from "../public/menu/outlet.webp"
import giganttiOffers from "../public/menu/gigantti.webp"


function Header({showCart, setShowCart}) {
  const [showBar, setShowBar] = useState(true);
  const [menuOffset, setMenuOffset] = useState(0)
  const [showMenu, setShowMenu] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const { cartItems } = useSelector((state) => state.cart);
  const headerRef = useRef()

  const cartHandler = () => {
    setShowCart((prevState) => !prevState);
  }
  const menuHandler = () => {
    setShowMenu(prevState => !prevState)
  }
  const mobileMenuHandler = () => {
    setShowMobileMenu(prevState => !prevState)
  }
  useEffect(() => {
    showCart || showMobileMenu ? document.body.style.overflow = "hidden" : document.body.style.overflow = "scroll"
  }, [showCart, showMobileMenu]);

  useEffect(() => {
    setMenuOffset(headerRef.current.clientHeight)

  },[])

  const menuData = [
    {
      id: 4324,
      image: computers,
      title: "Tietokoneet ja toimistotarvikkeet"
    },
    {
      id: 2324,
      image: phones,
      title: "Puhelimet, Tabletit ja älykellot"
    },
    {
      id: 4443234,
      image: tvSound,
      title: "TV, Ääni ja Älykoti"
    },
    {
      id: 553234,
      image: gaming,
      title: "Gaming"
    },
    {
      id: 4443234,
      image: epoq,
      title: "EPOQ-Keittiö ja-kodinhoitohuone"
    },
    {
      id: 543234,
      image: whiteGoods,
      title: "Kodinkoneet"
    },
    {
      id: 5424321,
      image: home,
      title: "Kodin pienkoneet"
    },
    {
      id: 54342,
      image: health,
      title: "Terveys ja Hyvinvointi"
    },
    {
      id: 5449922,
      image: sports,
      title: "Urheilu ja vapaa-aika"
    },
    {
      id: 5449922,
      image: services,
      title: "Palvelut ja lisävarusteet"
    },
    {
      id: 5449922,
      image: outlet,
      title: "Outlet"
    },
    {
      id: 4442122,
      image: giganttiOffers,
      title: "Tarjoukset ja kampanjat"
    },
  ]

  const menuDataLeft = [
    {
      id: 432423,
      category: "puhelimet"
    },
    {
      id: 543223,
      category: "Televisiot"
    },
    {
      id: 44211123,
      category: "Kuulokkeet"
    },
    {
      id: 33323,
      category: "Pelipöytäkoneet"
    },
    {
      id: 43532423,
      category: "Pyykinpesukoneet"
    },
    {
      id: 43243323,
      category: "Astianpesukoneet"
    },
    {
      id: 43412423,
      category: "Windows-Kannettavat"
    },
    {
      id: 442123,
      category: "Pölynimurit"
    },
    {
      id: 432423,
      category: "Pelikannettavat"
    },
  ]

  return (
    <header className="overflow-hidden w-full" ref={headerRef}>
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
        <Link href="/">
          <a className="text-gray-400 cursor-pointer hover:underline">
            Asiakaspalvelu
          </a>
        </Link>
        <Link href="/">
          <a className="text-giganttiCategoryText cursor-pointer">
            Yksityisasiakas
          </a>
        </Link>
        <Link href="/">
          <a className="text-gray-400 cursor-pointer hover:underline">
            Yritysasiakas
          </a>
        </Link>
      </div>
      <div className="relative flex items-center border border-t-gray-300 border-b-gray-300 h-[72px] xl:h-[100px] xl:pl-6">
        <div className="flex justify-between items-center w-full py-2 px-2 xl:px-6 z-20">
          <div className="flex items-center xl:flex-row mr-4">
            <div className="block xl:hidden">
              <MenuIcon className="transition duration-150 group-hover:scale-110 text-2xl mr-5 ml-2 cursor-pointer" onClick={mobileMenuHandler}/>
            </div>
            
            <div className="relative w-[120px] h-[70px] md:w-[165px] md:h-[70px] transition duration-150 hover:scale-105 cursor-pointer">
              <Link href="/">
                <a>
                <Image
                  src="/gigantti_logo.svg"
                  alt="Gigantti logo"
                  layout="fill"
                  objectFit="contain"
                />
                </a>
              </Link>
            </div>
            <div className="hidden xl:flex px-4 items-center group cursor-pointer text-giganttiBlue 2xl:mr-20 lg:border-l lg:border-gray-300 2xl:ml-4" onClick={menuHandler}>
              {showMenu ? (
                <CloseIcon className="transition duration-150 group-hover:scale-110 text-2xl" />
                ) : (
                  <MenuIcon className="transition duration-150 group-hover:scale-110 text-2xl" />
              )}
              <p className="hidden xl:block pl-2 text-2xl font-semibold select-none">
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

      {/* Desktop menu */}
      <div className={`${showMenu ? "block" : "hidden"} absolute top-[${menuOffset}px] h-full w-full z-50 cartSliderBg shadow-2xl`}>
        <div className="w-full h-[600px] bg-white opacity-100 flex p-6">

          <div className="w-[20%] xl:w-[25%] border-r border-gray-200 overflow-scroll noScrollBar">
            <div>
              <p className="font-bold">Suosituimmat tuoteryhmät - Gigantti</p>
            </div>
            <div className="flex flex-wrap justify-start">
              {menuDataLeft?.map(c => (
                <MenuSingleGroup key={c.id} category={c.category}/>
              ))}
            </div>
          </div>

          <div className="w-[80%] xl:w-[75%] grid grid-cols-4 grid-rows-3 justify-between pl-10 gap-10">
            {menuData?.map(item => (
              <MenuSingleGroupBig key={item.id} item={item}/>
            ))}
          </div>

        </div>
      </div>
      {/* End of desktop menu */}

      <div className={`w-full h-[100vh] overflow-scroll noScrollBar bg-white absolute top-0 left-0 z-50 -translate-x-full transition duration-200 ${showMobileMenu && "-translate-x-0"}`}>
        <div className="flex justify-between p-5 border-b border-gray-300">
          <CloseIcon className="text-gray-400 cursor-pointer" onClick={mobileMenuHandler}/>
          <div className="flex items-center">
          <LocationOnOutlinedIcon className="text-giganttiGreenIcon transition duration-150 group-hover:scale-110" />
            <p className="ml-2 font-semibold text-sm 2xl:text-md">
              Etsi lähin myymälä
            </p>

          </div>

        </div>


        <div className="flex text-giganttiBlue p-4 font-customOpenSans text-sm">
          <div className="border-r border-gray-200 p-2">
            <p>Yksityisasiakas</p>
          </div>
          <div className="p-2">
            <p className="font-bold">Yritystarinat</p>
          </div>

        </div>


        <div className="flex flex-wrap px-4">
        {menuDataLeft?.map(c => (
          <MenuSingleGroup key={c.id} category={c.category}/>
        ))}

        </div>
        <hr className="my-5"/>
        <div className="grid grid-cols-2 grid-rows-6 p-5 gap-4">
        {menuData?.map(item => (
              <MenuSingleGroupBig key={item.id} item={item}/>
            ))}

        </div>

      </div>
    </header>
  );
}

export default Header;


const MenuSingleGroup = ({category}) => {
  return (
      <div className="py-2 xl:py-3 px-4 border border-gray-400 rounded-full flex justify-center items-center uppercase text-giganttiBlue hover:border-black cursor-pointer hover:shadow-inner mt-5 mr-5">
        <p className="font-bold text-sm">{category}</p>
      </div>
  )
}
const MenuSingleGroupBig = ({item}) => {
  return (
    <div className="w-[170px] h-[110px] lg:w-[200px] lg:h-[110px] xl:w-[220px] xl:h-[130px] 2xl:w-[300px] 2xl:h-[160px] relative flex flex-col cursor-pointer group">
      <div className="relative w-full h-[130px]">
        <Image src={item.image} layout="fill" objectFit="cover" alt={item.title}/>
      </div>
      <div className="flex justify-center items-center mt-1">
        <p className="text-sm lg:text-md text-giganttiBlue font-bold">{item.title}</p>
      </div>
    </div>
  )
}

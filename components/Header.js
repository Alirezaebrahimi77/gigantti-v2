import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Search from "./Search";
function Header() {
  const [showBar, setShowBar] = useState(true);
  return (
    <header>
      {showBar && (
        <div className="relative w-full h-[40px] bg-giganttiPink flex justify-center items-center">
          <p className="text-white text-xs md:text-base">
            Ilmainen toimitus kaikkiin nettitilauksiin! Klikkaa tarjouksiin.
          </p>
          <CloseIcon
            className="text-white absolute right-2 cursor-pointer bg-giganttiPink"
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
          <p className="text-giganttiCategoryText cursor-pointer">Yksityisasiakas</p>
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
            <div className="relative w-[120px] h-[70px] md:w-[150px] md:h-[70px] transition duration-150 hover:scale-105 cursor-pointer">
              <Image
                src="/gigantti_logo.svg"
                alt="Gigantti logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="flex px-4 items-center group cursor-pointer">
              <MenuIcon className="transition duration-150 group-hover:scale-110" />
              <p className="hidden xl:block pl-2 text-xl font-semibold">
                Valikko
              </p>
            </div>
          </div>
          <Search className="hidden md:flex" />

          <div className="hidden xl:flex items-center group cursor-pointer">
            <LocationOnOutlinedIcon className="text-giganttiGreenIcon transition duration-150 group-hover:scale-110" />
            <p className="text-giganttiGrayText ml-2 font-semibold text-sm">
              Etsi lähin myymälä
            </p>
          </div>

          <div className="flex items-center group cursor-pointer ml-4">
            <AccountCircleOutlinedIcon className="text-4xl md:text-2xl text-giganttiGreenIcon transition duration-150 group-hover:scale-110" />
            <p className="hidden md:block text-giganttiGrayText ml-2 font-semibold text-sm">
              Kirjaudu
            </p>
          </div>
        </div>

        <div
          className={`relative w-[110px] h-[72px] xl:h-[100px] cart after:border-t-[36px] after:border-t-transparent after:border-b-[36px] after:border-b-transparent xl:after:border-t-[50px] xl:after:border-t-transparent xl:after:border-b-[50px] xl:after:border-b-transparent`}
        >
          <ShoppingCartOutlinedIcon className="text-white text-md ml-6 cursor-pointer transition duration-150 hover:scale-110" />
          
        </div>
      </div>
      <div className="py-3 px-5 md:hidden">
          <Search />
      </div>
    </header>
  );
}

export default Header;

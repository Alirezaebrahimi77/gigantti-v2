import React, { useRef, useState } from "react";
import CategoryItem from './CategoryItem'
import laptop from "../public/categoryImages/laptop.png";
import phones from "../public/categoryImages/puhelimet-ja-kellot.png";
import tv from "../public/categoryImages/kuva-ja-aani.png";
import home from "../public/categoryImages/kodinkoneet.png";
import homeAndGarden from "../public/categoryImages/koti-ja-puutarha.png";
import hygenic from "../public/categoryImages/hygienia.png";
import gaming from "../public/categoryImages/gaming.png";
import epog from "../public/categoryImages/epoq.png";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";

function Category() {
    const category = [
        {
          id: 23432,
          image: laptop,
          title: "Tietokoneet",
        },
        {
          id: 26532,
          image: phones,
          title: "Puhelimet, tabletit ja älykellot",
        },
        {
          id: 27632,
          image: tv,
          title: "TV, ääni ja älykoti",
        },
        {
          id: 13432,
          image: home,
          title: "Kodinkoneet",
        },
        {
          id: 87632,
          image: homeAndGarden,
          title: "Kodin pienkoneet",
        },
        {
          id: 29423,
          image: hygenic,
          title: "Terveys ja Hyvinvointi",
        },
        {
          id: 98723,
          image: gaming,
          title: "Gaming",
        },
        {
          id: 11454,
          image: epog,
          title: "Epoq-keittiö ja -kodinhoitohuone",
        },
      ];
      const ref = useRef();
      const [showRightArrow, setShowRightArrow] = useState(true);
    
      const scrollHandler = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
        setShowRightArrow((prevState) => !prevState);
      };
  return (
    <div className="w-full p-0 m-0 relative overflow-hidden">
    <div
      className="noScrollBar w-full overflow-x-auto flex space-x-24 py-2 px-12 md:py-6 md:space-x-60 scroll-smooth"
      ref={ref}
    >
      {category &&
        category.map((category) => (
          <CategoryItem
            key={category.id}
            id={category.id}
            image={category.image}
            title={category.title}
          />
        ))}
    </div>
    {showRightArrow ? (
      <ArrowComponent scrollHandler={scrollHandler} direction={"right"} />
    ) : (
      <ArrowComponent scrollHandler={scrollHandler} direction={"left"} />
    )}
  </div>
  )
}

export default Category

const ArrowComponent = ({ direction = "right", scrollHandler }) => {
    return (
      <div
        className={`hidden absolute md:w-[60px] md:h-[60px] bg-giganttiCartBgRight ${
          direction === "right"
            ? "right-1 bottom-12 -rotate-3"
            : "left-8 bottom-12 rotate-3"
        } md:flex md:justify-center md:items-center md:translate-x-2 cursor-pointer hover:bg-green-700`}
        onClick={() => scrollHandler(direction === "right" ? 1000 : -1000)}
      >
        {direction === "right" ? (
          <ArrowForwardIosOutlinedIcon className="text-white text-4xl" />
        ) : (
          <ArrowBackIosOutlinedIcon className="text-white text-4xl" />
        )}
      </div>
    );
  };
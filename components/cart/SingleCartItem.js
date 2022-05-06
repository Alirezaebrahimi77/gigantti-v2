import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";
import Imuri from "../../public/products/irobot.png";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddIcon from "@mui/icons-material/Add";
import {incrementQty, decrementQty} from "../../redux/actions/cartActions"
const SingleCartItem = ({ cartItem}) => {

    // const {quantity, setQuantity} = useState(cartItem.quantity)
    // const cartQty = useRef()

    const dispatch = useDispatch()

    const incrementHandler = (id) => {
        dispatch(incrementQty(id))
    }
    const decrementHandler = (id) => {
        dispatch(decrementQty(id))
    }
  
  return (
    <div className="flex flex-col">
      <div className="flex items-center py-4 border-b border-gray-300">
        <div className="relative w-[20%] p-3 flex justify-center items-center">
          <Image
            src={Imuri}
            alt="Cart product"
            width={100}
            height={100}
            objectFit="contain"
          />
        </div>
        <div className="flex flex-col w-[80%]">
          <h3 className="text-lg font-bold font-customBodyTextRegular">
            {cartItem.name}
          </h3>
          <p>Keskusvarastossa</p>
        </div>
      </div>

      <div className="flex justify-between py-4 border-b border-gray-300">
        <div className="flex">
          <div onClick={() => decrementHandler(cartItem.id)} className="flex justify-center items-center w-[26px] h-[26px] rounded-full border border-gray-300 cursor-pointer hover:border-black">
            <RemoveOutlinedIcon className="text-sm" />
          </div>
          <div className="flex relative overflow-hidden shadow-sm mx-2 w-[40px]">
            <input
              type="number"
              className="outline-0 font-bold text-center w-full"
              min={1}
              value={cartItem.quantity}
            />
          </div>
          <div onClick={() => incrementHandler(cartItem.id)} className="flex justify-center items-center w-[24px] h-[24px] rounded-full border border-gray-300 cursor-pointer hover:border-black">
            <AddIcon className="text-sm" />
          </div>
        </div>

        <div className="space-x-2 font-customBodyTextRegular">
          <span className="text-xl font-bold text-gray-400 line-through">
            {cartItem.normalPrice}€
          </span>
          <span className="text-xl font-bold text-black">
            {Number(cartItem.price) * cartItem.quantity}€
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleCartItem
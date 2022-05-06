
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import SingleCartItem from "./SingleCartItem";
function Cart() {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div className="sticky top-0 px-4 md:p-6 w-full 2xl:w-[450px]">
      <div className="w-full pb-8 border-b border-gray-300">
        <h3 className="text-2xl md:text-3xl font-black font-customBodyTextRegular">
          {cartItems.length > 0
            ? `Ostoskorissasi on (${cartItems.reduce((acc, item) => (acc + Number(item.quantity)), 0)} tuotetta)`
            : "Ostoskorisi on tyhjä."}
        </h3>
        <p className="text-gray-500">ID: 100573555</p>
      </div>
      {cartItems.map((cartItem) => (
        <SingleCartItem key={cartItem.id} cartItem={cartItem} />
      ))}

      {cartItems.length > 0 ? (
        <React.Fragment>
          {/* <div className="w-full py-6 border-t-2 border-black flex justify-between">
            <p className="text-lg">Summa ALV</p>
            <p className="text-2xl font-bold">198€</p>
          </div> */}
          <div className="w-full py-6 border-t border-gray-200 flex-col">
            <div className="w-full flex justify-between">
              <p className="text-2xl text-black font-bold font-customBodyTextRegular">
                Summa EUR
              </p>
              <p className="text-5xl text-black font-customHeadlineRegular">
                {cartItems.reduce((acc, item) => (acc + (item.quantity * item.price)),0)}€
              </p>
            </div>
            <div className="">
              <p>Lisää alennuskoodi / lahjakortin numero</p>
            </div>
          </div>
          <button className="w-full rounded-2xl bg-[#6aa334] flex justify-center items-center text-white py-3 text-lg">
            Siirry kassalle
          </button>
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
  );
}

export default Cart;
import React from 'react'
import SingleCartItem from './SingleCartItem'
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

function CartSlider({showCart, setShowCart, cartItems}) {
  return (
    <div className={`w-full h-[100vh] absolute top-0 right-0 z-50 translate-x-full ${ showCart && "translate-x-0 cartSliderBg"} transition duration-50 flex justify-end`}>
    <div className="w-full h-full md:w-[50%] lg:w-[40%] xl:w-[28%] shadow-xl bg-white tansition duration-500 py-10 px-8 flex flex-col">
      <div className="flex justify-between border-b border-gray-200 pb-10">
        <div className='flex flex-row items-center'>
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
            </React.Fragment>
          ) : (
            <h3 className="text-[1.8rem] font-bold">
              Ostoskorisi on tyhjä.
            </h3>
          )}
        </div>
        <CloseRoundedIcon
          className="text-4xl text-gray-500 mt-1 cursor-pointer"
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

  )
}

export default CartSlider
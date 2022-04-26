import Image from "next/image"
import Imuri from "../../public/products/irobot.png"
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddIcon from '@mui/icons-material/Add';
function Cart() {
  return (
    <div className='sticky top-0 px-4 md:p-6 w-full 2xl:w-[450px]'>
        <div className='w-full pb-8 border-b border-gray-300'>
            <h3 className='text-2xl md:text-3xl font-black font-customBodyTextRegular'>Ostoskorissasi on (4 tuotetta)</h3>
            <p className='text-gray-500'>ID: 100573555</p>

        </div>
        <SingleCartItem />
        <SingleCartItem />
       

        
        <div className="w-full py-6 border-t-2 border-black flex justify-between">
            <p className="text-lg">Summa ALV</p>
            <p className="text-2xl font-bold">198€</p>
        </div>
        <div className="w-full py-6 border-t border-gray-200 flex-col">
            <div className="w-full flex justify-between">
                <p className="text-2xl text-black font-bold font-customBodyTextRegular">Summa EUR</p>
                <p className="text-5xl text-black font-customHeadlineRegular">106€</p>

            </div>
            <div className="">
                <p>Lisää alennuskoodi / lahjakortin numero</p>

            </div>


        </div>
        <button className="w-full rounded-2xl bg-[#6aa334] flex justify-center items-center text-white py-3 text-lg">
            Siirry kassalle

        </button>


    </div>
  )
}

export default Cart


const SingleCartItem = () => {
    return (
        <div className="flex flex-col">
            <div className="flex items-center py-4 border-b border-gray-300">
                <div className="relative w-[20%] p-3 flex justify-center items-center">
                    <Image src={Imuri} alt="Cart product" width={100} height={100} objectFit="contain"/>
                </div>
                <div className="flex flex-col w-[80%]">
                    <h3 className="text-lg font-bold font-customBodyTextRegular">Irobot Roomba i6 robotti-imuri i6158 (musta)</h3>
                    <p>Keskusvarastossa</p>
                    
                </div>
            </div>




            <div className="flex justify-between py-4 border-b border-gray-300">
                <div className="flex">
                    <div className="flex justify-center items-center w-[26px] h-[26px] rounded-full border border-gray-300 cursor-pointer hover:border-black"><RemoveOutlinedIcon className="text-sm"/></div>
                    <div className="flex relative overflow-hidden shadow-sm mx-2 w-[40px]">
                        <input type="number" className="outline-0 font-bold text-center w-full" min={1} defaultValue={1}/>

                    </div>
                    <div className="flex justify-center items-center w-[24px] h-[24px] rounded-full border border-gray-300 cursor-pointer hover:border-black"><AddIcon className="text-sm"/></div>

                </div>


                <div className="space-x-2 font-customBodyTextRegular">
                    <span className="text-xl font-bold text-gray-400 line-through">449€</span>
                    <span className="text-xl font-bold text-black">295€</span>

                </div>

            </div>

        </div>
    )
}
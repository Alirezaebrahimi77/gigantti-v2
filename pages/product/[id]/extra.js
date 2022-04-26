// import Layout from "../../../../components/Layout"
import Layout from "../../../components/Layout"
import Head from "next/head"
import { useRouter } from 'next/router'
import SingleProductPage from "../../../components/SingleProductPage"
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import MoreServices from "../../../components/cart/MoreServices";
import Cart from "../../../components/cart/Cart";
const Extra = () => {
    const router = useRouter()
    const backHandler = () => {
      router.back()
    }
    return (
        <Layout>
            <Head>
                <title>Extra page {router.query.id}</title>
            </Head>

            <div className="w-full ">
              <div className="flex flex-col-reverse lg:flex-row w-full max-w-[94%] m-auto py-10">

                <div className="w-full lg:w-[70%] h-full">
                  <div className="w-full flex justify-start items-center text-md group cursor-pointer py-6">
                    <ArrowBackIosNewOutlinedIcon className="text-gray-500 text-sm mr-2" />
                    <p className="text-black underline group:hover:no-underline" onClick={backHandler}>Jatka ostoksia</p>
                  </div>

                  {/* More services component */}
                  <MoreServices backHandler={backHandler}/>

                </div>

                {/* Cart component */}
                <div className="w-full lg:w-[30%]">
                  <Cart />

                </div>





              </div>
              
            </div>
             

            


        </Layout>
    )
}

export default Extra
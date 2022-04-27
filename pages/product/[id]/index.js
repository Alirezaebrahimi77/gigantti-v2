// import Layout from "../../../../components/Layout"
import Layout from "../../../components/Layout"
import Head from "next/head"
import { useRouter } from 'next/router'
import SingleProductPage from "../../../components/SingleProductPage"
import { getProductDetails } from "../../../redux/actions/productActions"
import {wrapper} from "../../../redux/store"
import { useSelector } from "react-redux";
const ProductPage = () => {
    const router = useRouter()
    const { product } = useSelector(state => state.productDetails)
    return (
        <Layout>
            <Head>
                <title>Product page {router.query.id}</title>
            </Head>
                <SingleProductPage product={product}/>

            


        </Layout>
    )
}

export default ProductPage


export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, params}) => {
    await store.dispatch(getProductDetails(req, params.id))
  })
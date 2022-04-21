import Layout from "../../components/Layout"
import Head from "next/head"
import { useRouter } from 'next/router'
import SingleProductPage from "../../components/SingleProductPage"
const ProductPage = () => {
    const router = useRouter()
    return (
        <Layout>
            <Head>
                <title>Product page {router.query.id}</title>
            </Head>
                <SingleProductPage />

            


        </Layout>
    )
}

export default ProductPage
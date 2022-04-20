import Layout from "../../components/Layout"
import Head from "next/head"
import { useRouter } from 'next/router'
const ProductPage = () => {
    const router = useRouter()
    return (
        <Layout>
            <Head>
                <title>Product page {router.query.id}</title>
            </Head>


        </Layout>
    )
}

export default ProductPage
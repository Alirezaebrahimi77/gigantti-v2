import nc from "next-connect"
import dbConnect from "../../../config/dbConnect"
import { allProducts, newProduct } from "../../../controllers/productControllers"
const handler = nc()


dbConnect()
handler.get(allProducts)
handler.post(newProduct)


export default handler
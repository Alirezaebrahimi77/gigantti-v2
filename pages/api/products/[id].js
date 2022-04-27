import nc from "next-connect"
import dbConnect from "../../../config/dbConnect"
import {getSingleProduct } from "../../../controllers/productControllers"
const handler = nc()


dbConnect()
handler.get(getSingleProduct)


export default handler
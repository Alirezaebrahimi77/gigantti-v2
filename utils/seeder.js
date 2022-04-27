const Product = require("../models/product")
const mongoose = require("mongoose")
const products = require("../data/products.json")

const connnectDb = () => {
    if(mongoose.connection.readyState >= 1){
        return
    }
    mongoose.connect("mongodb+srv://gigantti:gigantti@cluster0.gfxfi.mongodb.net/giganttiDB?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then( con => console.log("Connected to database"))

}

const seedProducts = async () => {
    try{
        await Product.deleteMany()
        console.log("Products are deleted");

        await Product.insertMany(products)
        console.log("All products are added");
        process.exit()

    }catch(error){
        console.log(error.message);
        process.exit()
    }
}
connnectDb()
seedProducts()
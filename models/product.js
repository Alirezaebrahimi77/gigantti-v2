import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter product name"],
        trim: true,
        maxlength: [100, 'Product name can not exceed 100 characters']
    },
    productNro:{
        type: Number,
        default: Math.floor(Math.random() * 99999)
    },
    price: {
        type: Number,
        required: [true, "Please enter product final price"],
        maxlength: [5, 'Product final price can not exceed 5 characters'],
        default: 0.0
    },
    normalPrice:{
        type: Number,
        required: [true, "Please enter product normal price"],
        maxlength: [5, 'Product normal price can not exceed 5 characters'],
        default: 0.0
    },
    savePrice:{
        type: Number,
        required: [true, "Please enter product saved amount"],
        maxlength: [5, 'Product saved amount can not exceed 5 characters'],
        default: 0.0
    },

    shortDescription: [{
        descId:{
            type: Number,
            default: Math.floor(Math.random() * 999),
        },
        desc:{
            type: String,
            required: [true, "Please enter product short description"]
        }

    }

    ],
    longDescription:{
        type: String,
        required: [true, "Please enter long description"]
    },
    offerText:{
        type: String,
        required: true,
    },
    offerDetails: {
        type: String,
        required: true
    },
    ratings: {
        type: Number,
        default: 0
    },
    numOfReviews:{
        type: Number
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            },

        }
    ],
    category:{
        type: String,
        required: [true, 'Please select product category'],
        enum: {
            values: [
                'Electronics',
                'Outdoor',
                'Laptop',
                'Accessories',
                'Headphones',
                'Food',
                'Books',
                'Beauty',
                'Sports',
                'Home',
                'Discount'
            ],
            message: 'Please select correct category for product'
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }


})

module.exports =  mongoose.models.Product || mongoose.model("Product", productSchema)
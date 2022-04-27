import Product from "../models/product";

const allProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      success: true,
      count: products.length,
      products,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

// Create new product => /api/products
const newProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

// Get product details => /api/products/:id
const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.query.id)

    if(!product){
      return res.status(404).json({
        success: false,
        error: "Product not founded with this ID",
      });
    }

    res.status(200).json({
      success: true,
      product,
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

export { allProducts, newProduct, getSingleProduct };

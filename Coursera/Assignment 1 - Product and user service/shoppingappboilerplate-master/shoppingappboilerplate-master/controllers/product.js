const User = require('../model/user')
const Product = require('../model/product')

const getProducts = async (req, res) => {
    
    // Write the code to get the product details
    const userId = req.params.userId
    const user = await User.findOne({email:userId})
    if(!user){
        return res.status(404).json({message:"User doesn't exists"})
    }
    const productIdArr=[...user.productList]
    let products=[]
    await Promise.all(productIdArr.map(async (productId)=>{
        const product = await Product.findOne({productId:productId})
        if(!product){
            return res.status(404).json({message:"Unknown product"})
        }
        products.push(product)
    }))
    return res.status(200).json(products)
}

const addProduct = async (req, res) => {
    
    // Write the code to add the product details
    const userId = req.params.userId
    const user = await User.findOne({email:userId})
    if(!user){
        return res.status(404).json({message:"User doesn't exists"})
    }
    const products = await Product.find({})
    const product = await Product.findOne({productId:req.body.productId})
    if (product){
        return res.status(404).json({message:"Product already exists."})
    }
    
    const {productId, productName,productDisc,inStock} = req.body
    const newProduct = await Product.create({productId,productName,productDisc,inStock})
    user.productList.push(productId)
    user.save()
    return res.status(200).json(newProduct)
}

const deleteProduct = async (req, res) => {
    
    // Write the code to delete the product details
    const productId = req.params.productId
    await Product.deleteOne({productId:productId})
    res.status(200).json({message:"Success"})
}

module.exports = { getProducts, addProduct, deleteProduct };
const productService = require('./productService')

function saveProduct(product,done){
    productService.saveProduct(product,done)
}

function getProductById(product,productId,done){
    productService.getProductById(product,productId,done)
}

module.exports = {saveProduct,getProductById}
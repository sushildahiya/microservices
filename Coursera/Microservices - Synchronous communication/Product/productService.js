const productDao = require('./productDAO')

function saveProduct(product,done){
    productDao.saveProduct(product,done)
}

function getProductById(product,productId,done){
    productDao.getProductById(product,productId,done)
}

module.exports= {saveProduct,getProductById}
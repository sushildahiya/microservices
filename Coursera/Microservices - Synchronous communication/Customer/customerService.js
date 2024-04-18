const customerDao = require('./customerDAO')

function saveCustomer(customer,done){
    customerDao.saveCustomer(customer,done)
}

function getCustomerById(customer,customerId,done){
    customerDao.getCustomerById(customer,customerId,done)
}

module.exports= {saveCustomer,getCustomerById}
require('../dbconfig/dbfile')

async function saveCustomer(customer,done){
    const data = await customer.save()
    done(undefined,data)
} 

async function getCustomerById(customer,customerId,done){
    const data=await customer.findOne({customerId})
    done(undefined,data)
}

module.exports = {saveCustomer, getCustomerById}
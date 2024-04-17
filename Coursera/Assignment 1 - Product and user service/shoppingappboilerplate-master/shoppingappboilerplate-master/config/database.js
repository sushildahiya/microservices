const mongoose = require('mongoose');

const Mongo_URI = 'mongodb://0.0.0.0:27017/userproductdb';

exports.connect = () => {

  // Write the code to establish the database connectivity
  mongoose.connect(Mongo_URI,{  useNewUrlParser: true,
    useUnifiedTopology: true }).then(()=>console.log("Database successfully connected.")).catch((err)=>console.log("Database connection failed",err))

};
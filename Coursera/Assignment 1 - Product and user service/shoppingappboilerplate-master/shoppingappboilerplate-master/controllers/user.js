const User = require('../model/user')

const addUser = async (req, res) => {

    // Write the code to add the user
    const {email,username,password} = req.body
    if(!email || !username || !password){
        return res.status(400).json({message:"Email, username,password fields are required"})
    }
    const user = await User.findOne({email:email})
    if(user){
        return res.status(409).json({message:"User already exists."})
    }
    const newUser = await User.create({email,username,password,productList:[]})
    return res.status(201).json(newUser)
}

module.exports = addUser;
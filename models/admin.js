const mongoose = require('mongoose');
const adminSchema = mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    }
},{
    timestamps: true
})

const Admin = mongoose.model('Admin',adminSchema);
module.exports = Admin;
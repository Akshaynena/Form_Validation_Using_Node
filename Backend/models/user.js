const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true
    },
    jobtitle: {
        type: String,
        require: true,
        trim: true
    },
    religion: {
        type: String,
        require: true,
        trim: true
    },
    income: {
        type: String,
        require: true,
        trim: true
    },
    address: {
        type: String,
        require: true,
        trim: true
    },
    mobilenumber: {
        type: String,
        require: true,
        trim: true
    },
}, {timestamps: true});

const User = mongoose.model('user',userSchema);

module.exports = User;
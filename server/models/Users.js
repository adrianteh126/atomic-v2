const mongoose = require('mongoose')
const UsersSchema = new mongoose.Schema({
    user_name: { type: String },
    email: {
        type: String,
        trim: true,
        required: '{PATH} is required!',
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Users = mongoose.model('users', UsersSchema);
module.exports = Users;

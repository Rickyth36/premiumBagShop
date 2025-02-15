const mongoose = require("mongoose");

const ownerSchema = mongoose.Schema({
    fullname: {
        type: String,
        minLength: 3,
        trim:true
    },
    emaill: String,
    password: String,
    cart: {
        type: Array,
        default: []
    },
    isAdmin: Boolean,
    products: {
        type: Array,
        default: []
    },
    contact: Number,
    gstin: String
});

module.exports = mongoose.model("owner", ownerSchema);
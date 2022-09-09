const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {

        title: { type: String, required: true, unique: true },
        desc: { type: String, required: true },
        img: { type: String, required: true },
        productCategory: { type: Array, required: true },
        productType: { type: String, required: true },
        color: { type: String, required: true },
        price: { type: String, required: true },

    },
    { timestamps: true }

);
module.exports = mongoose.model("Product", productSchema);
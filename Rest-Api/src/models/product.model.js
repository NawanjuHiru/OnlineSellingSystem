const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema ({
    code: {
        type: String,
        required: true,
    },

    name: {
        type: String,
        required: true,
    },

    amount: {
        type: Number,
        required: true,
    },

    inStock: {
        type: Number,
        required: true,
    },

    vehicles: [
        {
            type: Schema.Types.ObjectId,
            required: false,
            ref: "Vehicle",
        },
    ],
});

module.exports = Product = mongoose.model("Product", productSchema);
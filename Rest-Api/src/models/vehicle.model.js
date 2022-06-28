const mongoose = require("mongoose");
const { Schema } = mongoose;

const vehicleSchema = new Schema ({
    type: {
        type: String,
        required: true,
    },

    owner: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    product: [
        {
            type: Schema.Types.ObjectId,
            required: false,
            ref: "Product",
        }
    ],
});

module.exports = Vehicle = mongoose.model("Vehicle", vehicleSchema);
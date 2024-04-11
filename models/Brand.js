const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const brandSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    creationYear: {
        type: String,
        required: false,
    },
    country: {
        type: String,
        required: false,
    },
},
    {
        timeStamps: true
    }
);
const Brand = mongoose.model("Brand", brandSchema);
module.exports = { Brand };
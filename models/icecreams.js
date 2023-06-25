const mongoose = require('mongoose');
const { Schema } = mongoose;

const iceCreamSchema = new Schema({
    flavor: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 64
    },
    description: {
        type: String
    },
    ingredients: [{
        ingredient: {
            type: String,
        }
    }]
});

const IceCream = mongoose.model('IceCream', iceCreamSchema);

module.exports = IceCream;

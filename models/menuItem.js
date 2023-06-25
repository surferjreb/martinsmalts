const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = new Schema({
    itemName: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 64
    },
    category: {
        type: String,
        required: true,
        lowercase: true,
        enum: [ 'icecream', 'toppings', 'malts']
    },
    price: {
        type: Number,
        default: 0,
        min: 0
    }
    // stock: [{
    //     stockUnitSize: {
    //         type: String,
    //         enum: ['each', 'gal', 'oz', 'lb']
    //     },
    //     stockUnitAmount: {
    //         type: Number,
    //         min: 0,
    //         default: 0
    //     }
    // }],
});

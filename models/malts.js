const mongoose = require('mongoose');
const { Schema } = mongoose;

const maltSchema = new Schema({
    maltName: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 32
    },
    description: {
        type: String,
    },
    ingredients: [{
        ingredient: {
            type: String
        }
    }]

});

const Malt = mongoose.model('Malt', maltSchema);

module.exports = Malt;
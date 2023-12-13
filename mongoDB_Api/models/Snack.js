const mongoose = require('mongoose')

const Schema = mongoose.Schema


const snackSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    healthy: {
        type: Boolean,
        required: false,
        default: false
    },
    vegetarian: {
        type: Boolean, 
        required: false, 
        default: false
    },
    votes: {
        type: Number, 
        required: false,
        default: 0
    }
}, { timestamps: true })

module.exports = mongoose.model('Snack', snackSchema)
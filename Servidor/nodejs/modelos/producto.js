const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    _id: {
        type: Schema.ObjectId,
        auto:true
    },
    id: {
        type: Number,
    },
    title:{
        type: String,
        required:true
    },
    price:{
        type: Number,
        required:true
    },
    description: {
        type:String
    },
    images: {
        type: [String] 
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category' 
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }   
});

module.exports = mongoose.model('Producto', ProductSchema);

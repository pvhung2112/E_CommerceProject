import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
  name : {
    type : String
  },
  images :{
    type : [String],
    default : []
  },
  amount : {
    type : Number,
    default : 0
  },
  currency : {
    type : String,
    default : "VND"
  },
  description : {
    type : String
  },
  createAt : {
    type : Date,
    default : Date.now
  }

});
export const productModel = mongoose.model('product', productSchema ,'product');

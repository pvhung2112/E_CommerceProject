import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
  title: {
    type: String
  },
  images: {
    type: [String],
    default: []
  },
  position: {
    type: Number
  }
  ,
  stock : {
    type : Number,
    required : true,
    min : 0
  },
  amount: {
    type: Number,
    default: 0
  }
  ,currency: {
    type: String,
    default: "VND"
  }
  ,
  sellerId: {
   type :  Schema.Types.ObjectId,
   ref : "user",
  required : true
  }
  ,
  status : {
    type : String,
    default : "active"
  }
  ,
  description: {
    type: String
  },
  discountPercentage : {
    type: Number,
    min : 0,
    default : 0
  },
   rating: {
      type: Number,
      default: 0
   },

   ratingCount: {
      type: Number,
      default: 0
   },

   sold: {
      type: Number,
      default: 0
   }
  ,
  deleted : {
    type : Date,
    default : null
  }
  ,
  slug : {
   type : String,
   unique : true
}
}, {
  timestamps: true
});
export const productModel = mongoose.model('products', productSchema, 'products');

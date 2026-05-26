import mongoose from 'mongoose';
const { Schema } = mongoose;

const reviewsSchema = new Schema(
    {
        productId : {
            type : Schema.Types.ObjectId,
            ref : "products"
        },
        userId : {
            type : Schema.Types.ObjectId,
            ref : "users"
        },
        comment :{
            type : String
        },
        star : {
            type : Number,
            min : 1,
            max : 5,
            required : true
        }
    }
 
);
export const reviewModel = mongoose.model('reviews', reviewsSchema, 'reviews');


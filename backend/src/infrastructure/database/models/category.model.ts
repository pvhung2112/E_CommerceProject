import mongoose from 'mongoose';
const { Schema } = mongoose;

const categorySchema = new Schema({
  title: {
    type: String
  },
  parentId: {
   type :  Schema.Types.ObjectId,
   ref : "user"
  }
  ,
  status : {
    type : String,
    default : "active"
  }
  ,
  description: {
    type: String
  }
  ,
 deleted: {
    status: {
        type: Boolean,
        default: false
    },
    deletedAt: {
        type: Date,
        default: null
    }
}
  ,
  slug : {
   type : String,
   unique : true
}
}, {
  timestamps: true
});
export const categoryModel = mongoose.model('categories', categorySchema, 'categories');

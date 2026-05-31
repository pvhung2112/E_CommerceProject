import mongoose from 'mongoose';
const { Schema } = mongoose;

const accountSchema = new Schema({
  name : {
    type : String
  },
  rolesId :{
    type : Schema.Types.ObjectId ,
    default : null
  },
  email :{
    type : String,
    unique : true
  },
  address : {
    type : String
  }
  ,
  phone : {
    type : String
  },
  status : {
    type : String,
    enum : ["active", "inactive"],
    default : "active"
  },
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

},{
    timestamps : true
});
export const userModel = mongoose.model('users', accountSchema, 'users');
export const accountModel = mongoose.model('user', accountSchema, 'users');
import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  name : {
    type : String
  },
  roles :{
    type : [String],
    
    default : ["user"]
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
  deleted : {
    type : Date,
    default : null
  }

},{
    timestamps : true
});
export const userModel = mongoose.model('users', userSchema ,'users');
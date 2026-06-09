import mongoose from 'mongoose';
const { Schema } = mongoose;

const permissionSchema = new Schema({
  name: {
    type: String,
    required : true
  },
  group: {
    type: String,
     required : true
  },
  slug : {
   type : String,
   unique : true,
   required : true
}});
export const permissionModel = mongoose.model('permissions', permissionSchema, 'permissions');

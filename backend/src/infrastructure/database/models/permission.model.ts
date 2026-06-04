import mongoose from 'mongoose';
const { Schema } = mongoose;

const permissionSchema = new Schema({
  name: {
    type: String,
    require : true
  },
  group: {
    type: String,
     require : true
  },
  slug : {
   type : String,
   unique : true,
   required : true
}});
export const permissionModel = mongoose.model('permissions', permissionSchema, 'permissions');

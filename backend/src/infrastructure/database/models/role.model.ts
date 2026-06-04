import mongoose from 'mongoose';
const { Schema } = mongoose;

const roleSchema = new Schema({
  name : {
    type : String
  },
  permissionIds :{
    type : [Schema.Types.ObjectId] ,
    default : []
  }
});
export const roleModel = mongoose.model('roles', roleSchema, 'roles');

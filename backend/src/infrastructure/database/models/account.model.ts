import mongoose from 'mongoose';
const { Schema } = mongoose;

const accountSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
     required: true
  },
  password: {  
    type: String,
    required: true
  },
  rolesId: {
    type: Schema.Types.ObjectId,
    ref : "roles",
    default: null
  },
  address: {
    type: String
  },
  phone: {
    type: String
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active"
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
   
  },
  refreshToken : {
    type : String,
    default : null
  }
}, {
  timestamps: true
});

export const accountModel = mongoose.model('accounts', accountSchema, 'accounts');

import {Schema , model , models} from 'mongoose';

const userSchema = new Schema({
  name:{
      type: String,
      required: [true, 'Please provide a name']
  },
  email:{
      type: String,
      required: [true, 'Please provide an email'],
      unique: true
  },
  password:{
      type: String,
      required: [true, 'Please provide a password']
  },
  avatar:{
      type: String,
      default: 'https://www.gravatar.com/avatar/'
  },
  role:{
      type: String,
      enum: ['user', 'admin'],
      default: 'user'
  }
},{
  timestamps: true
})

export default models.User || model('User', userSchema)



import {Schema , model , models} from 'mongoose';

const categorySchema = new Schema({
    title:{
        type: String,
        required: [true, 'Please provide a name']
    },
    image:{
      type:String,
      required:[true]
    }
},{
    timestamps: true
})

export default models.Cat || model('Cat', categorySchema)
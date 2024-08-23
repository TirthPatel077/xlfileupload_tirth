
import mongoose from 'mongoose';
const { Schema } = mongoose;


const personSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId, 
    auto: true ,
    unique : true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address'] 
  },
  dateOfBirth: {
    type: Date,
    required: true
  }
});

const Person = mongoose.model('Person', personSchema);

export default Person;

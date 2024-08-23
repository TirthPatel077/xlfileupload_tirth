
import mongoose from 'mongoose';
const { Schema } = mongoose;
import Person from './Person.js';

const contactSchema = new Schema({
  personId: {
    type: Schema.Types.ObjectId,
    ref: 'Person', 
    required: true
  },
  contactNumber: {
    type: String,
    required: true,
    match: [/^\+?[1-9]\d{1,14}$/, 'Please enter a valid contact number'] 
  }
});


const Contact = mongoose.model('Contact', contactSchema);

export default Contact;

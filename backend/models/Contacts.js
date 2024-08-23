
import mongoose from 'mongoose';
const { Schema } = mongoose;
import Company from './Company.js';

const contactSchema = new Schema({
  personId: {
    type: Schema.Types.ObjectId,
    ref: 'Company', 
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

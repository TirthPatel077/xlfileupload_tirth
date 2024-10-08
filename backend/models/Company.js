
import mongoose from 'mongoose';
const { Schema } = mongoose;


const companySchema = new Schema({
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
  
});

const Company = mongoose.model('Company', companySchema);

export default Company;

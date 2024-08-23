import mongoose from 'mongoose';
import XLSX from 'xlsx';
const XLSX = require('xlsx');
import Company from '../models/Company';
import Contact from '../models/Contacts';
require('./db'); // Ensure MongoDB connection is established

const importData = async () => {
  try {
    // Read the Excel file
    const workbook = XLSX.readFile('data.xlsx');
    const sheetName = workbook.SheetNames[0]; // Assumes data is in the first sheet
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(worksheet);

    const Companymap = new Map();

    for (const row of data) {
      const { name, email, contactNumber } = row;

      // If the email field is missing, skip the row
      if (!email) {
        console.log('Skipping row without email');
        continue;
      }

      // Check if person already exists
      let company = Companymap.get(email);
      if (!company) {
        // Create a new person
        company = new Company({
          name,
          email,
        });

        // Save the person and store their ID
        const savedcompany = await company.save();
        Companymap.set(email, savedcompany._id);
      }

      // Extract CompanyID from map
      const CompanyID = Companymap.get(email);

      // Create a contact if contactNumber is present
      if (contactNumber) {
        const contact = new Contact({
          CompanyID,
          contactNumber
        });

        await contact.save();
      }
    }

    console.log('Data import complete');
  } catch (error) {
    console.error('Error importing data:', error);
  }
};

// Run the import function
importData();

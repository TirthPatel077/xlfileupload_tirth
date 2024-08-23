import xlsx from 'xlsx';
import Company from '../models/Company.js';
import Contact from '../models/Contacts.js';


export const uploadFile = async (req, res) => {

  try {
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }
    const workbook = xlsx.read(req.file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = xlsx.utils.sheet_to_json(worksheet);
    for (let data of jsonData) {
      const { name, email, contactNumber } = data;
      let company = await Company.findOne({ email });

      if (!company) {
        company = new Company({ name, email });
        await company.save();
      }
      const contact = new Contact({
        personId: company._id,
        contactNumber,
      });

      await contact.save();
    }

    res.status(200).send('File processed and data inserted successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while processing the file.');
  }

}

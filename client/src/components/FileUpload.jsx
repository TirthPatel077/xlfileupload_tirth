import React, { useState } from 'react';
import * as XLSX from 'xlsx';

export default function FileUpload() {
  const [excelFile, setExcelFile] = useState(null);
  const [typeError, setTypeError] = useState(null);
  const [excelData, setExcelData] = useState(null);
  const [message, setMessage] = useState('');

  const handleFile = (e) => {
    let fileTypes = [
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'text/csv'
    ];
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (fileTypes.includes(selectedFile.type)) {
        setTypeError(null);
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload = (e) => {
          setExcelFile(e.target.result);
        };
      } else {
        setTypeError('Please select only excel file types');
        setExcelFile(null);
      }
    } else {
      console.log('Please select your file');
    }
  };

  const handleFileSubmit = (e) => {
    e.preventDefault();
    if (excelFile !== null) {
      const workbook = XLSX.read(excelFile, { type: 'buffer' });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      setExcelData(data.slice(0, 10));
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (!excelFile) {
      setMessage('Please select a file to upload.');
      return;
    }

    // Create a new FormData object
    const formData = new FormData();
    formData.append('file', new Blob([excelFile]), 'file.xlsx'); // Use Blob to handle the file data

    try {
      // Make a POST request to the server with the file
      const response = await fetch('http://localhost:8080/api/v1/upload', {
        method: 'POST',
        body: formData, // Send the FormData object
      });

      if (response.ok) {
        setMessage('File uploaded and processed successfully!');
      } else {
        setMessage('Failed to upload the file.');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      setMessage('An error occurred during file upload.');
    }
  };

  return (
    <div className="wrapper">
      <h3>Upload & View Excel Sheets</h3>

      <form className="form-group custom-form" onSubmit={handleFileSubmit}>
        <input type="file" className="form-control" required onChange={handleFile} />
        <button type="submit" className="btn btn-success btn-md">View File</button>
        <button type="button" className="btn btn-success btn-md" onClick={handleUpload}>Upload</button>
        {typeError && (
          <div className="alert alert-danger" role="alert">{typeError}</div>
        )}
        {message && (
          <div className="alert alert-info" role="alert">{message}</div>
        )}
      </form>

      <div className="viewer">
        {excelData ? (
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  {Object.keys(excelData[0]).map((key) => (
                    <th key={key}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {excelData.map((individualExcelData, index) => (
                  <tr key={index}>
                    {Object.keys(individualExcelData).map((key) => (
                      <td key={key}>{individualExcelData[key]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>No File is uploaded yet!</div>
        )}
      </div>
    </div>
  );
}

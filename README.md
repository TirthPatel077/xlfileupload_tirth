# Company and Contact Data Integration

## Overview

This project involves managing company and contact information. The data is imported from an Excel sheet into a database, and the models are defined as follows:

- *Company*: Represents a company with its details.
- *Contact*: Represents a contact person associated with a company.

## Models

### Company

- *id*: Primary key (auto-generated).
- *name*: The name of the company.
- *company_number*: A unique identifier for the company.
- *email*: The company's contact email.

### Contact

- *id*: Primary key (auto-generated).
- *phone*: The contact person's phone number.
- *company_id*: Foreign key linking to the Company model.

## Excel Data Structure

The Excel sheet should have the following columns:

### Companies Sheet

- name: The name of the company.
- contactNumber: Contact Number of the company.
- email: The company's email address.
.

## Installation

1. *Clone the Repository*

   ```
   git clone [https://github.com/yourusername/yourproject.git](https://github.com/TirthPatel077/xlfileupload_tirth)
   ```

2. *Cd to Backend*

    ```
   cd backend
    ```
   
   ```
   npm install
   ```
   
  ```
   npm start
  ```
4. *Cd to client*

   ```
   cd client
   ```

   ```
   npm install
   ```
    
    ```
    npm run dev
   ```


![WhatsApp Image 2024-08-23 at 22 56 49_fb652043](https://github.com/user-attachments/assets/3293320d-9449-4ea2-9dcc-d269e9b8f8bc)

![WhatsApp Image 2024-08-23 at 22 57 06_6814a846](https://github.com/user-attachments/assets/a617296b-74b3-4b1d-9bff-5edcc5ad654b)

![WhatsApp Image 2024-08-23 at 22 57 23_31ffe9a0](https://github.com/user-attachments/assets/1ce47983-e083-4e72-97fd-86f5c8c8ed8b)




   

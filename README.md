# Live Demo:

https://github.com/elizabet-bagdasaryan/contacts/assets/78619349/2a1830d6-78e7-4e0e-824a-58d34c01b540

# Steps to run contacts-api

- `cd contacts-api`
- `npm i`
- `npm start`

# Steps to run the contacts-react-app

- `cd contacts-react-app`
- `npm i`
- `npm run dev`

# Technologies

- Backend: Node.js, Express.js, Sequelize, PostgreSQL, Swagger
- Frontend: React.js, TailwindCSS, Vite

# Contacts API Documentation

This documentation provides information about the API endpoints for managing contacts.

## Contact Schema

The Contact object has the following properties:

- **name**: Contact name (string)
- **email**: Contact email (string, example: example@gmail.com)
- **phoneNumber**: Contact phone number (number)

## ContactResponse Schema

The ContactResponse object has the following properties:

- **id**: Contact ID (integer)
- **name**: Contact name (string)
- **email**: Contact email (string, example: example@gmail.com)
- **phoneNumber**: Contact phone number (number)
- **createdAt**: Create Date (string, format: date)
- **updatedAt**: Update Date (string, format: date)

## Endpoints

### Get all contacts

- **Endpoint**: `/api/contacts`
- **Method**: GET
- **Summary**: Get all contacts
- **Response**:
  - Status 200: Successful operation
    - Content-Type: application/json
    - Body:
      - data: Array of ContactResponse objects
      - status: Success status

### Get a contact by ID

- **Endpoint**: `/api/contact/{id}`
- **Method**: GET
- **Summary**: Get a contact by ID
- **Parameters**:
  - id (path parameter): Contact ID (integer)
- **Responses**:
  - Status 200: Successful operation
    - Content-Type: application/json
    - Body:
      - data: Array of ContactResponse objects
      - status: Success status
  - Status 404: Resource not found

### Create a new contact

- **Endpoint**: `/api/contact`
- **Method**: POST
- **Summary**: Create a new contact
- **Request Body**:
  - Content-Type: application/json
  - Body Schema: Contact object
- **Responses**:
  - Status 201: Contact created successfully
    - Content-Type: application/json
    - Body:
      - data: Array of ContactResponse objects
      - status: Success status

### Update a contact by ID

- **Endpoint**: `/api/contact/{id}`
- **Method**: PUT
- **Summary**: Update a contact by ID
- **Parameters**:
  - id (path parameter): Contact ID (integer)
- **Request Body**:
  - Content-Type: application/json
  - Body Schema: Contact object
- **Responses**:
  - Status 200: Contact updated successfully
    - Content-Type: application/json
    - Body:
      - status: Success status
  - Status 404: Resource not found

### Delete a contact by ID

- **Endpoint**: `/api/contact/{id}`
- **Method**: DELETE
- **Summary**: Delete a contact by ID
- **Parameters**:
  - id (path parameter): Contact ID (integer)
- **Responses**:
  - Status 200: Contact deleted successfully
    - Content-Type: application/json
    - Body:
      - status: Success status
  - Status 404: Resource not found

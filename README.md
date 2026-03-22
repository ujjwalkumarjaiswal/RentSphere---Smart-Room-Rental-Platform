# RentSphere - Smart Room Rental Platform

A full-stack web application for smart room and property rentals, built with React for the frontend and Node.js/Express for the backend, using MongoDB as the database.

## Features

- User authentication (register, login)
- Property listing and management
- Contact functionality
- File uploads for property images
- Responsive design

## Tech Stack

### Frontend
- React
- React Router DOM
- Axios for API calls
- CSS for styling

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Multer for file uploads
- bcryptjs for password hashing

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- Git

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/ujjwalkumarjaiswal/RentSphere---Smart-Room-Rental-Platform.git
   cd RentSphere---Smart-Room-Rental-Platform
   ```

2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the `backend` directory
   - Add your MongoDB connection string:
     ```
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```

5. Start the backend server:
   ```bash
   cd backend
   npm start
   ```
   The backend will run on `http://localhost:5000` (assuming default port).

6. Start the frontend:
   ```bash
   cd frontend
   npm start
   ```
   The frontend will run on `http://localhost:3000`.

## Usage

- Open your browser and navigate to `http://localhost:3000`
- Register a new account or login
- Browse and add properties
- Use the contact feature

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Properties
- `GET /api/property` - Get all properties
- `POST /api/property` - Add a new property (requires auth)
- `PUT /api/property/:id` - Update property
- `DELETE /api/property/:id` - Delete property

### Contact
- `POST /api/contact` - Send contact message

## Project Structure

```
RentSphere---Smart-Room-Rental-Platform/
├── backend/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── services/
│   ├── package.json
│   └── README.md
├── .gitignore
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Contact

Ujjwal Kumar Jaiswal - [Your Email or LinkedIn]

Project Link: [https://github.com/ujjwalkumarjaiswal/RentSphere---Smart-Room-Rental-Platform](https://github.com/ujjwalkumarjaiswal/RentSphere---Smart-Room-Rental-Platform)</content>
<parameter name="filePath">c:\Projects\Smart Rentals\README.md
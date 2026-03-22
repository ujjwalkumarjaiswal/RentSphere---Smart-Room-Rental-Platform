# RentSphere - Smart Room Rental Platform

A full-stack web application for smart room and property rentals, built with React for the frontend and Node.js/Express for the backend, using MongoDB as the database.

## Features

- 👤 **Authentication**
  - User Registration (Tenant / Owner)
  - User Login with JWT Authentication
  - Secure Password Hashing (bcrypt)
  - Protected Routes

- 🏠 **Property Management**
  - Add Property (Owner Only)
  - Upload Property Images
  - View All Properties
  - View Owner Details

- 💬 **Contact System**
  - Tenant can send message to owner
  - Messages stored securely in database

- 🖼 **Image Upload**
  - Image upload using Multer
  - Stored in backend uploads folder

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

## How It Works

1. User registers and logs in.
2. JWT token is generated and stored in browser.
3. Owners can add properties.
4. Properties are displayed on homepage.
5. Tenants can contact property owners.
6. Images are uploaded and stored on server.

## 🔒 Security Features

- Password hashing with bcrypt
- JWT-based authentication
- Protected routes
- Role-based logic (Owner / Tenant)

## 📈 Future Improvements

- Owner Dashboard
- Message Inbox
- Online Booking System
- Payment Integration
- Google Maps Integration
- Cloud Image Storage (Cloudinary)
- UI Improvement with Tailwind CSS

## 👨‍💻 Author

**Ujjwal Jaiswal**  
Full Stack MERN Developer (Learning & Building 🚀)

## License

This project is licensed under the ISC License .
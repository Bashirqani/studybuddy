StudyBuddy - Capstone Project
📚 Project Overview

StudyBuddy is a full-stack web application designed to help students manage their studies effectively. The app allows users to:

Create and manage personal notes.
Automatically generate flashcards based on saved notes.
Track learning progress with a "Mark as Learned" feature.
Toggle between light and dark modes for better visual experience.
This project showcases my full-stack development skills using:
Backend: Node.js, Express.js, MongoDB (Atlas)
Frontend: React, React Router, Axios
Authentication: JWT, bcryptjs

 Features
 User Authentication (Register & Login)
 Secure password hashing with bcrypt
 Notes: Create, Read, Delete
 Flashcards auto-generated from notes
 Mark flashcards as "Learned"
 Light/Dark mode toggle
 Responsive UI for mobile and desktop
 Welcome message on first login with usage instructions
 Installation Instructions
1. Clone the Repository
git clone https://github.com/Bashirqani/studybuddy.git

2. Setup the Backend
cd studybuddy-backend
npm install
Create a .env file inside studybuddy-backend:
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret_key
Run the backend server:
npm run dev
Backend will run at: http://localhost:5000

3. Setup the Frontend
In a new terminal:
cd ../studybuddy-frontend
npm install
npm start
Frontend will run at: http://localhost:3001

 Usage
Register a new account or Login.
Create notes in the Notes tab.
Visit Flashcards to see flashcards based on your notes.
Click on a flashcard to flip it and mark it as learned.
Toggle between Light/Dark mode via the Navbar.
Logout securely from the Navbar.

Technologies Used
Frontend: React, Axios, CSS
Backend: Node.js, Express, MongoDB, Mongoose
Authentication: JWT, bcryptjs
Deployment: Render.com (Backend & Frontend)

Future Improvements
Edit/Update notes
Flashcard quiz mode
User profile management
Deploy with custom domain & HTTPS
Pagination for large number of notes/flashcards


🔗 Live Application
Live Frontend: https://studybuddy-frontend-1f2h.onrender.com
Live Backend: https://studybuddy-backend-79v2.onrender.com


👤 Author
Name: Bashir Qudratullah
Program: Software Development Course
Contact: bashirqani28@gmail.com









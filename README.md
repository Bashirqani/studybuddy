# StudyBuddy - Capstone Project

##  Project Overview
tudyBuddy is a full-stack web application designed to help students manage their studies effectively. The app allows users to:
- Create and manage personal notes.
- Automatically generate flashcards based on saved notes.
- Track learning progress with features like "Mark as Learned."
- Toggle between light and dark modes for a better visual experience.

This project demonstrates my skills in full-stack development, including backend (Node.js, Express, MongoDB) and frontend (React) technologies.



##  Features
- User Authentication (Register & Login)
- Secure password hashing
- Notes CRUD operations (Create, Read, Delete)
- Dynamic Flashcard generation from notes
- Mark as Learned flashcard feature
- Dark/Light mode toggle
- Responsive UI for mobile and desktop
- Welcome message with instructions on first login



## Installation Instructions
### 1. Clone the Repository
```bash
git clone https://github.com/Bashirqani/studybuddy.git
2. Setup the Backend
cd studybuddy-backend
npm install
Create a .env file in studybuddy-backend with:
MONGO_URI=mongodb://localhost:27017/StudyBuddy
JWT_SECRET=StudyBuddy007

Run the backend:
npm run dev


3. Setup the Frontend
In a new terminal tab:
cd ../studybuddy-frontend
npm install
npm start
The frontend runs on: http://localhost:3001
The backend runs on: http://localhost:5000

Usage
Register an account or log in.
Start adding Notes from the Notes tab.
Go to Flashcards to see auto-generated flashcards from your notes.
Click flashcards to flip them, and mark them as Learned.
Use the Dark/Light mode toggle from the navbar.
Logout anytime via the Logout button.

Technologies Used
Frontend: React, Axios, CSS
Backend: Node.js, Express, MongoDB, Mongoose
Authentication: JWT, bcrypt
Deployment: (Optional if deployed, else remove)

Future Improvements
Edit/Update notes
Flashcard quiz mode
User profile management
Deploy with full HTTPS & custom domain


Development Log (Devlog)
Week 1
Set up backend and MongoDB connection.

Built user registration and login.

Week 2
Developed note-taking functionality.

Integrated JWT authentication.

Week 3
Built frontend with React.

Styled with CSS, added dark/light mode.

Week 4
Implemented flashcard auto-generation.

Added "Mark as Learned".

Handled UI polish and responsiveness.

GitHub repository and deployment.


Live Application


Author
Name: Bashir Qudratullah
Program: Software Development Course
Contact: bashirqani28@gmail.com







require("dotenv").config();
const express = require("express"); 
const cors = require("cors"); 
const mongoose = require("mongoose"); 


const authRoutes = require("./routes/authRoutes"); 
const noteRoutes = require("./routes/noteRoutes");



const allowedOrigins = [
  "https://studybuddy-frontend-1f2h.onrender.com", // your actual frontend URL on Render
  "http://localhost:3001" // for local development
];

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));



const app = express(); 
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "DELETE", "PUT"],
  allowedHeaders: ["Content-Type", "Authorization"]
})); 
app.use(express.json()); 

app.options('*', cors());


// Routes
app.use("/api/auth", authRoutes); 
app.use("/api/notes", noteRoutes);
  

// Connecting to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err)); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`); 
});
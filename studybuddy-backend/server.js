require("dotenv").config();
const express = require("express"); 
const cors = require("cors"); 
const mongoose = require("mongoose"); 

const authRoutes = require("./routes/authRoutes"); 
const noteRoutes = require("./routes/noteRoutes");

const app = express();

const allowedOrigins = [
  "https://studybuddy-frontend-1f2h.onrender.com", 
  "http://localhost:3001"
];

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

// Routes
app.use("/api/auth", authRoutes); 
app.use("/api/notes", noteRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

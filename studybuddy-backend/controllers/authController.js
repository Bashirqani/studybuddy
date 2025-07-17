const User = require("../models/User"); 
const bcrypt = require("bcryptjs"); 
const jwt = require("jsonwebtoken"); 

exports.register = async (req, res) => {
    const { username, email, password } = req.body; 
    try {
        const existingUser = await User.findOne({ email }); 
        if (existingUser) return res.status(400).json({msg: "User already exists"}); 

        const hashedPassword = await bcrypt.hash(password, 10); 
        const user = new User({ username, email, password: hashedPassword });
        await user.save(); 
        
        res.status(201).json({ msg: "User registered successfully" }); 
    } catch (err) {
        res.status(500).json({ error: err.message }); 
    }
}; 

exports.login = async (req, res) => {
  console.log("Login route hit with body:", req.body);
  const { email, password } = req.body;
  
  try {
    console.log("Finding user with email:", email);
    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found");
      return res.status(400).json({ msg: "User not found" });
    }

    console.log("Checking password...");
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Password mismatch");
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    console.log("Generating token...");
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    console.log("Login successful");
    res.json({
      token,
      user: { id: user._id, username: user.username, email: user.email },
    });

  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: err.message });
  }
};

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Notes from "./pages/Notes";
import Flashcards from "./pages/Flashcards";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import "./styles.css";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route path="/notes" element={
          <PrivateRoute>
            <Notes />
          </PrivateRoute>
        } />
        <Route path="/flashcards" element={
          <PrivateRoute>
            <Flashcards />
          </PrivateRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;



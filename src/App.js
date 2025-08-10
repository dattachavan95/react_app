//import Card from './Card'
import Profile from './Profile';
import './App.css';
import BlogList from "./BlogList/BlogList"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
   <Router>
     
      <Routes>
       
        <Route path="/" element={<Profile />} />
        <Route path="/blog" element={<BlogList />} />

        
      </Routes>
    </Router>
  );
}

export default App;

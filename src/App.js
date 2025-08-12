//import Card from './Card'
import Profile from './Profile';
import './App.css';
import WorkDetails from './WorkDetails'
import BlogList from "./BlogList";
import { Routes, Route } from "react-router-dom";
import FeaturedWorks from './FeaturedWorks';



function App() {
  return (
    <Routes>



      <Route path="/" element={<Profile />} />
      <Route path="/blog" element={<BlogList />} />
      <Route path="/work" element={< FeaturedWorks/>} />
      <Route path="/contact" element={<WorkDetails />} />



    </Routes>
  );
}

export default App;

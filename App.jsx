import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Pages from './Pages/Pages';
import Courses from './Pages/Courses';
import Portfolio from './Pages/Portfolio';
import Blog from './Pages/Blog';
import ContactUs from './Pages/ContactUs';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/blog" element={<Blog/>} />
        
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;






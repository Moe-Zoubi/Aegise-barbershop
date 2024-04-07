import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Blog from './pages/blog';
import Services from './pages/services';
import Testimonies from './pages/testimonies';
import Contacts from './pages/contacts';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/testimonials' element={<Testimonies />} />
            <Route path='/contacts' element={<Contacts />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

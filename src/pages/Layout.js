import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from '../components/Nav';
import ProjectsPage from './ProjectsPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import WeddingPage from './WeddingPage';


const Layout = () => {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={ <ContactPage/> } />
        <Route path="/wedding" element={ <WeddingPage/> } />
        <Route path="/" element={ <AboutPage/> } />
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;

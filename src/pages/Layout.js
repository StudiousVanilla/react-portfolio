import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from '../components/Nav';
import ProjectsPage from './ProjectsPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import Pic from '../components/Pic';


const Layout = () => {
  return (
    <BrowserRouter>
    <Nav/>

      <Routes>
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={ <ContactPage/> } />
        <Route path="/" element={ <Pic/> } />
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;

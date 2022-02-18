import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import ProjectsPage from './ProjectsPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';

const Layout = () => {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={ <ContactPage/> } />
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SectorsPage } from './pages/SectorsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { MediaPage } from './pages/MediaPage';
import { ContactPage } from './pages/ContactPage';
import { CustomCursor } from './components/CustomCursor';
import React from 'react'; 
export default function App() {
  return (
    <>
      <CustomCursor />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/sectors" element={<SectorsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </>
  );
}
import { Routes, Route, useLocation } from 'react-router-dom';
import HeroSection from './Sections/Hero'
import AboutSection from './Sections/About'
import ProjectsSection from './Sections/Projects'
import ContactSection from './Sections/Contact'
import styles from './App.module.less'
import {HeroBackground} from "./Sections/Hero/HeroBackground";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <main onMouseMove={(e):void => {
        if (isHomePage) {
          e.stopPropagation();
          const canvas: HTMLElement | null = document.getElementById("canvas");
          canvas?.dispatchEvent(new MouseEvent('mousemove', {
              clientX: e.clientX,
              clientY: e.clientY,
              bubbles: false,
          }));
        }
    }}>
        {isHomePage && (
          <div className={styles.canvas_container}>
            <HeroBackground />
          </div>
        )}
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/projects" element={<ProjectsSection />} />
          <Route path="/contact" element={<ContactSection />} />
        </Routes>
    </main>
  )
}

export default App

import { useState } from 'react';
import HeroSection from './Sections/Hero'
import AboutSection from './Sections/About'
import styles from './App.module.less'
import {HeroBackground} from "./Sections/Hero/HeroBackground";

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'projects' | 'contact'>('home');

  const handleNavigate = (page: string) => {
    if (page === 'about') {
      setCurrentPage('about');
    } else if (page === 'home') {
      setCurrentPage('home');
    } else {
      // For now, just handle about and home
      setCurrentPage(page as 'home' | 'about' | 'projects' | 'contact');
    }
  };

  return (
    <main onMouseMove={(e):void => {
        if (currentPage === 'home') {
          e.stopPropagation();
          const canvas: HTMLElement | null = document.getElementById("canvas");
          canvas?.dispatchEvent(new MouseEvent('mousemove', {
              clientX: e.clientX,
              clientY: e.clientY,
              bubbles: false,
          }));
        }
    }}>
        {currentPage === 'home' && (
          <div className={styles.canvas_container}>
            <HeroBackground />
          </div>
        )}
        {currentPage === 'home' && <HeroSection onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutSection onNavigate={handleNavigate} />}
    </main>
  )
}

export default App

import HeroSection from './Sections/Hero'
import styles from './App.module.less'
import {HeroBackground} from "./Sections/Hero/ParallaxBackground";

function App() {
  return (
    <main onMouseMove={(e):void => {
        e.stopPropagation();
        const canvas: HTMLElement | null = document.getElementById("canvas");
        canvas?.dispatchEvent(new MouseEvent('mousemove', {
            clientX: e.clientX,
            clientY: e.clientY,
            bubbles: false,
        }));
    }}>
        <div className={styles.canvas_container}>
            <HeroBackground />
        </div>
      <HeroSection />
    </main>
  )
}

export default App

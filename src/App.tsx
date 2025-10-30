import HeroSection from './Sections/Hero'
import styles from './App.module.less'
import {HeroBackground} from "./Sections/Hero/ParallaxBackground";

function App() {

  return (
    <main>
        <div className={styles.canvas_container}>
            <HeroBackground />
        </div>
      <HeroSection />
    </main>
  )
}

export default App

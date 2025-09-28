import type { ReactElement } from "react";
import styles from "./hero.module.less";
import {HeroBackground} from "./ParallaxBackground";

function HeroSection(): ReactElement {

    return (
        <section className={styles.section}>
            <div className={styles.half}>
                <HeroBackground />
            </div>
            <div className={styles.text} >
                Welcome.
            </div>
        </section>
    )
}

export default HeroSection

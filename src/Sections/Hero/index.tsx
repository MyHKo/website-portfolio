import type { ReactElement } from "react";
import styles from "./hero.module.less";
import {HeroBackground} from "./ParallaxBackground";

function HeroSection(): ReactElement {

    return (
        <section className={styles.section}>
            <div className={styles.half}>
                <HeroBackground />
            </div>
            <span className={styles.text} >
                Welcome.
            </span>
        </section>
    )
}

export default HeroSection

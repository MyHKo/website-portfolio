import {type MouseEventHandler, type ReactElement} from "react";
import styles from "./hero.module.less";
import {HeroBackground} from "./ParallaxBackground";

function HeroSection(): ReactElement {
    const canvas:HTMLElement|null = document.getElementById("canvas");

    return (
        <section className={styles.section}>
            <div className={styles.half}>
            <HeroBackground />
            </div>
            <div onClick={(event) => {
                if(canvas)
                    canvas.dispatchEvent(event);
            }} className={styles.header_container}>
                <span className={styles.text_header} >
                Welcome.
            </span>
            </div>
            <span className={styles.text}>
                Let this website be my window to talk to the world and share what have I done.
                I am a software developer, who sees writing code as an art.
                It is a wonderful possibility to express oneself as well as help others express their ideas.
            </span>
        </section>
    )
}

export default HeroSection

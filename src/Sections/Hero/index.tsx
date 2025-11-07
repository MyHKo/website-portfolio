import {type ReactElement} from "react";
import styles from "./hero.module.less";
import NavBar from "./NavBar";

function HeroSection(): ReactElement {

    return (
        <section className={styles.section}>
            <div className={styles.header_container}>
                <span className={styles.text_header} >
                Welcome.
            </span>
            </div>
            <span className={styles.text}>
                Let this website be my window to talk to the world and share what have I done.
                I am a software developer, who sees writing code as an art.
                It is a wonderful possibility to express oneself as well as help others express their ideas.
            </span>
            <NavBar />
        </section>
    )
}

export default HeroSection

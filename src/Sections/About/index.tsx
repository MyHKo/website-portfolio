import {type ReactElement} from "react";
import styles from "./about.module.less";
import HeaderNavBar from "./HeaderNavBar";
import StaticBackground from "../../backgrounds/StaticBackground";

function AboutSection(): ReactElement {
    return (
        <>
            <StaticBackground />
            <HeaderNavBar />
            <section className={styles.section}>
                <div className={styles.header_container}>
                    <span className={styles.text_header}>
                        About.
                    </span>
                </div>
                <span className={styles.text}>
                    Let this website be my window to talk to the world and share what have I done.
                    I am a software developer, who sees writing code as an art.
                    It is a wonderful possibility to express oneself as well as help others express their ideas.
                </span>
            </section>
        </>
    )
}

export default AboutSection


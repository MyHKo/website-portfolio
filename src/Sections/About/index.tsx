import {type ReactElement} from "react";
import sharedStyles from "../../styles/sharedStaticStyles.module.less";
import HeaderNavBar from "../HeaderNavBar";
import StaticBackground from "../../backgrounds/StaticBackground";

function AboutSection(): ReactElement {
    return (
        <>
            <StaticBackground />
            <HeaderNavBar />
            <section className={sharedStyles.section}>
                <div className={sharedStyles.header_container}>
                    <span className={sharedStyles.text_header}>
                        About.
                    </span>
                </div>
                <span className={sharedStyles.text}>
                    Let this website be my window to talk to the world and share what have I done.
                    I am a software developer, who sees writing code as an art.
                    It is a wonderful possibility to express oneself as well as help others express their ideas.
                </span>
            </section>
        </>
    )
}

export default AboutSection


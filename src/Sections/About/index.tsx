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
                    I'm Nick. A passion-driven fullstack developer, who helps other to bring their ideas to life.
                    With my hands I build projects with great and engaging user-experiences.
                    My solutions are optimized, reliable and secure.
                </span>
            </section>
        </>
    )
}

export default AboutSection


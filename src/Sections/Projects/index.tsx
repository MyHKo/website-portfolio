import {type ReactElement} from "react";
import styles from "./projects.module.less";
import HeaderNavBar from "../HeaderNavBar";
import StaticBackground from "../../backgrounds/StaticBackground";

function ProjectsSection(): ReactElement {
    return (
        <>
            <StaticBackground />
            <HeaderNavBar />
            <section className={styles.section}>
                <div className={styles.header_container}>
                    <span className={styles.text_header}>
                        Projects.
                    </span>
                </div>
                <span className={styles.text}>
                    Here you will find my projects and work.
                </span>
            </section>
        </>
    )
}

export default ProjectsSection


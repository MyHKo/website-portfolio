import {type ReactElement} from "react";
import styles from "./projects.module.less";
import HeaderNavBar from "../HeaderNavBar";
import StaticBackground from "../../backgrounds/StaticBackground";
import ProjectItem from "./ProjectItem/ProjectItem";
import diplomaImg from "../../Assets/projects_images/diploma/diploma_1.png";


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
                <div className={styles.projectsContainer}>
                    <ProjectItem name="SocialSphere"
                                 description="SocialSphere is a project created alongside the diploma thesis.
                    It is a social media application, which allows users to create and interact with posts.
                    The application is built using JavaScript + React and Java + Spring.
                    Backend communicates with a database, which is PostgreSQL.
                    Everything can be containerized and deployed using Docker."
                                 imageUrl={diplomaImg} />
                </div>
            </section>
        </>
    )
}

export default ProjectsSection


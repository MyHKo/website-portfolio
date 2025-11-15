import {type ReactElement} from "react";
import styles from "./projects.module.less";
import sharedStyles from "../../styles/sharedStaticStyles.module.less";
import HeaderNavBar from "../HeaderNavBar";
import StaticBackground from "../../backgrounds/StaticBackground";
import ProjectItem from "./ProjectItem/ProjectItem";
import diplomaImg from "../../Assets/projects_images/diploma/diploma_1.png";
import wiewwImg from "../../Assets/projects_images/wieww/wieww_1.png";


function ProjectsSection(): ReactElement {
    return (
        <>
            <StaticBackground />
            <HeaderNavBar />
            <section className={sharedStyles.section}>
                <div className={sharedStyles.header_container}>
                    <span className={sharedStyles.text_header}>
                        Projects.
                    </span>
                </div>
                <span className={sharedStyles.text}>
                    Here you will find a list of projects I've worked on.
                </span>
                <div className={styles.projectsContainer}>
                    <ProjectItem name="SocialSphere"
                                 description="SocialSphere is a project created alongside the diploma thesis.
                    It is a social media application, which allows users to create and interact with posts.
                    The application is built using JavaScript + React and Java + Spring.
                    Backend communicates with a database, which is PostgreSQL.
                    Everything can be containerized and deployed using Docker."
                                 imageUrl={diplomaImg} githubUrl={"https://github.com/MyHKo/social-app-diploma"} />
                    <ProjectItem name="Wieww"
                                 description="Wieww is simple, yet stylish project.
                                 It is a great example of how can CSS be powerful on its own.
                                 The initial design was carefully mapped as the static website using styles and raw HTML.
                                 Several background of different sizes and media queries allow it to a user's screen size."
                                 imageUrl={wiewwImg} githubUrl={"https://github.com/MyHKo/wieww"} />
                </div>
            </section>
        </>
    )
}

export default ProjectsSection


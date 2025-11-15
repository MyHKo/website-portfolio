import {type ReactElement} from "react";
import sharedStyles from "../../styles/sharedStaticStyles.module.less";
import styles from "./contact.module.css"
import HeaderNavBar from "../HeaderNavBar";
import IconLink from "../components/IconLink/IconLink.tsx";
import gitHubIcon from "../../icons/githubIcon.tsx";
import linkedInIcon from "../../icons/linkedInIcon.tsx";

function ContactSection(): ReactElement {

    return (
        <>
            <HeaderNavBar />
            <section className={sharedStyles.section}>
                <div className={sharedStyles.header_container}>
                    <span className={sharedStyles.text_header}>
                        Contact.
                    </span>
                </div>
                <span className={sharedStyles.text}>
                    Get in touch with me.
                </span>
                <div className={styles.linksContainer}>
                    <IconLink icon={gitHubIcon} url={"https://github.org/MyHKo"}/>
                    <IconLink icon={linkedInIcon} url={"https://www.linkedin.com/in/mykola-horbenko-a07b63273"}/>
                </div>
            </section>
        </>
    )
}

export default ContactSection


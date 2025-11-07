import {type ReactElement} from "react";
import styles from "./contact.module.less";
import HeaderNavBar from "../HeaderNavBar";
import StaticBackground from "../../backgrounds/StaticBackground";

function ContactSection(): ReactElement {
    return (
        <>
            <StaticBackground />
            <HeaderNavBar />
            <section className={styles.section}>
                <div className={styles.header_container}>
                    <span className={styles.text_header}>
                        Contact.
                    </span>
                </div>
                <span className={styles.text}>
                    Get in touch with me.
                </span>
            </section>
        </>
    )
}

export default ContactSection


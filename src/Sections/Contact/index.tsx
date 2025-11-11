import {type ReactElement} from "react";
import sharedStyles from "../../styles/sharedStaticStyles.module.less";
import HeaderNavBar from "../HeaderNavBar";
import StaticBackground from "../../backgrounds/StaticBackground";

function ContactSection(): ReactElement {
    return (
        <>
            <StaticBackground />
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
            </section>
        </>
    )
}

export default ContactSection


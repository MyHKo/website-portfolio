import {type ReactElement} from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./headerNavBar.module.less";

function HeaderNavBar(): ReactElement {
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;
    
    return (
        <nav className={styles.headerNavbar}>
            <ul className={styles.list}>
                <li>
                    <Link
                        to="/"
                        className={`${styles.link} ${styles.homeLink} ${isActive('/') ? styles.linkActive : ''}`.trim()}
                    >
                        <svg
                            aria-hidden="true"
                            className={styles.homeArrow}
                            viewBox="0 0 1024 1024"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
                                fill="currentColor"
                            />
                        </svg>
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/about"
                        className={`${styles.link} ${isActive('/about') ? styles.linkActive : ''}`.trim()}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        to="/projects"
                        className={`${styles.link} ${isActive('/projects') ? styles.linkActive : ''}`.trim()}
                    >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link
                        to="/contact"
                        className={`${styles.link} ${isActive('/contact') ? styles.linkActive : ''}`.trim()}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default HeaderNavBar;


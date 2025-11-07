import { Link } from "react-router-dom";
import styles from "./navbar.module.less"

function Navbar() {

    return (
        <nav className={styles.navbar}>
            <div className={`${styles.brace} ${styles.leftUp}`}></div>
            <div className={`${styles.brace} ${styles.leftDown}`}></div>
            <div className={`${styles.brace} ${styles.rightUp}`}></div>
            <div className={`${styles.brace} ${styles.rightDown}`}></div>
            <ul className={styles.list}>
                <li>
                    <Link to="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/projects">
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;

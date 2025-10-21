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
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Projects</a>
                </li>
                <li>
                    <a href="/">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;

import styles from "./navbar.module.less"

function Navbar() {

    return (
        <nav className={styles.navbar}>
            <div className={styles.braceLeft}></div>
            <div className={styles.braceRight}></div>
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

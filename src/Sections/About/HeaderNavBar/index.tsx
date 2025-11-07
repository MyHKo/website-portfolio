import {type ReactElement} from "react";
import styles from "./headerNavBar.module.less";

interface HeaderNavBarProps {
    onNavigate: (page: string) => void;
}

function HeaderNavBar({ onNavigate }: HeaderNavBarProps): ReactElement {
    return (
        <nav className={styles.headerNavbar}>
            <ul className={styles.list}>
                <li>
                    <a 
                        href="#" 
                        onClick={(e) => {
                            e.preventDefault();
                            onNavigate('about');
                        }}
                        style={{ color: '#006BA6', cursor: 'default' }}
                    >
                        About
                    </a>
                </li>
                <li>
                    <a 
                        href="#" 
                        onClick={(e) => {
                            e.preventDefault();
                            onNavigate('projects');
                        }}
                    >
                        Projects
                    </a>
                </li>
                <li>
                    <a 
                        href="#" 
                        onClick={(e) => {
                            e.preventDefault();
                            onNavigate('contact');
                        }}
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default HeaderNavBar;


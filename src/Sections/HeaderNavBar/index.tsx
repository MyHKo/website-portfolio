import {type ReactElement} from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./headerNavBar.module.less";

function HeaderNavBar(): ReactElement {
    const location = useLocation();
    
    return (
        <nav className={styles.headerNavbar}>
            <ul className={styles.list}>
                <li>
                    <Link 
                        to="/about"
                        style={{ 
                            color: location.pathname === '/about' ? '#006BA6' : '#333',
                            cursor: location.pathname === '/about' ? 'default' : 'pointer'
                        }}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/projects"
                        style={{ 
                            color: location.pathname === '/projects' ? '#006BA6' : '#333',
                            cursor: location.pathname === '/projects' ? 'default' : 'pointer'
                        }}
                    >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/contact"
                        style={{ 
                            color: location.pathname === '/contact' ? '#006BA6' : '#333',
                            cursor: location.pathname === '/contact' ? 'default' : 'pointer'
                        }}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default HeaderNavBar;


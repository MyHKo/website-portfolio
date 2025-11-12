import React from 'react';
import styles from './iconLink.module.less';

interface IconLinkProps {
    icon: React.ReactNode;
    url: string;
}

const IconLink: React.FC<IconLinkProps> = ({ icon, url }) => {
    const handleClick = () => {
        window.open(url, '_blank'); // open in a new tab
    };

    return (
        <div className={styles.iconWrapper} onClick={handleClick}>
            <div className={styles.icon}></div>
            {icon}
        </div>
);
};

export default IconLink;
import React, { useState } from 'react';
import styles from './projectItem.module.less';

interface ProjectItemProps {
    imageUrl: string;
    videoUrl?: string;
    name: string;
    description: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ imageUrl, videoUrl, name, description }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`${styles.projectItemContainer} ${isHovered ? styles.hovered : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={styles.mediaWrapper}>
                {!isHovered || !videoUrl ? (
                    <img src={imageUrl} alt={name} className={styles.projectItemImage} />
                ) : (
                    <video src={videoUrl} autoPlay loop muted className={styles.projectItemImage} />
                )}
            </div>
            <div className={styles.projectInfo}>
                <h3 className={styles.projectName}>{name}</h3>
                <p className={styles.projectDescription}>{description}</p>
            </div>
        </div>
    );
};

export default ProjectItem;


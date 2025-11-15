import React, { useState } from 'react';
import styles from './projectItem.module.less';
import IconLink from "../../components/IconLink/IconLink.tsx";
import githubIcon from "../../../icons/githubIcon.tsx";
import webIcon from "../../../icons/webIcon.tsx";

type ProjectItemProps = {
    imageUrl: string;
    videoUrl?: string;
    name: string;
    description: string;
    githubUrl?: string;
    websiteUrl?: string;
};


const ProjectItem: React.FC<ProjectItemProps> = ({
                           imageUrl, videoUrl, name, description, githubUrl, websiteUrl}) => {
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

            <div className={styles.projectLinks}>
                {githubUrl && (
                    <IconLink icon={githubIcon} url={githubUrl}/>
                )}
                {websiteUrl && (
                    <IconLink icon={webIcon} url={websiteUrl} />
                )}
            </div>
        </div>
    );
};

export default ProjectItem;


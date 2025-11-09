import React, { useState } from 'react';
import styles from './projectItem.module.less';

interface ProjectItemProps {
  imageUrl: string;
  videoUrl?: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ imageUrl, videoUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
      <div
          className={`${styles.projectItemContainer} ${isHovered ? styles.hovered : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
      >
        {!isHovered || !videoUrl ? (
            <img src={imageUrl} alt="project" className={styles.projectItemImage} />
        ) : (
            <video src={videoUrl} autoPlay loop muted className={styles.projectItemImage} />
        )}
      </div>
  );
};

export default ProjectItem;

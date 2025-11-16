import React from "react";
import styles from "./imageModal.module.less";

type ImageModalProps = {
    src: string;
    setVisible: (value: boolean) => void;
};

function ImageModal({ src, setVisible }: ImageModalProps) {
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            setVisible(false);
        }
    };


    return (
        <div onClick={handleClick} className={styles.modalOverlay}>
            <img onClick={handleClick} src={src} alt="modal" className={styles.modalImage} />
        </div>
    );
}


export default ImageModal;
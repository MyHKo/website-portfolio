import {type ReactElement} from "react";
import styles from "./staticBackground.module.less";

function StaticBackground(): ReactElement {
    // Generate static grey circles of different sizes
    const circles = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        size: Math.random() * 100 + 30, // Random size between 30 and 130px
        left: Math.random() * 100, // Random horizontal position (percentage)
        top: Math.random() * 100, // Random vertical position (percentage)
        opacity: Math.random() * 0.3 + 0.1, // Random opacity between 0.1 and 0.4
    }));

    return (
        <div className={styles.background}>
            {circles.map((circle) => (
                <div
                    key={circle.id}
                    className={styles.circle}
                    style={{
                        width: `${circle.size}px`,
                        height: `${circle.size}px`,
                        left: `${circle.left}%`,
                        top: `${circle.top}%`,
                        opacity: circle.opacity,
                    }}
                />
            ))}
        </div>
    );
}

export default StaticBackground;


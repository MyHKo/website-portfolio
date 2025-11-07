import {type ReactElement} from "react";
import styles from "./staticBackground.module.less";

function StaticBackground(): ReactElement {
    // Generate static grey circles of different sizes scattered across the background
    const circles = Array.from({ length: 25 }, (_, i) => ({
        id: i,
        size: Math.random() * 200 + 40, // Random size between 40 and 240px (more variety)
        left: Math.random() * 100, // Random horizontal position (percentage)
        top: Math.random() * 100, // Random vertical position (percentage)
        opacity: Math.random() * 0.25 + 0.1, // Random opacity between 0.1 and 0.35
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


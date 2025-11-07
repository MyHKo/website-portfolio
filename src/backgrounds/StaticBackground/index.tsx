import {type ReactElement} from "react";
import styles from "./staticBackground.module.less";

function StaticBackground(): ReactElement {
    const circles = Array.from({ length: 25 }, (_, i) => ({
        id: i,
        size: Math.random() * 200 + 40,
        left: Math.random() * 100,
        top: Math.random() * 100,
        opacity: Math.random() * 0.25 + 0.1,
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


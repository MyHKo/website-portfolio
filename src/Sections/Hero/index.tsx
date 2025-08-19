import type { ReactElement } from "react";
import {useSpring, animated} from "react-spring";
import {to} from "@react-spring/web";
import { useMove } from "react-use-gesture";
import styles from "./hero.module.less";
import {ParallaxBackground} from "./ParallaxBackground";

function HeroSection(): ReactElement {
    const [style, api] = useSpring(() => ({x: 0,y: 0}));

    const bind= useMove(({ xy: [px,py]}) => {
        const x: number = (px / window.innerWidth - 0.5) * 100;
        const y: number = (py / window.innerHeight - 0.5) * 100;
        api.start({x, y});
    })

    return (
        <section {...bind()} className={styles.section}>
            <animated.div className={styles.half} style={{
                transform: to([style.x, style.y], (x, y) => `translate(${x/2}px, ${y/2}px)`)
            }}>
                <ParallaxBackground />
            </animated.div>
            <animated.div className={styles.text} style={{
                transform: to([style.x, style.y], (x, y) => `translate(${x/15}px, ${y/15}px)`)
            }}>
                Welcome.
            </animated.div>
        </section>
    )
}

export default HeroSection

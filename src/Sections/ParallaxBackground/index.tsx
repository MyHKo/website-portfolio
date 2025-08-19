import styles from "./parallaxBackground.module.less";
import type {ReactElement} from "react";
import {useSprings} from "@react-spring/web";
import {animated} from "@react-spring/web";
import setAnimationCoordinatesFromTo from "../../Utils/SetAnimationCoordinatesFromTo.ts";

function ParallaxBackground(): ReactElement {
    const [springs] = useSprings(30, () => {
        const { from, to } = setAnimationCoordinatesFromTo()

        console.log(to);
        return {
            from,
            to: async (next) => {
                while (true) {
                    await next({
                        ...to,
                        rotate: Math.random() * 360,
                        config: { mass: 10, tension: 20, friction: 50}
                    });
                }
            }
        }},
        [])

    return (
        <div className={styles.parallaxBackground}>
            {
                springs.map((style): ReactElement => {
                    return (
                        <animated.svg
                        style = {{
                            width: 30,
                            height: 30,
                            position: "absolute",
                            ...style
                        }}>
                           <circle cx={18} cy={18} r={10} fill={"#000"} style={{
                               opacity: "30%"
                           }}/>
                        </animated.svg>
                    )
                })
            }
        </div>
    )
}

export default ParallaxBackground

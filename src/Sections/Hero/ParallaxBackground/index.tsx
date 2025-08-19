import styles from "./parallaxBackground.module.less";
import type {ReactElement} from "react";
import {animated, useSprings} from "@react-spring/web";
import setAnimationCoordinatesFromTo from "../../../Utils/SetAnimationCoordinatesFromTo.ts";

function ParallaxBackground(): ReactElement {
    const [springs, api] = useSprings(30, (i: number) => {
        const {from, to} = setAnimationCoordinatesFromTo()
        return {
            from: from,
            to: to,
            config: {duration: Math.random() * (12000 - 7000) + 7000},
            onRest: () => continueAnimation(i)
        }
    },[])

    function continueAnimation(targetIndex: number) {
        const {from, to} = setAnimationCoordinatesFromTo()
        api.start((i:number) => {
            if(i !== targetIndex)
                return
            return {
                from: from,
                to: to,
                config: {duration: Math.random() * (12000 - 7000) + 7000},
                onRest: () => continueAnimation(i)
            }
        })
    }

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

export {ParallaxBackground}

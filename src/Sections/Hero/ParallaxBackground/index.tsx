import styles from "./parallaxBackground.module.less";
import {type ReactElement, type RefObject, useEffect, useRef} from "react";

function ParallaxBackground(): ReactElement {
    const canvasRef:RefObject<HTMLCanvasElement | null> = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas:HTMLCanvasElement | null = canvasRef.current;
        if(!canvas){
            return;
        }
        const ctx:CanvasRenderingContext2D | null = canvas.getContext("2d");
        if(!ctx){
            return;
        }

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let x:number = 0;
        let y:number = 0;
        const speed:number = 2;
        let animationFrameId:number;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.beginPath();
            ctx.arc(x, y, 13, 0, 2 * Math.PI);
            ctx.fillStyle = "rgba(0,0,0,0.6)";
            ctx.fill();

            x+=speed;
            if(x > canvas.width + 20){
                x = -20;
                y = Math.random() * canvas.height;
            }

            animationFrameId = requestAnimationFrame(animate);
        }

        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
        }
    })

    return (
        <div className={styles.parallaxBackground}>
            <canvas ref={canvasRef}/>
        </div>
    )
}

export {ParallaxBackground}

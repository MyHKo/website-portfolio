import {type ReactElement, type RefObject, useEffect, useRef} from "react";
import generateParticleData from "../../../Utils/generateParticleData.ts";

function HeroBackground(): ReactElement {
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

        canvas.width = window.screen.width;
        canvas.height = window.screen.height;

        const points: {x:number, y:number, speedX:number, speedY:number}[] = Array.from({length: 30}, () => generateParticleData());
        let animationFrameId:number;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for(let i=0; i<points.length; i++) {
                ctx.beginPath();
                ctx.arc(points[i].x, points[i].y, 20, 0, 2 * Math.PI);
                ctx.fillStyle = "rgba(0,0,0,0.2)";
                ctx.fill();

                points[i].x += points[i].speedX;
                points[i].y += points[i].speedY;
                if (points[i].x > canvas.width + 50 || points[i].y > canvas.height + 50 ) {
                    points[i] = generateParticleData();
                } else if(points[i].x < -50 || points[i].y < -50){
                    points[i] = generateParticleData();
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        }

        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
        }
    })

    return (
            <canvas ref={canvasRef}/>
    )
}

export {HeroBackground}

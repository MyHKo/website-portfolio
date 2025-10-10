import {type ReactElement, type RefObject, useEffect, useRef} from "react";
import generateParticleData from "../../../Utils/generateParticleData.ts";
import isParticleClicked from "../../../Utils/isParticleClicked.ts";

function HeroBackground(): ReactElement {
    const canvasRef:RefObject<HTMLCanvasElement | null> = useRef<HTMLCanvasElement>(null);
    const particleRadius: number = 20;

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

        const particles: {x:number, y:number, speedX:number, speedY:number}[] = Array.from({length: 30}, () => generateParticleData());
        let animationFrameId:number;

        canvas.addEventListener("click",(e: MouseEvent): void =>{
            if(isParticleClicked(particleRadius, particles, e, canvas)){
                console.log("clicked");
            }
        })

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for(let i=0; i<particles.length; i++) {
                ctx.beginPath();
                ctx.arc(particles[i].x, particles[i].y, particleRadius, 0, 2 * Math.PI);
                ctx.fillStyle = "rgba(0,0,0,0.2)";
                ctx.fill();

                particles[i].x += particles[i].speedX;
                particles[i].y += particles[i].speedY;
                if (particles[i].x > canvas.width + 50 || particles[i].y > canvas.height + 50 ) {
                    particles[i] = generateParticleData();
                } else if(particles[i].x < -50 || particles[i].y < -50){
                    particles[i] = generateParticleData();
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

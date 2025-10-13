import {type ReactElement, type RefObject, useEffect, useRef} from "react";
import generateParticleData from "../../../Utils/generateParticleData.ts";
import isParticleClicked from "../../../Utils/isParticleClicked.ts";
import randomBetween from "../../../Utils/randomBetween.ts";
import type {Particle} from "../../../Interfaces/Particle.ts";
import type {PopParticle} from "../../../Interfaces/PopParticle.ts";
import generatePopParticleData from "../../../Utils/generatePopParticleData.ts";

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

        const particles: Particle[] = Array.from({length: 30}, () => generateParticleData());
        const popParticles: Set<PopParticle> = new Set;
        let animationFrameId:number;

        canvas.addEventListener("click", (e: MouseEvent): void =>{
            const rect:DOMRect = canvas.getBoundingClientRect();
            for(const particle of particles){
                if(isParticleClicked(particleRadius, particle, e, rect)){
                    for(let i:number = 0; i< randomBetween([3,7]);i++){
                        popParticles.add(generatePopParticleData(particle.x, particle.y));
                    }
                    particle.x = -51;
                }
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

            if(popParticles.size){
                const iterator = popParticles.values()
                while (true) {
                    const particle:PopParticle|undefined = iterator.next().value;
                    if(!particle){
                        break;
                    }
                    ctx.beginPath();
                    ctx.arc(particle.x, particle.y, particleRadius, 0, 2 * Math.PI);
                    ctx.fillStyle = particle.colour;
                    ctx.fill();

                    particle.x += particle.speedX;
                    particle.y += particle.speedY;
                    particle.speedX = particle.speedX / 1.0002;
                    particle.speedY = particle.speedY / 1.0002;
                    particle.age += 1;
                    if(particle.age === 120){
                        popParticles.delete(particle)
                    }
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

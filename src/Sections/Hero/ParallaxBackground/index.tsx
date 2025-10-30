import {type ReactElement, type RefObject, useEffect, useRef} from "react";
import generateParticleData from "../../../Utils/generateParticleData.ts";
import isParticleClicked from "../../../Utils/isParticleClicked.ts";
import randomBetween from "../../../Utils/randomBetween.ts";
import type {Particle} from "../../../Interfaces/Particle.ts";
import type {PopParticle} from "../../../Interfaces/PopParticle.ts";
import generatePopParticleData from "../../../Utils/generatePopParticleData.ts";
import type {TrailParticle} from "../../../Interfaces/TrailParticle.ts";

function HeroBackground(): ReactElement {
    const canvasRef:RefObject<HTMLCanvasElement | null> = useRef<HTMLCanvasElement>(null);
    const particleRadius: number = 20;
    const mousePos: {x: number, y: number} = {x: 0, y: 0};

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
        const trailParticles: Set<TrailParticle> = new Set;
        let animationFrameId:number;

        canvas.addEventListener("mousemove", (e: MouseEvent): void =>{
            mousePos.x = e.clientX;
            mousePos.y = e.clientY;
            const rect:DOMRect = canvas.getBoundingClientRect();
            for(const particle of particles){
                if(isParticleClicked(particleRadius, particle, e.clientX, e.clientY, rect)){
                    for(let i:number = 0; i< randomBetween([3,7]);i++){
                        popParticles.add(generatePopParticleData(particle.x, particle.y));
                    }
                    particle.x = -51;
                }
            }
            trailParticles.add({x: e.clientX + 8, y: e.clientY+12, opacity: 1, radius: 3});
        })

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for(let i=0; i<particles.length; i++) {
                ctx.beginPath();
                ctx.arc(particles[i].x, particles[i].y, particleRadius, 0, 2 * Math.PI);
                ctx.fillStyle = "rgb(0,0,0)";
                ctx.globalAlpha = 0.15;
                ctx.fill();

                if(isParticleClicked(particleRadius, particles[i], mousePos.x, mousePos.y, canvas.getBoundingClientRect())) {
                    for (let j: number = 0; j < randomBetween([3, 7]); j++) {
                        popParticles.add(generatePopParticleData(particles[i].x, particles[i].y));
                    }
                    particles[i].x = -51;
                }
                else {
                    particles[i].y += particles[i].speedY;
                    particles[i].x += particles[i].speedX;
                }

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
                    ctx.arc(particle.x, particle.y, 12, 0, 2 * Math.PI);
                    ctx.fillStyle = particle.colour;
                    ctx.globalAlpha = particle.opacity;
                    ctx.fill();

                    particle.x += particle.speedX;
                    particle.y += particle.speedY;
                    particle.speedX = particle.speedX / 1.005;
                    particle.speedY = particle.speedY / 1.005;
                    particle.age += 1;
                    particle.opacity /= 1.018;
                    if(particle.age === 240){
                        popParticles.delete(particle)
                    }
                }
            }

            if(trailParticles.size){
                const iterator = trailParticles.values()
                while (true) {
                    const particle:TrailParticle|undefined = iterator.next().value;
                    if(!particle){
                        break;
                    }

                    ctx.beginPath();
                    ctx.arc(particle.x, particle.y, particle.radius, 0, 2 * Math.PI);
                    ctx.fillStyle = "#CF1259";
                    ctx.globalAlpha = particle.opacity;
                    ctx.fill();

                    if(particle.radius < 15)
                        particle.radius += 0.3
                    particle.opacity /= 1.1;
                    if(particle.opacity < 0.01){
                        trailParticles.delete(particle)
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
            <canvas ref={canvasRef} id={"canvas"}/>
    )
}

export {HeroBackground}

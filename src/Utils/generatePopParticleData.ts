import type {PopParticle} from "../Interfaces/PopParticle.ts";
import randomBetween from "./randomBetween.ts";

function randomDirection(): {speedX: number; speedY: number} {
    const theta: number = Math.random() * 2 * Math.PI;
    return { speedX: Math.cos(theta)/2.3, speedY: Math.sin(theta)/2.3 };
}

function generatePopParticleData(x: number, y: number): PopParticle {
    return {
        x: x,
        y: y,
        colour: `rgb(${randomBetween([0,255])}, ${randomBetween([0,255])}, ${randomBetween([0,255])})`,
        opacity: 0.7,
        age: 1,
        ...randomDirection()
    }
}

export default generatePopParticleData;

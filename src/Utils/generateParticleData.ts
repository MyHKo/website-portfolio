import randomBetween from "./randomBetween.ts";

interface animationsCoordinates {
    xRange: [number, number],
    yRange: [number, number],
    direction: [number, number],
}

function randomInwardDirection(n: [number, number]): {speedX: number; speedY: number} {
    const base: number = Math.atan2(n[0], n[1]);
    const deviation: number = (Math.random() - 0.5) * Math.PI;
    const theta: number = base + deviation;

    return { speedX: Math.cos(theta)/2.3, speedY: Math.sin(theta)/2.3 };
}

function generateParticleData():{x:number, y:number, speedX:number, speedY:number} {
    const width: number = window.innerWidth;
    const height: number = window.innerHeight;
    const sides: animationsCoordinates[] = [
        {xRange:[-50, -40], yRange:[0, height], direction: [-1, 0]},
        {xRange:[width + 20, width + 20], yRange:[0, height], direction: [1, 0]},
        {xRange:[0, width], yRange:[-50, -50], direction: [0, -1]},
        {xRange:[0, width], yRange:[height + 20, height + 20], direction: [0, 1]}
    ]

    const side: number = Math.floor(Math.random() * 4);

    return {
        x: randomBetween(sides[side].xRange),
        y: randomBetween(sides[side].yRange),
        ...randomInwardDirection(sides[side].direction),
    };
}

export default generateParticleData;

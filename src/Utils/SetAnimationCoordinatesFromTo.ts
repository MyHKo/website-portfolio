function randomBetween([min, max]: [number, number]):number {
    return Math.random() * (max - min) + min;
}

interface animationsCoordinates {
    xRange: [number, number],
    yRange: [number, number],
}

function setAnimationCoordinatesFromTo() {
    const width: number = window.innerWidth;
    const height: number = window.innerHeight;
    const sides: animationsCoordinates[] = [
        {xRange:[-20, -20], yRange:[0, height]},
        {xRange:[width + 20, width + 20], yRange:[0, height]},
        {xRange:[0, width], yRange:[-20, -20]},
        {xRange:[0, width], yRange:[height + 20, height + 20]}
    ]

    const sideFrom: number = Math.floor(Math.random() * 4);
    let sideTo: number = Math.floor(Math.random() * 4);
    if(sideTo === sideFrom){
        sideTo = (sideTo + 1) % 4;
    }

    return {
        from: {
            x: randomBetween(sides[sideFrom].xRange),
            y: randomBetween(sides[sideFrom].yRange),
        },
        to: {
            x: randomBetween(sides[sideTo].xRange),
            y: randomBetween(sides[sideTo].yRange),
        }
    }
}

export default setAnimationCoordinatesFromTo;

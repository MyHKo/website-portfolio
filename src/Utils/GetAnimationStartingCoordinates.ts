function randomBetween([min, max]: [number, number]):number {
    return Math.random() * (max - min) + min;
}

interface animationsCoordinates {
    xRange: [number, number],
    yRange: [number, number],
}

function getAnimationStartingCoordinates():[number, number] {
    const width: number = window.innerWidth;
    const height: number = window.innerHeight;
    const sides: animationsCoordinates[] = [
        {xRange:[-50, -40], yRange:[0, height]},
        {xRange:[width + 20, width + 20], yRange:[0, height]},
        {xRange:[0, width], yRange:[-50, -50]},
        {xRange:[0, width], yRange:[height + 20, height + 20]}
    ]

    const side: number = Math.floor(Math.random() * 4);
    const coordinates: [number, number] = [0,0]
    coordinates[0] = randomBetween(sides[side].xRange);
    coordinates[1] = randomBetween(sides[side].yRange);

    return coordinates;
}

export default getAnimationStartingCoordinates;

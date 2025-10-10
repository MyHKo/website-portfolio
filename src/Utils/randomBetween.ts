function randomBetween([min, max]: [number, number]):number {
    return Math.random() * (max - min) + min;
}

export default randomBetween;

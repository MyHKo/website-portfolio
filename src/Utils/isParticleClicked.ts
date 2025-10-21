function isParticleClicked(particleRadius: number, particle: {x:number, y:number, speedX:number, speedY:number}, eventX: number, eventY: number, rect: DOMRect): boolean {
        const x:number = eventX - rect.left;
        const y:number = eventY - rect.top;

        const dx: number = x - particle.x;
        const dy: number = y - particle.y;
        const distance: number = Math.sqrt(dx * dx + dy * dy);
        return distance < particleRadius
}

export default isParticleClicked

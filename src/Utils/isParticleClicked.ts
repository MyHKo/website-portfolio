function isParticleClicked(particleRadius: number, particle: {x:number, y:number, speedX:number, speedY:number}, event: MouseEvent, rect: DOMRect): boolean {
        const x:number = event.clientX - rect.left;
        const y:number = event.clientY - rect.top;

        const dx: number = x - particle.x;
        const dy: number = y - particle.y;
        const distance: number = Math.sqrt(dx * dx + dy * dy);
        return distance < particleRadius
}

export default isParticleClicked

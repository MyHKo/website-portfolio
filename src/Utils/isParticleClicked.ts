function isParticleClicked(particleRadius: number, particles: {x:number, y:number, speedX:number, speedY:number}[], event: MouseEvent, canvas:HTMLCanvasElement): boolean {
    for(let i=0; i<particles.length; i++){
        const rect = canvas.getBoundingClientRect();
        const x:number = event.clientX - rect.left;
        const y:number = event.clientY - rect.top;

        const dx: number = x - particles[i].x;
        const dy: number = y - particles[i].y;
        const distance: number = Math.sqrt(dx * dx + dy * dy);
        if(distance < particleRadius){
            return true;
        }
    }
    return false;
}

export default isParticleClicked

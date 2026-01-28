class ParticleBackground {
  static get inputProperties() {
    return [
      '--particle-count',
      '--particle-color',
      '--t'
    ];
  }

  paint(ctx, size, props) {
    const count = parseInt(props.get('--particle-count')) || 40;
    const color = props.get('--particle-color').toString().trim() || 'rgba(255,255,255,0.5)';
    const t = parseFloat(props.get('--t')) || 0;

    // Black background for Firefox
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, size.width, size.height);

    ctx.fillStyle = color;

    for (let i = 0; i < count; i++) {
      // Base random position (stable per particle)
      const seed = i * 9999;
      const baseX = (Math.sin(seed) * 0.5 + 0.5) * size.width;
      const baseY = (Math.cos(seed) * 0.5 + 0.5) * size.height;

      // Smooth drifting animation
      const x = baseX + Math.sin(t + i) * 20;
      const y = baseY + Math.cos(t + i * 1.3) * 20;

      const r = 2 + Math.sin(t * 0.5 + i) * 1;

      ctx.beginPath();
      ctx.arc(x, y, Math.abs(r), 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

registerPaint('particle-bg', ParticleBackground);

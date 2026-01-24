class ParticleBackground {
  static get inputProperties() {
    return ['--particle-count', '--particle-color'];
  }

  paint(ctx, size, props) {
    const count = parseInt(props.get('--particle-count')) || 40;
    const color = props.get('--particle-color').toString().trim() || 'rgba(255,255,255,0.5)';

    ctx.fillStyle = color;

    for (let i = 0; i < count; i++) {
      const x = Math.random() * size.width;
      const y = Math.random() * size.height;
      const r = Math.random() * 3 + 1;

      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

registerPaint('particle-bg', ParticleBackground);

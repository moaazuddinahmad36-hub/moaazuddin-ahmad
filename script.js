// Small interaction layer: scroll cue + gentle parallax.
const hero = document.querySelector('.hero');
window.addEventListener('pointermove', (e) => {
  const x = (e.clientX / innerWidth - .5) * 2;
  const y = (e.clientY / innerHeight - .5) * 2;
  const img = document.querySelector('.image-wrap img');
  if (img && innerWidth > 700) {
    img.style.transform = `scale(1.06) translate(${x * 5}px, ${y * 4}px)`;
  }
});
window.addEventListener('pointerleave', () => {
  const img = document.querySelector('.image-wrap img');
  if (img) img.style.transform = '';
});

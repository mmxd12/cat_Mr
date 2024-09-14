function createFirework() {
  const container = document.querySelector('.fireworks-container');
  const firework = document.createElement('div');
  firework.classList.add('firework');
  firework.style.left = `${Math.random() * 100}vw`;
  firework.style.animationDelay = `${Math.random() * 2}s`;
  container.appendChild(firework);

  firework.addEventListener('animationend', () => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 2 + 1}s`;
    container.appendChild(heart);

    heart.addEventListener('animationend', () => {
      heart.remove();
    });
  });
}

setInterval(createFirework, 1000);

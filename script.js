

  window.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('bg-music');
    audio.volume = 0.5;

    // Try autoplay silently first
    audio.play().catch(() => {
      // If blocked, wait for user click
      document.body.addEventListener('click', () => {
        audio.play();
      }, { once: true });
    });
  });
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener('click', function (e) {
      e.preventDefault();
      const destino = document.querySelector(this.getAttribute('href'));
      const offset = 190;
      window.scrollTo({
        top: destino.offsetTop - offset,
        behavior: 'smooth'
      });
    });
  });
  
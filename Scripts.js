
    window.addEventListener('scroll', function() {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('fixed-scroll');
      } else {
        navbar.classList.remove('fixed-scroll');
      }
    });

    

  function toggleCafeSection() {
    var cafeContainer = document.getElementById('cafe-container');

    if (cafeContainer.style.display === 'none') {
      cafeContainer.style.display = 'block';
    } else {
      cafeContainer.style.display = 'none';
    }
  }

  function togglePostresSection() {
    var postresContainer = document.getElementById('postres-container');

    if (postresContainer.style.display === 'none') {
      postresContainer.style.display = 'block';
    } else {
      postresContainer.style.display = 'none';
    }
  }

  function ocultarSecciones() {
    // Oculta todas las secciones
    var secciones = document.querySelectorAll('div[id$="-container"]');
    secciones.forEach(function(seccion) {
      seccion.style.display = 'none';
    });

    // Muestra solo la sección activa actualmente
    var seccionActiva = document.querySelector('.navbar-nav .active');
    var seccionId = seccionActiva.getAttribute('href');
    var contenedorId = seccionId + '-container';
    var contenedor = document.getElementById(contenedorId);
    contenedor.style.display = 'block';
  }

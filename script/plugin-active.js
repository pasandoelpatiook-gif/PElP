$(document).ready(function() {
  // Mobile menu trigger script
  $(".menu-trigger").click(function() {
      $(this).toggleClass('active');
      $(".mobile-menu").toggleClass('visible');

  });
  // Smoothscroll script
  $('.nav-link').click(function() {
      var dis = $(this),
          disTarget = dis.data('target'),
          ScrollTo = $(disTarget).offset().top;
      dis.addClass('active').siblings('.nav-link').removeClass('active');
      $('html,body').animate({ scrollTop: ScrollTo });
  });
  // contact form script
  $('.form-wrap input').blur(function() {
      tmpval = $(this).val();
      if (tmpval == '') {
          $(this).addClass('empty');
          $(this).removeClass('not-empty');
      } else {
          $(this).addClass('not-empty');
          $(this).removeClass('empty');
      }
  });
  // testimonial slider
  $('.testimonial-slider').bxSlider({
      auto: true,
      mode: 'fade',
      infiniteLoop: true,
      controls: false
  });
  // Changing the defaults 
  window.sr = ScrollReveal();
  // Customizing a reveal set 
  sr.reveal('.each-service', { origin: 'bottom', distance: '100px', duration: 1000, delay: 0, easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' });
  // sript for fixed header on scroll
  $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 60) {
          $("#Header").addClass("header-fixed");
      } else {
          $("#Header").removeClass("header-fixed");
      }
  });
  // Highlight menu item on scroll
$(window).on('scroll', function () {
  var scrollPos = $(document).scrollTop();
  
  $('.nav-link').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.data('target'));
    
    if (refElement.length && refElement.position().top - 100 <= scrollPos &&
        refElement.position().top + refElement.height() > scrollPos) {
      
      $('.nav-link').removeClass('active');
      currLink.addClass('active');
    }
  });
});
// ====== Sticky + Hide on Scroll ======
let lastScrollTop = 0;
const header = document.getElementById("Header");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Si baja y pasa los 200px → ocultar
  if (scrollTop > lastScrollTop && scrollTop > 200) {
    header.style.transform = "translateY(-100%)";
  } 
  // Si sube → mostrar
  else {
    header.style.transform = "translateY(0)";
  }

  // Mantener header fijo arriba
  if (scrollTop > 100) {
    header.classList.add("fixed-header");
  } else {
    header.classList.remove("fixed-header");
  }

  lastScrollTop = scrollTop;
});

// === BOTÓN TURNOS (funciona con tu HTML: id="btn-turno" y sección id="turnos") ===
$('#btn-turno').on('click', function(e) {
  e.preventDefault();

  const turnosSection = document.getElementById('turnos');
  const main = document.getElementById('MainContainer');

  if (!turnosSection || !main) {
    console.error('No se encontró #turnos o #MainContainer en el DOM.');
    return;
  }

  // Oculta las hijas directas de #MainContainer excepto la que contiene #turnos
  Array.from(main.children).forEach(child => {
    // si el child es el propio turnosSection (raro) o contiene a turnos, lo dejamos
    if (child === turnosSection || child.contains(turnosSection)) {
      child.style.display = ''; // dejar como estaba (o 'block' si querés)
    } else {
      child.style.display = 'none';
    }
  });

  // Asegurarse que la sección turnos esté visible
  turnosSection.style.display = 'block';
  turnosSection.scrollIntoView({ behavior: 'smooth' });

  // Si ya existe un botón volver, no lo duplicamos
  if (!document.getElementById('btn-volver-sitio')) {
    const volverBtn = document.createElement('button');
    volverBtn.id = 'btn-volver-sitio';
    volverBtn.textContent = 'Volver al sitio';
    volverBtn.style.position = 'fixed';
    volverBtn.style.top = '18px';
    volverBtn.style.right = '18px';
    volverBtn.style.zIndex = '9999';
    volverBtn.style.padding = '10px 14px';
    volverBtn.style.borderRadius = '6px';
    volverBtn.style.border = 'none';
    volverBtn.style.cursor = 'pointer';
    // Opcional: estilos rápidos para que se vea bien; podés moverlos a tu CSS
    volverBtn.style.background = '#0084ff';
    volverBtn.style.color = '#fff';
    document.body.appendChild(volverBtn);

    volverBtn.addEventListener('click', function () {
      // Restaurar la visibilidad de las hijas de #MainContainer
      Array.from(main.children).forEach(child => {
        child.style.display = '';
      });

      // Ocultar la sección turnos (si querés que quede oculta otra vez)
      turnosSection.style.display = 'none';

      // Quitar el botón Volver
      volverBtn.remove();
      // Llevar al inicio (opcional)
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
document.getElementById('btnVolver').addEventListener('click', function(e) {
    e.preventDefault();
    // Recargar página para volver a mostrar todo
    location.reload();
});

});










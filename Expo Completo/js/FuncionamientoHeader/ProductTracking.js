const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');
const menuOverlay = document.getElementById('menuOverlay');
const menuItems = document.querySelectorAll('.menu-item.has-submenu');

// Toggle del menú principal
function toggleMenu() {
  menuToggle.classList.toggle('active');
  sideMenu.classList.toggle('active');
  menuOverlay.classList.toggle('active');
  document.body.style.overflow = sideMenu.classList.contains('active') ? 'hidden' : 'auto';
}

// Cerrar menú
function closeMenu() {
  menuToggle.classList.remove('active');
  sideMenu.classList.remove('active');
  menuOverlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Event listeners
menuToggle.addEventListener('click', toggleMenu);
menuOverlay.addEventListener('click', closeMenu);

// Submenús desplegables
menuItems.forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault();

    const submenuId = this.getAttribute('data-submenu');
    const submenu = document.getElementById(submenuId);

    // Cerrar otros submenús
    menuItems.forEach(otherItem => {
      if (otherItem !== this) {
        otherItem.classList.remove('active');
        const otherSubmenuId = otherItem.getAttribute('data-submenu');
        if (otherSubmenuId) {
          document.getElementById(otherSubmenuId).classList.remove('active');
        }
      }
    });

    // Toggle del submenú actual
    this.classList.toggle('active');
    submenu.classList.toggle('active');
  });
});

// Cerrar menú con tecla Escape
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeMenu();
  }
});

document.getElementById('btncerrarSesion').addEventListener('click', function () {
  window.location.href = 'Login.html';
});


const chkTransporte = document.getElementById('chkTransporte');
const segundoRecuadro = document.getElementById('segundo-recuadro');

chkTransporte.addEventListener('change', function () {
  if (this.checked) {
    segundoRecuadro.style.display = 'block';
  } else {
    segundoRecuadro.style.display = 'none';
  }
});


const btnFinalizar = document.getElementById('btnFinalizar');

btnFinalizar.addEventListener('click', function () {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const algunoMarcado = Array.from(checkboxes).some(cb => cb.checked);

  const selectivo = document.getElementById('selectivo').value;

  if (!algunoMarcado) {
    Swal.fire({
      title: "Atención",
      text: "Debes marcar al menos una opción antes de finalizar.",
      icon: "warning",
      confirmButtonText: "Entendido"
    });
  } else if (selectivo === "rojo") {
    Swal.fire({
      title: "No puedes finalizar",
      text: "El estado selectivo está en ROJO. Corrige antes de continuar.",
      icon: "error",
      confirmButtonText: "Entendido"
    });
  } else if (selectivo === "") {
    Swal.fire({
      title: "Atención",
      text: "Debes seleccionar un estado del selectivo.",
      icon: "warning",
      confirmButtonText: "Entendido"
    });
  } else {
    Swal.fire({
      title: "¡Felicidades!",
      text: "El seguimiento ha sido completado con éxito.",
      icon: "success",
      confirmButtonText: "Aceptar"
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "Orders.html";
      }
    });
  }
});
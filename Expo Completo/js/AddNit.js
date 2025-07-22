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

// ---

// Lista de clientes
const clientes = [
  { idUsuario: '1', nit: '123456789', nombre: 'Juan', apellido: 'Pérez' },
  { idUsuario: '2', nit: '987654321', nombre: 'Ana', apellido: 'López' },
  { idUsuario: '3', nit: '456789123', nombre: 'Carlos', apellido: 'Ramírez' },
  { idUsuario: '4', nit: '789123456', nombre: 'María', apellido: 'González' },
  { idUsuario: '5', nit: '321654987', nombre: 'Luis', apellido: 'Hernández' }
];

// Cargar clientes al contenedor
function cargarClientes() {
  const contenedor = document.getElementById('listaClientes');
  contenedor.innerHTML = ''; // Limpiar

  clientes.forEach(cliente => {
    const div = document.createElement('div');
    div.classList.add('cliente');

    div.innerHTML = `
      <div class="cliente-info">
        <strong>NIT:</strong> ${cliente.nit}<br>
        <strong>Nombre:</strong> ${cliente.nombre} ${cliente.apellido}
      </div>
      <button class="boton-agregar btNAgregarNit">Agregar NIT</button>
    `;

    contenedor.appendChild(div);
  });

  // Agregar listeners después de insertar los botones
  const botones = document.querySelectorAll('.btNAgregarNit');
  botones.forEach(boton => {
    boton.addEventListener('click', function () {
      window.location.href = '/ServiceOrder.html';
    });
  });
}



// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
  const RespuestaNit = document.getElementById('btnNo');

  RespuestaNit.addEventListener('click', function() {
    // Redirige a la nueva página
    window.location.href = '/HomePage.html';
  });
});

// Mostrar sección al hacer clic en "Sí"
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.respuestaSi').addEventListener('click', function () {
    const seccion = document.getElementById('busquedaNit');
    seccion.style.display = 'block';
    seccion.scrollIntoView({ behavior: 'smooth' });
    cargarClientes(); // Mostrar clientes y asignar listeners al hacer scroll
  });
});



// Filtro de búsqueda
function filtrarClientes() {
  const filtro = document.getElementById('inputBusquedaNit').value.toLowerCase();
  const clientesDOM = document.querySelectorAll('#listaClientes .cliente');

  clientesDOM.forEach(cliente => {
    const texto = cliente.textContent.toLowerCase();
    cliente.style.display = texto.includes(filtro) ? '' : 'none';
  });
}





document.getElementById('btncerrarSesion').addEventListener('click', function() {
  window.location.href = 'Login.html';
});
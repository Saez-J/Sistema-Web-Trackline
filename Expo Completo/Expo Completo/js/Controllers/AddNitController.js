import {
    getCliente,
    createCliente,
    updateCliente,
    deleteCliente
} from "../Services/AddNitService.js"


// --- Referencias a elementos del DOM ---
document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('listaClientes');
    const seccion = document.getElementById('busquedaNit');
    const botonSi = document.querySelector('.respuestaSi');
    const botonNo = document.getElementById('btnNo');
    const inputBusqueda = document.getElementById('inputBusquedaNit'); // Seleccionar el input

    // Iniciar la aplicación
    init();

    function init() {
        // Manejar el clic en el botón "Sí"
        botonSi.addEventListener('click', () => {
            seccion.style.display = 'block';
            seccion.scrollIntoView({ behavior: 'smooth' });
            loadClientes();
        });

        // Manejar el clic en el botón "No"
        botonNo.addEventListener('click', () => {
            window.location.href = '/index.html';
        });

        // Evento para el filtro en el campo de búsqueda
        inputBusqueda.addEventListener('input', filtrarClientes);

        // Ocultar la sección al inicio, si es necesario
        seccion.style.display = 'none';
    }

    // Función para cargar los clientes
    async function loadClientes() {
        contenedor.innerHTML = ''; // Limpiar contenedor
        try {
            const clientes = await getCliente(); // Ya es JSON

            // Renderizar cada cliente
            clientes.forEach(cliente => {
                const div = document.createElement('div');
                div.classList.add('cliente');
                div.dataset.id = cliente.idUsuario;


                div.innerHTML = `
                <div class="cliente-info">
                    <strong class="ClienteId">ID:</strong> ${cliente.idUsuario}<br>
                    <strong>NIT:</strong> ${cliente.clienteNIT}<br>
                    <strong>Nombre:</strong> ${cliente.nombre} ${cliente.apellido}
                </div>
                <button class="boton-agregar btNAgregarNit">Agregar NIT</button>
            `;

                const botonAgregarNit = div.querySelector('.btNAgregarNit');
                botonAgregarNit.addEventListener('click', async (e) => {
                    const idCliente = div.dataset.id;
                    localStorage.setItem('idCliente', idCliente);
                    window.location.href = '../ServiceOrder.html';

                    const id = div.dataset.id.valueOf; //Obtenemos el ID
                    const data = {
                        id: idCliente,
                    };

                    try {
                            await createCliente(data);
                    
                        await loadClientes(); //Nos permite cargar las categorias
                    }
                    catch (err) {
                        console.error("Error: ", err);
                    }
                });

                contenedor.appendChild(div);
            });
        } catch (error) {
            console.error('Ha ocurrido un error al cargar los clientes:', error);
            contenedor.innerHTML = '<p>No se pudieron cargar los datos. Inténtalo de nuevo más tarde.</p>';
        }
    }


    // Filtro de búsqueda
    function filtrarClientes() {
        const filtro = inputBusqueda.value.toLowerCase(); // Leer el valor actualizado del input
        const clientesDOM = document.querySelectorAll('#listaClientes .cliente'); // Seleccionar clientes actuales
        clientesDOM.forEach(cliente => {
            const texto = cliente.textContent.toLowerCase();
            cliente.style.display = texto.includes(filtro) ? '' : 'none';
        });
    }

});
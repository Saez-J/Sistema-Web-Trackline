import {
    getTransportista,
    createTransportista,
    updateTransportista,
    deleteTransportista
} from "../Services/TransporteService"

document.addEventListener("DOMContentLoaded", () => {
    const transportista = document.getElementById('transportista');
    const btnAdd = document.getElementById('guardarTransporte');
    const idOrden = document.getElementById('idOrden');
    const idGuardado = localStorage.getItem('id');


    init(); //Este metodo permite cargar las categorias de la tabla


    const label = document.getElementById('idOrden');
    if (idGuardado) { // Verifica si el dato existe
        label.textContent = idGuardado;
    } else {
        label.textContent = 'ID no encontrado'; // Mensaje por defecto si no hay dato
    }

    btnAdd.addEventListener("click", async (e) => {
        const id = idOrden.value; //Obtenemos el ID
        const data = {
            nombre: transportista.idTransportista.value.trim()
        };

        try {
            //Si hay un ID, significa que estamos actualizando
            if (id) {
                await updateTransportista(id, data);
            }

            //si no hay un ID, significa que estamos agregando
            else {
                await createTransportista(data);
            }

            await LoadTransportistas(); //Nos permite cargar las categorias
        }
        catch (err) {
            console.error("Error: ", err);
        }
    });



    function init() {
        LoadTransportistas();
    }


    // Función asíncrona para cargar los datos de la API y llenar el select
    async function LoadTransportistas() {
        const url = getTransportista();

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Error en la petición: ${response.status}`);
            }

            const transportistas = await response.json();
            const selectElement = document.getElementById('transportista');

            // Limpiar el select antes de llenarlo
            selectElement.innerHTML = '';

            // Iterar sobre los clientes y crear las opciones
            transportistas.forEach(transportista => {
                const option = document.createElement('option');
                // Asigna un valor y un texto a la opción
                // Por ejemplo, el ID como valor y el nombre completo como texto visible
                option.value = transportista.idTransportista;
                option.textContent = `${transportista.nombre}`;

                // Añade la nueva opción al select
                selectElement.appendChild(option);
            });

        } catch (error) {
            console.error('Error al cargar las opciones:', error);
            const selectElement = document.getElementById('transportista');
            selectElement.innerHTML = '<option>Error al cargar datos</option>';
        }
    }

});  //Esto no se toca, aqui termina el evento



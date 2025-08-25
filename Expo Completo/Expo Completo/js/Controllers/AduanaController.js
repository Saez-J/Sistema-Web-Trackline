import {
    getAduana,
    createAduana,
    updateAduana,
    deleteAduana
} from "../Services/AduanaService";


document.addEventListener('DOMContentLoaded', () => {

    // --- Referencias a elementos del DOM ---
    //Campos del acordeon de Encabezado
    const tipoDeServicio = document.getElementById('fecha');
    const primeraModalidad = document.getElementById('tipoServicio');
    const segundaModalidad = document.getElementById('segundaModalidad');
    const declaracion = document.getElementById('declaracion');
    const digitador = document.getElementById('digitador');
    const tramitador = document.getElementById('tramitador');



    function ClearAduana() {
        fecha.value = "";
        encargado1.value = "";
        referencia.value = "";
        importador.value = "";
        nit1.value = "";
        registroIva1.value = "";
    };

    btnAdd.addEventListener("click", async () => {

        const id = aduanaId.value; //Obtenemos el ID
        const data = {
            TipoDeServicio: tipoDeServicio.value.trim(),
            PrimeraModalidad: primeraModalidad.value.trim(),
            SegundaModalidad: segundaModalidad.value.trim(),
            Declaracion: declaracion.value.trim(),
            Digitador: digitador.value.trim(),
            Tramitador: tramitador.trim()
        };

        try {
            //Si hay un ID, significa que estamos actualizando
            if (id) {
                await updateAduana(id, data);
            }

            //si no hay un ID, significa que estamos agregando
            else {
                await createAduana(data);
            }

            ClearEncabezado(); //Nos permite cargar las categorias
        }
        catch (err) {
            console.error("Error: ", err);
        }
    });

});
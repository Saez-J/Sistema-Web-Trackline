import {
    getDataOrden,
    createOrden,
    updateOrden,
    deleteOrden
} from "../Services/EncabezadoService";


document.addEventListener('DOMContentLoaded', () => {

    // --- Referencias a elementos del DOM ---
    //Campos del acordeon de Encabezado
    const fecha = document.getElementById('fecha');
    const encargado1 = document.getElementById('encargado1');
    const referencia = document.getElementById('referencia');
    const importador = document.getElementById('importador');
    const nit1 = document.getElementById('nit1');
    const registroIva1 = document.getElementById('registroIVA1');
    const facturarA = document.getElementById('facturarA');
    const encargado2 = document.getElementById('encargado2');
    const nit2 = document.getElementById('nit2');
    const registroIva2 = document.getElementById('registroIVA2');
    const btnAdd = document.getElementById('submitEncabezado');



    function ClearEncabezado() {
        fecha.value = "";
        encargado1.value = "";
        referencia.value = "";
        importador.value = "";
        nit1.value = "";
        registroIva1 = "";
        facturarA.value = "";
        encargado2.value = "";
        nit2.value = "";
        registroIva2.value = "";
    };

    btnAdd.addEventListener("click", async () => {

        const id = form.categoryId.value; //Obtenemos el ID
        const data = {
            Fecha: fecha.value.trim(),
            Encargado1: encargado1.value.trim(),
            Recerencia: referencia.value.trim(),
            Importador: importador.value.trim(),
            Nit1: nit1.value.trim(),
            Registroiva1: registroIva1.trim(),
            FacturarA: facturarA.value.trim(),
            Encargado2: encargado2.value.trim(),
            Nit2: nit2.value.trim(),
            Registro2: registroIva2.value.trim()
        };

        try {
            //Si hay un ID, significa que estamos actualizando
            if (id) {
                await updateOrden(id, data);
            }

            //si no hay un ID, significa que estamos agregando
            else {
                await createOrden(data);
            }

            ClearEncabezado(); //Nos permite cargar las categorias
        }
        catch (err) {
            console.error("Error: ", err);
        }
    });

});
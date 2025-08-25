import {
    getInforEmbarque,
    createInfoEmbarque,
    updateInfoEmbarque,
    deleteInfoEmbarque
} from "../Services/InfoEmbarqueService";


document.addEventListener('DOMContentLoaded', () => {

    // --- Referencias a elementos del DOM ---
    //Campos del acordeon de Encabezado
    const facturas = document.getElementById('facturas');
    const proveedor = document.getElementById('proveedor');
    const bultos = document.getElementById('bultos');
    const tipo = document.getElementById('tipo');
    const kilos = document.getElementById('kilos');
    const volumen = document.getElementById('volumen');




    function ClearEncabezado() {
        facturas.value = "";
        proveedor.value = "";
        bultos.value = "";
        tipo.value = "";
        kilos.value = "";
        volumen.value = "";
    };

    btnAdd.addEventListener("click", async () => {

        const id = categoryId.value; //Obtenemos el ID
        const data = {
            Facturas: facturas.value.trim(),
            Proveedor: proveedor.value.trim(),
            Bultos: bultos.value.trim(),
            Tipo: tipo.value.trim(),
            Kilos: kilos.value.trim(),
            Volumen: volumen.trim()
        };

        try {
            //Si hay un ID, significa que estamos actualizando
            if (id) {
                await updateInfoEmbarque(id, data);
            }

            //si no hay un ID, significa que estamos agregando
            else {
                await createInfoEmbarque(data);
            }

            ClearEncabezado(); //Nos permite cargar las categorias
        }
        catch (err) {
            console.error("Error: ", err);
        }
    });

});
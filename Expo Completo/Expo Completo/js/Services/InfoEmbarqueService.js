//Parte CRUD
const API_URL = "http://localhost:8080/apiInfoEmbarque";


export async function getInforEmbarque(){
    const res = await fetch(`${API_URL}/datosInfoEmbarque`);
    return res.json();
}

export async function createInfoEmbarque(data) { 
    //"data" son los datos que se guardan
    await fetch(`${API_URL}/agregarInfoEmbarque`, {
        method: "POST",
        headers: {"Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
}

export async function updateInfoEmbarque(id, data) {
    //el "id" se usa para saber cual actualizaremos y "data" para recibir los datos
    await fetch(`${API_URL}/actualizarInforEmbarque/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    });
}

export async function deleteInfoEmbarque(id) {
    await fetch(`${API_URL}/deleteOrden/${id}`, {
        method: "DELETE"
    });
}
